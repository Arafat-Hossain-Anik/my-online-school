import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    // fetching courses
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./details.json")
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        // showing every course by Course component
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    >
                    </Course>)
                }
            </div>
        </div>
    );
};

export default Courses;