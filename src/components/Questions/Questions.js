import React from 'react';
import Option from '../Option/Option';
import './questions.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({questionSmaple}) => {
    // console.log(questionSmaple)
    const {id,question,options,correctAnswer} =questionSmaple;
    // console.log(question,options,correctAnswer)
    // console.log(options)
    const notify = (correctAnswer) => toast(correctAnswer);

    return (
        <div className='questions container'>
            <div className='qs-header'>
            <h5>{question}</h5>
              <button onClick={() =>notify(correctAnswer)}><EyeIcon className="eye-icon"/></button>
            </div>
            <ToastContainer />
            {
                options.map((option,index) =><Option
                key={index}
                option={option}
                id={id}
                correctAnswer={correctAnswer}

                ></Option>)
            }
        </div>
    );
};

export default Questions;