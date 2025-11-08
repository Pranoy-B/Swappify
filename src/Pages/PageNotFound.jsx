import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div className='min-h-screen min-w-screen bg-blue-400 flex flex-col justify-center items-center space-y-5'>
            <h1 className='font-extrabold text-3xl text-white'>Error 404</h1>
            <h1 className='font-extrabold text-3xl text-white'>Page Not Found</h1>
            <Link to="/" className='px-4 py-2 bg-white rounded-sm text-xl font-bold text-blue-400'>Go Home</Link>
        </div>
    );
};

export default PageNotFound;