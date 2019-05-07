import React from "react";

const Letter = props => (
  <div className="letter" onClick={() => props.onClick(props.letterValue)}>
    {props.letter}
  </div>
);

export default Letter;
