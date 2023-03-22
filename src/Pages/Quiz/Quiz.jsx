import React from 'react';
import { useLocation } from 'react-router-dom';

const Quiz = () => {
    const location = useLocation();

    const { username, quizzes } = location.state;
    console.log(location.state)
    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold text-center'>Welcome <span className='text-indigo-700'>{username}</span></h2>
            <section className='flex justify-between py-2'>
                <span>{quizzes[0]?.category}</span>
                <span>{quizzes.length}/2</span>
            </section>
            <h4 className='font-semibold text-xl text-center my-2'>Lorem ipsum dolor sit amet?</h4>
            <section>
                <div
                    className="w-full cmn_btn text-gray-800 bg-white mt-0 mb-4">
                    1
                </div>
                <div
                    className="w-full cmn_btn text-gray-800 bg-white mt-0 mb-4">
                    1
                </div>
                <div
                    className="w-full cmn_btn text-gray-800 bg-white mt-0 mb-4">
                    1
                </div>
                <div
                    className="w-full cmn_btn text-gray-800 bg-white mt-0 mb-4">
                    1
                </div>
            </section>
            <section>
                <div className='flex gap-2 justify-between'>
                    <button className='cmn_btn bg-indigo-700 hover:bg-indigo-800'>Prev</button>
                    <button className='cmn_btn bg-indigo-700 hover:bg-indigo-800'>Next</button>
                </div>
                <button className='w-full cmn_btn bg-indigo-700 hover:bg-indigo-800'>Skip</button>
            </section>
        </div>
    );
};

export default Quiz;