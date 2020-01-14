import React from 'react';
import './Input.css'

export const Input = (props) => {

  return (
    <div className="input-container">
      <label className="circle"></label>
      <label className="circle-overlay"></label>
      <input className="input" {...props}></input>
    </div>
  );
}

export default Input;
