import React from 'react';

const Question = ({ quizzes: { question, incorrect_answers, correct_answer
}, handleAnswer }) => {
    const allOptions = [correct_answer, ...incorrect_answers];
    var randomOptions = allOptions.sort(() => Math.random() - 0.5);

    // console.log(randomItem)



    return (
        <div>
            <h4 className='font-semibold text-lg text-center my-2'>{question}</h4>
            <section>
                {
                    randomOptions.map((option, index) => <button key={index}
                        className="w-full cmn_btn text-gray-800 bg-white mt-0 mb-4"
                        onClick={() => handleAnswer(option)}
                    >
                        {option}
                    </button>)
                }
                {/* <button
                    className="w-full cmn_btn text-gray-800 bg-white mt-0 mb-4">
                    1
                </button>
                <button
                    className="w-full cmn_btn text-gray-800 bg-white mt-0 mb-4">
                    1
                </button>
                <button
                    className="w-full cmn_btn text-gray-800 bg-white mt-0 mb-4">
                    1
                </button>
                <button
                    className="w-full cmn_btn text-gray-800 bg-white mt-0 mb-4">
                    1
                </button> */}
            </section>
        </div>
    );
};

export default Question;