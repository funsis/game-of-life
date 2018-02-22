import React from "react";

const Button = (props) => (
  <div className={`button ${props.active ? "button--active" : ""}`}>
    {props.name}
  </div>
);

export default Button;
