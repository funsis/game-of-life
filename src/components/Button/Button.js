import React from "react";
import "./Button.css"

const Button = (props) => (
  <div className={`button ${props.active ? "button--active" : ""}`}>
    {props.name}
  </div>
);

export default Button;
