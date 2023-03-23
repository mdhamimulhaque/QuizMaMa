import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Question from '../../components/Question/Question';

const Quiz = () => {
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const { username, quizzes } = location.state;

    const handleAnswer = (selectedOption) => {
        const answer = quizzes[currentIndex]?.correct_answer;
    }

    const handleNextQuestion = () => {
        console.log(currentIndex, quizzes.length)
        if (currentIndex >= quizzes.length - 2) {
            setIsFinished(true)
        }
        setCurrentIndex(currentIndex + 1);
    }
    const handlePrevQuestion = () => {
        if (currentIndex <= 0) {
            return;
        }
        setCurrentIndex(currentIndex - 1);
    }
    const handleSkipQuestion = () => {

        console.log(currentIndex, quizzes.length)
        if (currentIndex < 0) {
            return;
        }
        if (currentIndex === quizzes.length - 1) {
            return;
        }
        setCurrentIndex(currentIndex + 1);
    }
    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold text-center'>Welcome <span className='text-indigo-700'>{username}</span></h2>
            <section className='flex justify-between py-2'>
                <span>{quizzes[currentIndex]?.category}</span>
                <span>{quizzes.length}/{currentIndex + 1}</span>
            </section>
            {
                isFinished ? "done" : <Question quizzes={quizzes[currentIndex]} handleAnswer={handleAnswer} />
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
                    isFinished ? <button
                        className='w-full cmn_btn bg-indigo-700 hover:bg-indigo-800'>
                        Finished
                    </button> : <button
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