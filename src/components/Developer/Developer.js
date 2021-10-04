import React from 'react';
import './Developer.css';

const Developer = (props) => {
    const { picture, name, email, phone } = props.developer;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={picture.large} className="card-img-top" alt="courseImage" />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="text-secondary"> <b>E-mail: {email}</b></p>
                    <p className="text-secondary"> <b>Phone: {phone}</b></p>
                </div>
            </div>
        </div>
    );
};

export default Developer;