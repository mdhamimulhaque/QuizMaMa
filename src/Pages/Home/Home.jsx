import React from 'react';

const Home = () => {
    return (
        <div className='min-h-screen bg-indigo-100 w-full flex justify-center items-center'>
            <div className="bg-indigo-200 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden shadow-lg py-5">

                <h2 className="text-4xl color_heading text-center">QuizMaMa</h2>
                <h2 className="text-lg color_heading text-center">Test Your Self</h2>

                <form action="#" className='p-4'>
                    <div className="input_group my-3">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="Full Name" className="input_design " required />
                    </div>
                    <div className="input_group my-3">
                        <label htmlFor="category">Select Category</label>
                        <select name="category" id="category" className="input_design " required >
                            <option value="">Test</option>
                            <option value="">Test</option>
                            <option value="">Test</option>
                            <option value="">Test</option>
                        </select>
                    </div>
                    <div className="input_group my-3">
                        <label htmlFor="level">Choose Level</label>
                        <select name="level" id="level" className="input_design" required>
                            <option value="">Test</option>
                            <option value="">Test</option>
                            <option value="">Test</option>
                            <option value="">Test</option>
                        </select>
                    </div>


                    <button type="submit" className="w-full cmn_btn bg-indigo-700 hover:bg-indigo-800">
                        Start
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;