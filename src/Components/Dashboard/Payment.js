import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L45DoKq65yi9yjgfyOkTRhpN6wybYNT5brryAkWA6PigEkWLWU4NhbOIcFeUnCaVgh5BL5hhZYspryiVbu5nJ7p00RFVg0G8c');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/purchase/${id}`;

    const { data:purchase, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    

    return (
        <>
                    <div class="card w-96 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                            <p className='text-primary-focus font-bold'>Hello, { purchase.customerName}</p>
                            <h2 class="card-title">Pay for <span className='font-bold text-primary-focus'>{purchase.parts}</span> </h2>
                            <p>You have to Pay: {purchase.totalPrice}৳</p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                        </div>
                    </div>
        </>
    );
};

export default Payment;