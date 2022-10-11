import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData().data;
    console.log(topics)


    
    return (
        <div>
            <h4 className='header'>To justify the depth of your knowledge about <br /> <span className='web-text'> Web Development</span><br /> push yourself to participate here.</h4>
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