import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({purchase}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { totalPrice } = purchase;
    
    useEffect(() => {
        
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({totalPrice}),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message)
        } else {
            setCardError('');
            // console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm gap-1 mt-4' type="submit" disabled={!stripe}>
                    Pay <FontAwesomeIcon icon={faMoneyBill1Wave} />
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;