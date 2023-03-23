import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { getCategoryData, getQuizzesData } from '../../api/getApis';


const Home = () => {
    const [categories, setCategories] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [formData, setFormData] = useState({});
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    if (quizzes && quizzes.length > 0) {
        navigate('/quiz', { replace: true, state: { username: formData.name, quizzes: quizzes } });
    }

    const onSubmit = data => {
        setFormData(data);

    };

    useEffect(() => {
        getCategoryData()
            .then(data => setCategories(data.trivia_categories))
    }, [])

    useEffect(() => {
        getQuizzesData(formData)
            .then(data => setQuizzes(data?.results))
    }, [formData])


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

    console.log(quizzes)
    return (
        <>
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
                        <option value="">-Select your Category-</option>
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
                                    value={level?.name}>
                                    {level?.name}
                                </option>)
                        }
                    </select>
                </div>
                <button type="submit"
                    className="w-full cmn_btn bg-indigo-700 hover:bg-indigo-800">
                    Get Started
                </button>
            </form>
        </>

    );
};

export default Home;

