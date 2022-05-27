import React from 'react';

const Review = ({reviews}) => {
    const { image, name, review, date, rating } = reviews;
    return (
        <>
            <div className="card shadow-lg bg-base-100">
                <div className="card-body hover:bg-slate-100  ">
                    <div className="flex items-center gap-x-2">
                        <div className="w-10 rounded-full ring-offset-2">
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold"> {name} </h1>
                        </div>
                    </div>
                    <p>{review?.slice(0, 180)}...</p>
                    <div className="rating w-full">
                        <p className='font-bold'>{rating} out of 5</p>
                    </div>
                    
                    <div>
                        <h2>{date}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;