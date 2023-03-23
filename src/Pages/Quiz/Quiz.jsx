import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Question from '../../components/Question/Question';

const Quiz = () => {
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [optionDisable, setOptionDisable] = useState(false);
    const { username, quizzes } = location.state;

    const navigate = useNavigate();

    const handleResult = () => {
        // navigate('/results', { replace: true, state: { username: username, totalCorrect: totalCorrect } });
        navigate('/results');
        const resultData = {
            username,
            totalCorrect
        }
        localStorage.setItem("resultData", JSON.stringify(resultData));
    }

    const handleAnswer = (selectedOption) => {
        const correctAnswer = quizzes[currentIndex]?.correct_answer;
        if (selectedOption) {
            setOptionDisable(true)
        }
        if (selectedOption === correctAnswer) {
            setTotalCorrect(totalCorrect + 1);
        }

    }
    // handle next
    const handleNextQuestion = () => {
        if (currentIndex >= quizzes.length - 2) {
            setIsFinished(true)
        }
        setCurrentIndex(currentIndex + 1);
        setOptionDisable(false)
    }
    // handle prev
    const handlePrevQuestion = () => {
        if (currentIndex <= 0) {
            return;
        }
        setCurrentIndex(currentIndex - 1);
        setOptionDisable(false)
    }
    // handle skip
    const handleSkipQuestion = () => {
        if (currentIndex < 0) {
            return;
        }
        if (currentIndex === quizzes.length - 1) {
            return;
        }
        setCurrentIndex(currentIndex + 1);
        setOptionDisable(false)
    }
    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold text-center'>Welcome <span className='text-indigo-700'>{username}</span></h2>
            <section className='flex justify-between py-2'>
                <span>{quizzes[currentIndex]?.category}</span>
                <span>{quizzes.length}/{currentIndex + 1}</span>
            </section>
            {
                isFinished ? <h1 className='text-xl font-semibold text-center'>No More Questions.Lets Finished it.</h1> :
                    <Question
                        quizzes={quizzes[currentIndex]}
                        optionDisable={optionDisable}
                        handleAnswer={handleAnswer} />
            }

            <section>
                {
                    !isFinished &&
                    <div className='flex gap-2 justify-between'>
                        <button
                            onClick={handlePrevQuestion}
                            className='cmn_btn bg-indigo-700 hover:bg-indigo-800'>
                            Prev
                        </button>
                        <button
                            onClick={handleNextQuestion}
                            className='cmn_btn bg-indigo-700 hover:bg-indigo-800'>
                            Next
                        </button>


                    </div>
                }

                {
                    isFinished ?
                        <button
                            onClick={handleResult}
                            className='w-full cmn_btn bg-indigo-700 hover:bg-indigo-800'>
                            Finished
                        </button>

                        :
                        <button
                            onClick={handleSkipQuestion}
                            className='w-full cmn_btn bg-indigo-700 hover:bg-indigo-800'>
                            Skip
                        </button>
                }

            </section>
        </div>
    );
};

export default Quiz;