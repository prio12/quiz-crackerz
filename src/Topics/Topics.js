import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData().data;
    console.log(topics)


    
    return (
        <div>
            <h1>This is topics {topics.length}</h1>
           <div className='topics'>
           {
                topics.map(quiz =><Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
           </div>
        </div>
    );
};

export default Topics;