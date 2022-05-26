import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../.firebase.init";
import Loading from "./Loading/Loading";

const Purchase = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState([]);
    const [btnDisable, setBtnDisable] = useState(false);
    const [user, loading] = useAuthState(auth);

    const { _id, name, image, pricePerUnit, shortDescription, availableQuantity, orderQuantity } = purchase;

    useEffect(() => {
        const url = `http://localhost:5000/part/${id}`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => setPurchase(data));
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const purchaseQuantity = event.target.minquantity.value;
        const partsOrder = {
            partsId: _id,
            parts: name,
            purchaseQuantity,
            pricePerUnit,
            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value,
        };
        fetch("http://localhost:5000/purchase", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },

            body: JSON.stringify(partsOrder),
        })
            .then((Response) => Response.json())
            .then((data) => {
                toast.success("Successfully Placed Order.");
                event.target.reset();
            });
    };

    const handleInput = (e) => {
        let quantity = parseInt(e.target.value);
        // let totalPrice = parseInt(quantity * pricePerUnit)
        let partsQuantity = parseInt(availableQuantity);
        if (quantity > partsQuantity || quantity < orderQuantity) {
            setBtnDisable(true);
        } else {
            setBtnDisable(false);
        }
    };

    return (
        <>
            <section>
                <div className="">
                    <h1 className="text-center text-2xl lg:text-4xl font-koulen font-semibold uppercase ">
                        {" "}
                        Purchase <span className="text-primary-focus">Parts</span>
                    </h1>
                    <div className=" flex flex-col px-8 lg:px-16 py-14 lg:flex-row justify-between ">
                        <div className=" w-3/3 shadow-md rounded-lg lg:w-3/5 bg-base-100">
                            <div className="flex flex-col lg:flex-row items-center py-10 px-5">
                                <img
                                    src={image}
                                    className="w-60 h-48 lg:h-80 lg:w-80 rounded-md"
                                    alt=""
                                />

                                <div className=" card-body">
                                    <h1 className="font-semibold text-3xl ">{name}</h1>
                                    <h1 className="font-semibold">
                                        Availabe Quantiny :{" "}
                                        <span className="font-bold text-xl">
                                            {" "}
                                            {availableQuantity}{" "}
                                        </span>{" "}
                                    </h1>
                                    <h1 className="font-semibold">
                                        Min-Order Quantity :{" "}
                                        <span className="font-bold text-xl"> {orderQuantity}</span>
                                    </h1>
                                    <h1 className="font-semibold">
                                        Per Parts Price:{" "}
                                        <span className="font-bold text-xl">{pricePerUnit}</span>
                                    </h1>
                                    <p>
                                        <span className="font-semibold ">Details:</span>
                                        {shortDescription}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className=" w-full lg:w-96 mt-8 lg:mt-0 shadow-md px-5 bg-base-100 pb-5  rounded-xl ">
                            <h1 className="text-center text-4xl font-semibold  py-5  text-primary-focus">
                                Purchase Order
                            </h1>

                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col ">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="yourName"
                                        className="input w-full placeholder:text-[15px] py-2 mb-3 "
                                        defaultValue={user?.displayName}
                                        disabled
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className="input w-full placeholder:text-[15px] py-2 my-3"
                                        defaultValue={user?.email}
                                        disabled
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full placeholder:text-[15px] py-2 my-3"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Where to Ship"
                                        name="location"
                                        className="input input-bordered  placeholder:text-[15px] py-2 my-3"
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="minquantity"
                                        onChange={handleInput}
                                        min={orderQuantity}
                                        placeholder="Quantity"
                                        className="input w-2/6 input-bordered placeholder:text-[15px] py-2 my-3"
                                        required
                                    />{" "}
                                </div>

                                <button
                                    disabled={btnDisable}
                                    type="submit"
                                    className="px-8 mt-5 btn btn-primary w-full"
                                >
                                    Place Order
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Purchase;

