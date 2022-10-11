import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Quizees.css";

const Quizess = () => {
  const { name, questions } = useLoaderData().data;
  console.log(name, questions);
  return (
    <div>
      <h4 className="Quiz-title">Quiz of {name}</h4>
    </div>
  );
};

export default Quizess;
