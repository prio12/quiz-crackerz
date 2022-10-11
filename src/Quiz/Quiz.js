import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {logo, name, id, total} = quiz;
    console.log(id)

    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <h5>{name}</h5>
            <div className='quiz-description'>
            <p><small>Total Quiz: {total}</small></p>
            <Button  className='w-100'  variant="info" ><span className='btn-text'><Link to={`/quizes/${id}`}>Start Quiz</Link> </span></Button>
            
            </div>
        </div>
    );
};

export default Quiz;