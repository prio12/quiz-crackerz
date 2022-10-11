import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {logo, name, id, total} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-description'>
            <h5>{name}</h5>
            <p><small>{total}</small></p>
            <button>Start Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;