import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <>
            <section className="p-7">
                <h1 className="text-center text-primary-focus text-3xl font-bold">
                    Customer Reviews
                </h1>
                <div className="grid gap-8 pt-8 mx-16 grid-cols-1 lg:grid-cols-2">
                    {reviews.map((review) => (
                        <Review key={review._id} reviews={review} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Reviews;