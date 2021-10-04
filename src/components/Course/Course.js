import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
    // destructuring to gain dat from course object
    const { courseName, img, courseTeacher, price, totalStudent } = props.course;
    return (
        <div className="col">
            <div className="card h-100">
                {/* course image */}
                <img src={img} className="card-img-top" alt="courseImage" />
                <div className="card-body text-start">
                    {/* course details */}
                    <h5 className="card-title fw-bold">{courseName}</h5>
                    <h6>{courseTeacher}</h6>
                    <h6>price: ${price}</h6>
                    <h6>Total Enrolled Student: {totalStudent}</h6>
                </div>
                {/* enroll btn section */}
                <div className="mb-2 mx-2">
                    <Link to="/enroll">
                        <button className="btn btn-success w-100">Enroll Here</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Course;