import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-24 px-16'>
            <div className='border rounded-md p-10'>
                <h2 className='text-3xl font-bold text-accent mb-2'> How will you improve the performance of a React Application?</h2>
                <ul className='list-disc pl-10'>
                    <li className='mb-2 font-semibold'>Keeping component state local where necessary.</li>
                    <li className='mb-2 font-semibold'>Memoizing React components to prevent unnecessary re-renders.</li>
                    <li className='mb-2 font-semibold'>Code-splitting in React using dynamic import()</li>
                    <li className='mb-2 font-semibold'>Windowing or list virtualization in React.</li>
                    <li className='mb-2 font-semibold'>Lazy loading images in React.</li>
                </ul>
            </div>
            <div className='border rounded-md p-10 mt-10'>
                <h2 className='text-3xl font-bold text-accent mb-2'>What are the different ways to manage a state in a React application?</h2>
                <p>The Four Kinds of React State to Manage</p>
                <ul className='list-disc pl-10'>
                    <li className='mb-2 font-semibold'>Local state</li>
                    <li className='mb-2 font-semibold'>Global State</li>
                    <li className='mb-2 font-semibold'>Server state</li>
                    <li className='mb-2 font-semibold'>URL State</li>
                </ul>
                <p><strong>Local State:</strong> Local state is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook.</p>
                <p><strong>Global State:</strong> Global state is data we manage across multiple components.
                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                <p><strong>Server State:</strong> Data that comes from an external server that must be integrated with our UI state.</p>
                <p><strong>URI State:</strong> Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div className='border rounded-md p-10 mt-10'>
                <h2 className='text-3xl font-bold text-accent mb-2'> How does prototypical inheritance work?</h2>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            </div>
            <div className='border rounded-md p-10 mt-10'>
                <h2 className='text-3xl font-bold text-accent mb-2'> What is a unit test? Why should write unit tests?</h2>
                <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
            </div>
        </div>
    );
};

export default Blogs;