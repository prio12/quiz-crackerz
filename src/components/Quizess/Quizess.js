import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";
import "./Quizees.css";

const Quizess = () => {
  const { name, questions } = useLoaderData().data;
  // console.log(name, questions);
  return (
    <div>
      <h4 className="Quiz-title">Quiz of <span className="name">{name}</span></h4>
     <div className="ques">
     {
        questions.map(question =><Questions
        key={question.id}
        questionSmaple={question}
        ></Questions>)
      }
     </div>
    </div>
  );
};

export default Quizess;
