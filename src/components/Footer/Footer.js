import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container bg-dark-blue">
            {/* Newsletter section */}
            <div className="container-fluid">
                <div className="container d-flex align-items-center ">
                    <div className="col-md-4 text-light text-uppercase p-5">
                        <small className="">Subscribe To Our</small>
                        <h2>Newsletter</h2>
                    </div>
                    <div className="col-md-8" >
                        <input type="email" className="email-input rounded-start" placeholder="Your's Email Please" />
                        <button className="btn-subscribe rounded-end">Subscribe</button>
                    </div>
                </div>
            </div>
            {/* links and Copyright section */}
            <div className="p-5 bg-light-blue">
                <div className=" d-flex justify-content-evenly">
                    {/* quick links */}
                    <div>
                        <h5 className="fw-bold text-light">Quick Links</h5>
                        <div className="text-start">
                            <NavLink className="quick-links text-light" to="/home">Home</NavLink>
                            <NavLink className="quick-links text-light" to="/services">Services</NavLink>
                            <NavLink className="quick-links text-light" to="/about">About Us</NavLink>
                            <NavLink className="quick-links text-light" to="/blog"> Blog</NavLink>
                            <NavLink className="quick-links text-light" to="/enroll"> Sign Up</NavLink>
                        </div>
                    </div>
                    {/* social media icon */}
                    <div>
                        <h5 className="fw-bold text-light">Contact Us</h5>
                        <div className="text-start text-light">
                            <i className=" fs-4 m-2 fab fa-facebook"></i>
                            <i className=" fs-4 m-2 fab fa-instagram"></i>
                            <i className=" fs-4 m-2 fab fa-youtube"></i>
                            <i className=" fs-4 m-2 fab fa-linkedin"></i>
                        </div>
                    </div>
                    {/* Copyright icon */}
                    <div>
                        <h2 className="fw-bold text-light">My Online School</h2>
                        <h6 className="text-light"> Copyright &copy; 2021 | All Rights Reserved.</h6>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;