import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePurchases from '../Hooks/usePurchases';

const ManageOrders = () => {

    const [purchases, setPurchases] = usePurchases([]);
    return (
        <div>
            <h1 className="text-center text-2xl lg:text-3xl font-koulen font-semibold my-4 ">
                {" "}
                All <span className="text-primary-focus">Orders</span>
            </h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th className='text-primary-focus text-base'>Parts Name</th>
                            <th className='text-primary-focus text-base'>Customer Name</th>
                            <th className='text-primary-focus text-base'>Customer Email</th>
                            <th className='text-primary-focus text-base'>Order Quantity</th>
                            <th className='text-primary-focus text-base'>Total Price</th>
                            <th className='text-primary-focus text-base'>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map(purchase => {
                                let totalPrice = purchase.purchaseQuantity * purchase.pricePerUnit;
                                return (
                                    <tr key={purchase?._id}>
                                        <td>{purchase?.parts}</td>
                                        <td>{purchase?.customerName}</td>
                                        <td>{purchase?.customer}</td>
                                        <td>{purchase?.purchaseQuantity}</td>
                                        <td>{totalPrice}</td>
                                        <td>{
                                            !purchase.paid &&
                                            <div>
                                                <p className='btn btn-xs  btn-dark gap-2'>Unpaid</p>

                                            </div>
                                        }
                                            {
                                                purchase.paid &&
                                                <div>
                                                        <p className='btn btn-xs  btn-success text-white gap-2'>Paid<FontAwesomeIcon icon={faCheck} /></p>

                                                </div>
                                            }
                                            
                                            
                                            {/* <button className='btn btn-xs btn-outline'>Unpaid</button> */}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;