import React from 'react';

const Option = ({option,id}) => {
    // console.log(id)
    return (
        <div className='option'>
            <input type="radio" value='option' name={id} /> {option}
        </div>
    );
};

export default Option;