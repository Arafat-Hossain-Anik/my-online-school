import React from 'react';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, img, ratings, review } = props.review;
    return (
        <div className="col">
            <div className="card h-100">
                {/* review student image */}
                <div className="mx-auto">
                    <img src={img} className="rounded-circle" alt="StudentImage" style={{ width: "100px" }} />
                </div>
                <div className="card-body">
                    {/* review details */}
                    <h5 className="card-title fw-bold">{name}</h5>
                    <Rating
                        initialRating={ratings}
                        emptySymbol={<i className="far fa-star" style={{ color: "#ff9529" }}></i>}
                        fullSymbol={<i className="fas fa-star" style={{ color: "#ff9529" }}></i>}
                        readonly></Rating>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;