import React from "react";

import "./WordArea.css";
import Letter from "../Letter/Letter";

const WordArea = props => (
  <section className="wordArea">
    {props.displayWord.map((letter, i) => (
      <Letter
        key={letter + i}
        letter={letter.toUpperCase()}
        letterValue={letter.toUpperCase()}
      />
    ))}
  </section>
);
export default WordArea;
