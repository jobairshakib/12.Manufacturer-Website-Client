import { faMoneyBill1Wave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../.firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth); 

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user]);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        
        if (confirm) {
            const url = `http://localhost:5000/purchase/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingItem = orders.filter(order => order._id !== id);
                    setOrders(remainingItem)
                })
            toast("Item Deleted Successfully");
        }
    }

    return (
        <div>
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
                                    <td><button className='btn btn-success gap-2'>Payment<FontAwesomeIcon icon={faMoneyBill1Wave}/></button></td>
                                    <td><button onClick={() => handleDelete(o._id)} className='btn gap-2 btn-error'>Delete <FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
                <ToastContainer />
            </div>
        </div>
    );
};

export default MyOrder;