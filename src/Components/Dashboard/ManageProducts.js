import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useProduct from '../Hooks/useProduct';
import Loading from '../Loading/Loading';

const ManageProducts = () => {

    const [products, setProducts] = useProduct();
    const { data: parts, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/part`).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        const confirm = window.confirm('Are you want to delete this item?');

        if (confirm) {
            const url = `http://localhost:5000/part/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingItem = products.filter(item => item._id !== id);
                    setProducts(remainingItem)
                });
            toast("Item Deleted Successfully");
        }
    };


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th className='text-primary-focus text-base'>Name</th>
                            <th className='text-primary-focus text-base'>Available Quantity</th>
                            <th className='text-primary-focus text-base'>Price</th>
                            <th className='text-primary-focus text-base'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map(part => {
                                return (
                                    <tr key={part?._id}>
                                        <td>{part?.name}</td>
                                        <td>{part?.availableQuantity}</td>
                                        <td>{part?.pricePerUnit}</td>
                                        <td><button onClick={() => handleDelete(part._id)} className='btn btn-xs btn-error'>Delete <FontAwesomeIcon icon={faTrash} /></button></td>
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

export default ManageProducts;