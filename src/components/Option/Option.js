import React from "react";
import "./Option.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, id,correctAnswer }) => {
    const output = () =>{
        if(correctAnswer === option){
            toast('YaaYY!!! Correct one')
        }
        else{
            toast('oops!!! Wrong one!! ')
        }
    }
//   console.log(correctAnswer)
  return (
    <div className="option">
     <div>
     <p>
        <input onClick={output} className="radio-btn" type="radio" value="option" name={id} />{" "}
        <span className="option-text">{option}</span>
      </p>
     
     </div>
     <ToastContainer />
    </div>
  );
};

export default Option;
