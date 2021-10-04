import React from 'react';
import BestCourses from '../BestCourses/BestCourses';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* cover image */}
            <div className="cover-body">
                <div className="hero-image">
                    <div className="hero-text">
                        <h1 className="cover-header">Welcome To My Online School</h1>
                        <p className="fs-5">Get World Class Education From World Class Teacher</p>
                        <button className="btn btn-success"><i className="fas fa-sign-in-alt"></i> Sign Up Now</button>
                    </div>
                </div>
            </div>
            {/* service details */}
            <section>
                <h1 className="service-header mt-5 mb-3">Our's Speciality</h1>
                <div className="container d-flex justify-content-center mb-5 mt-2">
                    {/* name of Speciality and its details */}
                    <div className="col border border-dark service-name m-2 p-3 rounded">
                        <i className="fs-1 text-black-green mb-2 fas fa-chalkboard-teacher"></i>
                        <h2 className="fs-3 fw-bold">World Class <br /> Teachers</h2>
                        <p>Ours Teacher's are best in thier field. World's most experienced teachers are here to tech. They Have the ablity to recognize what student want and which way have to teach them.</p>
                    </div>
                    {/* name of Speciality and its details */}
                    <div className="col border border-dark service-name m-2 p-3 rounded">
                        <i className="fs-1 text-black-green mb-2 fas fa-laptop-house"></i>
                        <h2 className="fs-3 fw-bold">Fully Online <br /> Courses</h2>
                        <p>All of our courses are totaly online based. Because of this, you can take part in class from any where in world. If you miss any class do'nt worry! We record it for you. So that, you can cover up your gap. </p>
                    </div>
                    {/* name of Speciality and its details */}
                    <div className="col border border-dark service-name m-2 p-3 rounded">
                        <i className="fs-1 text-black-green mb-2 fas fa-hand-holding-usd"></i>
                        <h2 className="fs-3 fw-bold">Scholarship For <br /> Brilliant Student</h2>
                        <p>For Brilliant student, we have Scholarship opportunity. Get Schoolarship, you have to send your educational details to us and have to take part to  an short exmination.</p>
                    </div>
                    {/* name of Speciality and its details */}
                    <div className="col border border-dark service-name m-2 p-3 rounded">
                        <i className="fs-1 text-black-green mb-2 fas fa-headphones-alt"></i>
                        <h2 className="fs-3 fw-bold">24/7 Hours <br /> Logistic Support</h2>
                        <p>We have 24 hours dedicated support team for you. If you face any problem, even in your learning session, don't worry let us know. We will try our best to solve it.</p>
                    </div>
                </div>
            </section>
            {/* best selling course */}
            <h1 className="mt-5 fw-bold">Best Selling Courses</h1>
            <BestCourses></BestCourses>
        </div>
    );
};

export default Home;