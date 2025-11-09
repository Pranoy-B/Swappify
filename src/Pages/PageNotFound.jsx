import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div className='min-h-screen min-w-screen bg-[#F8FAFC] flex flex-col justify-center items-center space-y-5'>
            <h1 className='font-extrabold text-3xl text-[#468FAF]'>Error 404</h1>
            <h1 className='font-extrabold text-3xl text-[#468FAF]'>Page Not Found</h1>
            <Link to="/" className='px-4 py-2 bg-[#468FAF] rounded-sm text-xl font-bold text-white'>Go Home</Link>
        </div>
    );
};

export default PageNotFound;