import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='min-h-screen bg-indigo-100 w-full flex justify-center items-center'>
            <div className="bg-indigo-200 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden shadow-lg py-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;