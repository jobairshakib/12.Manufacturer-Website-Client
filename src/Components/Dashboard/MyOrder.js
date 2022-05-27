import { faMoneyBill1Wave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../.firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth); 
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });
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
            toast.error("Item Deleted Successfully");
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className='text-primary-focus text-base'>Parts Name</th>
                            <th className='text-primary-focus text-base'>Parts Quantity</th>
                            <th className='text-primary-focus text-base'>Unit Price</th>
                            <th className='text-primary-focus text-base'>Total Price</th>
                            <th className='text-primary-focus text-base'>Payment</th>
                            <th className='text-primary-focus text-base'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(o =>
                                <tr key={o._id}>
                                    <td>{o.parts}</td>
                                    <td>{o.purchaseQuantity}</td>
                                    <td>{o.pricePerUnit} ৳</td>
                                    <td>{o.totalPrice} ৳</td>
                                    <td>
                                        {
                                        !o.paid &&
                                        <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success gap-2'>Pay<FontAwesomeIcon icon={faMoneyBill1Wave} /></button></Link>
                                        }
                                        {
                                            o.paid && 
                                            <div>
                                                    <p className='btn btn-xs  btn-success gap-2'>Paid</p>

                                        </div>
                                        }
                                    </td>
                                    <td><button onClick={() => handleDelete(o._id)} className='btn gap-2 btn-xs btn-error'>Delete <FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

export default MyOrder;