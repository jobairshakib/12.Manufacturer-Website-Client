import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePurchases from '../Hooks/usePurchases';

const ManageOrders = () => {

    const [purchases, setPurchases] = usePurchases([]);
    return (
        <div>
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
                                        <td><button className='btn btn-xs btn-outline'>Unpaid</button></td>
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