import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    // fetching courses review from api
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        // showing on ui
        <div className="container my-5">
            <h1 className="fw-bold mb-5">What Student Says About Us</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;