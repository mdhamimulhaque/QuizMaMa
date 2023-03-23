import React from 'react';

const Question = ({ quizzes: { question, incorrect_answers, correct_answer
}, handleAnswer, optionDisable }) => {
    const allOptions = [correct_answer, ...incorrect_answers];
    var randomOptions = allOptions.sort(() => Math.random() - 0.5);

    return (
        <div>
            <h4 className='font-semibold text-lg text-center my-2'>{question}</h4>
            <section>
                {
                    randomOptions.map((option, index) => <button key={index}
                        className={`w-full cmn_btn text-gray-800  mt-0 mb-4 ${optionDisable ? 'bg-gray-200' : 'bg-white'}`}
                        onClick={() => handleAnswer(option)}
                        disabled={optionDisable}
                    >
                        {option}
                    </button>)
                }
            </section>
        </div>
    );
};

export default Question;