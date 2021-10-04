import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { courseName, img, courseTeacher, price, totalStudent } = props.course;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="courseImage" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{courseName}</h5>
                    <h6>{courseTeacher}</h6>
                    <h6>price: ${price}</h6>
                    <h6>Total Enrolled Student: {totalStudent}</h6>
                </div>
                <div className="mb-2">
                    <Link to="/services">
                        <button className="btn btn-success">Enroll Here</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Course;