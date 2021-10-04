import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    // fetching blogs data
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        // showing data on ui 
        <div className="container mb-5 text-start">
            <h2 className="fw-bold my-5">Latest Blogs:</h2>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                >
                </Blog>)
            }
        </div>
    );
};

export default Blogs;