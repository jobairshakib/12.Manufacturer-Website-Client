import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const handleProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const availableQuantity = event.target.availableQuantity.value;
        const orderQuantity = event.target.orderQuantity.value;
        const pricePerUnit = event.target.pricePerUnit.value;
        const shortDescription = event.target.shortDescription.value;

        const url = `https://pc-mania.herokuapp.com/addPart`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, image, availableQuantity, orderQuantity, pricePerUnit, shortDescription
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                event.target.reset();
            });
        toast.success('Product Added');
    }

    return (
        <><h1 className="text-center text-2xl lg:text-3xl font-koulen font-semibold my-4 ">
            {" "}
            Add <span className="text-primary-focus">Product</span>
        </h1>
            <form onSubmit={handleProduct}>
                <div className="card  w-full mx-auto max-w-lg shadow-2xl">
                    <div className="card-body">
                       
                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text font-bold">Product Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text font-bold">Image URL</span>
                            </label>
                            <input type="text" name='image' placeholder="Image URL" className="input input-bordered" required/>
                        </div>
                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text font-bold">Available Quantity</span>
                            </label>
                            <input type="number" min={1} name='availableQuantity' placeholder="Available Quantity" className="input input-bordered" required/>
                        </div>
                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text font-bold">Order Quantity</span>
                            </label>
                            <input type="number" min={1} name='orderQuantity' placeholder="Order Quantity" className="input input-bordered" required/>
                        </div>
                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text font-bold">Unit Price</span>
                            </label>
                            <input type="number" min={1} name='pricePerUnit' placeholder="Unit Price" className="input input-bordered" required/>
                        </div>
                        <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text font-bold">Product Description</span>
                            </label>
                            <textarea type="text" name='shortDescription' placeholder="Description" className="w-full h-32 input input-bordered" required/>
                        </div>

                        <div className="form-control mt-6 border-0">
                            <button
                                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                Add Product
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddProduct;