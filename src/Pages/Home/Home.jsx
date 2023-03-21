import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
    const [categories, setCategories] = useState();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

    };

    useEffect(() => {
        fetch(`https://opentdb.com/api_category.php`)
            .then(res => res.json())
            .then(data => setCategories(data?.trivia_categories))
    }, [categories])


    const levels = [
        {
            id: 1,
            name: "easy",
        },
        {
            id: 2,
            name: "medium",
        },
        {
            id: 3,
            name: "hard",
        },
    ]

    return (
        <div className='min-h-screen bg-indigo-100 w-full flex justify-center items-center'>
            <div className="bg-indigo-200 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden shadow-lg py-5">

                <h2 className="text-4xl color_heading text-center">QuizMaMa</h2>
                <h2 className="text-lg color_heading text-center">Test Your Self</h2>

                <form action="#"
                    className='p-4'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="input_group my-3">
                        <label htmlFor="name">Full Name</label>
                        <input type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="input_design "
                            required
                            {...register("name")}
                        />
                    </div>
                    <div className="input_group my-3">
                        <label htmlFor="category">Select Category</label>
                        <select name="category"
                            id="category"
                            className="input_design"
                            required
                            {...register("category")}
                        >
                            {
                                categories?.map(category =>
                                    <option key={category?.id}
                                        value={category?.id}>
                                        {category?.name}
                                    </option>)
                            }

                        </select>
                    </div>
                    <div className="input_group my-3">
                        <label htmlFor="level">Choose Level</label>
                        <select name="level"
                            id="level"
                            className="input_design"
                            required
                            {...register("level")}
                        >
                            {
                                levels?.map(level =>
                                    <option key={level?.id}
                                        value={level?.id}>
                                        {level?.name}
                                    </option>)
                            }
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