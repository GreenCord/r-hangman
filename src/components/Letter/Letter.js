import React from "react";

const Letter = props => (
  <div className="letter" onClick={() => props.onClick(props.letter)}>
    {props.letter}
  </div>
);

export default Letter;
