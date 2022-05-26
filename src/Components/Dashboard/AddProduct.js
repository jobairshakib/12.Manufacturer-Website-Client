import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const { data, isLoading } = useQuery('parts', () => fetch(`http://localhost:5000/part`).then(res => res.json()))
    
    const imageStorageKey = '3a4f1ae7f5316c9ef516dad5e364ec79';

    const onSubmit = async (data) => {
        console.log('data', data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey
            }`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const part = {
                        name: data.name,
                        image: img,
                        shortDescription: data.shortDescription,
                        orderQuantity: data.orderQuantity,
                        availableQuantity: data.availableQuantity,
                        pricePerUnit: data.pricePerUnit,
                    }

                    fetch(`http://localhost:5000/part`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.parse(part)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                        console.log('part',inserted);
                    })

                }
            console.log(result);
        })
    };

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-md mx-auto border-0">
                    <label className="label">
                        <span className="label-text">Parts Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-md mx-auto "
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is Required",
                            },
                        })}
                    />

                    <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500 ">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full max-w-md mx-auto border-0">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-md mx-auto "
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is Required",
                            },
                        })}
                    />

                    <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500 ">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control w-full max-w-md mx-auto border-0">
                    <label className="label">
                        <span className="label-text">Parts Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-md mx-auto "
                        {...register("shortDescription", {
                            required: {
                                value: true,
                                message: "Description is Required",
                            },
                        })}
                    />

                    <label className="label">
                        {errors.shortDescription?.type === "required" && (
                            <span className="label-text-alt text-red-500 ">
                                {errors?.shortDescription?.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full max-w-md mx-auto border-0">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-md mx-auto "
                        {...register("orderQuantity", {
                            required: {
                                value: true,
                                message: "Minimum Order Quantity is Required",
                            },
                        })}
                    />

                    <label className="label">
                        {errors.orderQuantity?.type === "required" && (
                            <span className="label-text-alt text-red-500 ">
                                {errors?.orderQuantity?.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full max-w-md mx-auto border-0">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-md mx-auto "
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: "Available Quantity is Required",
                            },
                        })}
                    />

                    <label className="label">
                        {errors.availableQuantity?.type === "required" && (
                            <span className="label-text-alt text-red-500 ">
                                {errors?.availableQuantity?.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full max-w-md mx-auto border-0">
                    <label className="label">
                        <span className="label-text">Price per Unit</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price per Unit"
                        className="input input-bordered w-full max-w-md mx-auto "
                        {...register("pricePerUnit", {
                            required: {
                                value: true,
                                message: "Price per Unit is Required",
                            },
                        })}
                    />

                    <label className="label">
                        {errors.pricePerUnit?.type === "required" && (
                            <span className="label-text-alt text-red-500 ">
                                {errors?.pricePerUnit?.message}
                            </span>
                        )}
                    </label>
                </div>
                

                <div className='text-center'>
                    <input
                        className="btn btn-primary w-1/3"
                        type="submit"
                        value="Add Product"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;