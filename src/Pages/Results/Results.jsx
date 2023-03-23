import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Results = () => {
    const data = JSON.parse(localStorage.getItem("resultData"));
    const handleRefresh = () => {
        localStorage.clear()
    }
    return (
        <div className='px-4'>
            <h2 className="text-4xl color_heading text-center">QuizMaMa</h2>
            <h2 className='text-2xl text-center font-semibold mt-4'> Hii <span className='text-indigo-700'>{data.username}</span></h2>
            <p className='text-lg text-center my-2'>Your Total correct answer : {data.totalCorrect}</p>
            <Link to='/'>
                <button
                    onClick={handleRefresh}
                    className='w-full cmn_btn bg-indigo-700 hover:bg-indigo-800'>
                    Back To Home
                </button>
            </Link>
        </div>
    );
};

export default Results;