import React from "react";

import "./WordArea.css";
import Letter from "../Letter/Letter";

const WordArea = props => (
  <section className="wordArea">
    {props.currentWord.map((letter, i) => (
      <Letter
        key={letter + i}
        letter="-"
        letterValue={letter.toUpperCase()}
        onClick={console.log}
      />
    ))}
  </section>
);
export default WordArea;
