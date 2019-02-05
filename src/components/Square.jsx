import React from "react";

const Square = props => {
  if (props.value === 'B') {
    return <button className="square" style={{color: 'red'}}>{props.value}</button>;
  }
  return <button className="square">{props.value}</button>;
};

export default Square;
