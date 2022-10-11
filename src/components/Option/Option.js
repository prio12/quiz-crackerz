import React from "react";
import "./Option.css";

const Option = ({ option, id }) => {
  // console.log(id)
  return (
    <div className="option">
     <div>
     <p>
        <input className="radio-btn" type="radio" value="option" name={id} />{" "}
        {option}
      </p>
     </div>
    </div>
  );
};

export default Option;
