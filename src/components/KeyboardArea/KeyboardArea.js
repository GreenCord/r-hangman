import React from "react";

import "./KeyboardArea.css";

import Letter from "../Letter/Letter";

const keys = "QWERTYUIOPASDFGHJKLZXCVBNM";

const KeyboardArea = props => (
  <section className="keyboard">
    <div className="keyboard-row keyboard-1">
      {keys.split("", 10).map(letter => (
        <Letter
          key={letter}
          letter={letter}
          letterValue={letter}
          onClick={() => props.onClick(letter)}
        />
      ))}
    </div>
    <div className="keyboard-row keyboard-2">
      {keys
        .slice(10, keys.length)
        .split("", 9)
        .map(letter => (
          <Letter
            key={letter}
            letter={letter}
            onClick={() => props.onClick(letter)}
          />
        ))}
    </div>
    <div className="keyboard-row keyboard-3">
      {keys
        .slice(19, keys.length)
        .split("", 7)
        .map(letter => (
          <Letter
            key={letter}
            letter={letter}
            onClick={() => props.onClick(letter)}
          />
        ))}
    </div>
  </section>
);
export default KeyboardArea;
