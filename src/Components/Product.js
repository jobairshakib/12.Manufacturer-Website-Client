import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
        const {
        _id,
        image,
        name,
        shortDescription,
        orderQuantity,
        availableQuantity,
        pricePerUnit,
        products
    } = product;

    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/purchase/${id}`);
    };

    return (
        <>
            <div className="card card-hover card-compact bg-base-100 shadow-xl">
                <figure>
                    <img width={300} className="rounded-lg" src={image} alt="" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{shortDescription?.slice(0, 150)}...</p>
                    <h2 className="text-1xl">
                        {" "}
                        <span className="font-bold">Min-Order Quantity:</span>{" "}
                        {orderQuantity}
                    </h2>
                    <h2 className="text-1xl">
                        {" "}
                        <span className="font-bold">Available Quantity:</span>{" "}
                        {availableQuantity}
                    </h2>
                    <h2 className="text-1xl">
                        {" "}
                        <span className="font-bold">Unit Price: </span>
                        {pricePerUnit ? pricePerUnit : products} ৳
                    </h2>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleNavigate(_id)}
                            className="btn btn-primary"
                        >
                            Purchase Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;