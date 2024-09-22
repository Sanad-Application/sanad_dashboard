import React from "react";
import "./globalInput.scss";
interface Iporps {
  label: string;
  type: string;
  placeholder: string;
}
const GlobalInput = (props: Iporps) => {
  return (
    <div className='item'>
      <label>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default GlobalInput;
