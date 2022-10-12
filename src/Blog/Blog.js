import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-section'>
            <h1 className='py-3' ><span className='text-danger'>Q</span>&<span className='text-primary'>A</span></h1>
            <div className='container blog-container my-5'>
            <h5>What is the purpose of react router?</h5>
            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            <h5>How does context api work?</h5>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h5>What does useref hook do in react?</h5>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly</p>
            </div>
        </div>
    );
};

export default Blog;