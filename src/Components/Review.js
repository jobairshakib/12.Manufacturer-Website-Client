import React from 'react';

const Review = ({reviews}) => {
    const { profile, name, review } = reviews;
    return (
        <>
            <div className="card shadow-lg bg-base-100">
                <div className="card-body hover:bg-slate-100  ">
                    <div className="avatar flex items-center gap-x-2">
                        <div className="w-10 rounded-full ring-offset-2">
                            <img src={profile} alt="" />
                        </div>

                        <div>
                            <h1 className="text-xl"> {name} </h1>
                        </div>
                    </div>
                    <div className="rating w-20">
                        <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                        />
                        <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                        />
                        <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                        />
                        <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                        />
                        <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                        />
                    </div>
                    <p>{review?.slice(0, 180)}...</p>
                </div>
            </div>
        </>
    );
};

export default Review;