import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../.firebase.init';

const MyOrder = () => {
    const [orders, serOrders] = useState([]);
    const [user] = useAuthState(auth); 

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?customer=${user.email}`)
                .then(res => res.json())
                .then(data => serOrders(data))
        }
    }, [user]);

    const handleDelete = id => {
        const confirm = window.confirm('Are you want to delete this Order?');

        if (confirm) {
            const url = `http://localhost:5000/purchase/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingOrders = orders.filter(order => order._id !== id);
                    serOrders(remainingOrders)
                })
            toast("Order Deleted Successfully");
        }
    }

    return (
        <div>
            This is my Order : {orders.length}
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className='text-primary-focus'>Parts Name</th>
                            <th className='text-primary-focus'>Parts Quantity</th>
                            <th className='text-primary-focus'>Unit Price</th>
                            <th className='text-primary-focus'>Payment</th>
                            <th className='text-primary-focus'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(o =>
                                <tr>
                                    <td>{o.parts}</td>
                                    <td>{o.purchaseQuantity}</td>
                                    <td>{o.pricePerUnit}</td>
                                    <td><button class="btn btn-outline btn-primary">Button</button></td>
                                    <td><button onClick={() => handleDelete(orders._id)} className='btn btn-outline gap-2 btn-primary'>Delete <FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                                )
                        }
                        
                        
                    </tbody>
                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyOrder;