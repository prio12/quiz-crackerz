import React from 'react';
import Option from '../Option/Option';
import './questions.css'

const Questions = ({questionSmaple}) => {
    // console.log(questionSmaple)
    const {id,question,options,correctAnswer} =questionSmaple;
    // console.log(question,options,correctAnswer)
    // console.log(id)
    return (
        <div className='questions'>
            <h5>{question}</h5>
            {
                options.map((option,index) =><Option
                key={index}
                option={option}
                id={id}
                ></Option>)
            }
        </div>
    );
};

export default Questions;