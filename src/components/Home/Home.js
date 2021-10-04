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
                    <div className="col service-name m-2 p-3 rounded">
                        <h2 className="fs-3 fw-bold">World Class <br /> Teachers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptas sunt dolores eum nulla nobis reiciendis. Velit vero sunt reiciendis fugit, pariatur ducimus deserunt, voluptatem quas a quia harum possimus.</p>
                    </div>
                    <div className="col service-name m-2 p-3 rounded">
                        <h2 className="fs-3 fw-bold">Fully Online <br /> Courses</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, veritatis illo. Necessitatibus atque qui laborum, molestias debitis porro, aspernatur alias voluptas quisquam nesciunt, officiis repudiandae facere excepturi rerum adipisci quas.</p>
                    </div>
                    <div className="col service-name m-2 p-3 rounded">
                        <h2 className="fs-3 fw-bold">Scholarship For <br /> Brilliant Student</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint repellendus soluta quasi, quis velit, inventore optio alias et at eveniet voluptate placeat ad natus expedita harum! Quaerat, eos esse?
                        </p>
                    </div>
                    <div className="col service-name m-2 p-3 rounded">
                        <h2 className="fs-3 fw-bold">24/7 Hours <br /> Logistic Support</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint repellendus soluta quasi, quis velit, inventore optio alias et at eveniet voluptate placeat ad natus expedita harum! Quaerat, eos esse?
                        </p>
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