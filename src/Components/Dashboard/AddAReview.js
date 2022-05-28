import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../.firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const handleProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const date = event.target.date.value;
        const image = event.target.image.value;
        const rating = event.target.rating.value;
        const review = event.target.review.value;

        const url = `https://pc-mania.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, date, image, rating, review
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
        toast.success('Review Added');
    }

    return (
        <>
            <h1 className="text-center text-2xl lg:text-3xl font-koulen font-semibold my-4 ">
                {" "}
                Add <span className="text-primary-focus">Review</span>
            </h1>
                <form onSubmit={handleProduct}>
                    <div className="card  w-full mx-auto max-w-lg shadow-2xl">
                        <div className="card-body">
                            
                            
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text font-bold">Your Name</span>
                                </label>
                                <input type="text" value={user?.displayName} name='name' placeholder="Name" className="input input-bordered" disabled />
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text font-bold">Image URL</span>
                                </label>
                                <input type="text" value={user?.photoURL} name='image' placeholder="Image URL" className="input input-bordered" disabled />
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text font-bold">Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text font-bold">Rating(out of 5)</span>
                                </label>
                                <input type="number" min={1} step=".1" max={5} name='rating' className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text font-bold">Your Review</span>
                                </label>
                                <textarea type="text" name='review' placeholder="Description" className="w-full h-32 input input-bordered" required />
                            </div>

                            <div className="form-control mt-6 border-0">
                                <button
                                    className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                    Add Review
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            
        </>
    );
};

export default AddAReview;