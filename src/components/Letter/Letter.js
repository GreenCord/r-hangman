import React from "react";

import logic from "../../utils/game";

import "./Letter.css";

const Letter = props => {
  return (
    <div
      className={props.status + " letter"}
      style={{
        color: logic.colorStatus[props.status]
      }}
      onClick={() => props.onClick(props.letterValue)}
    >
      {props.letter}
    </div>
  );
};

export default Letter;
