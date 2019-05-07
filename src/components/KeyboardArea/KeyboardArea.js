import React from "react";

import "./KeyboardArea.css";

import Letter from "../Letter/Letter";

const keys = "QWERTYUIOPASDFGHJKLZXCVBNM";

const KeyboardArea = () => (
  <section className="keyboard">
    <div className="keyboard-row keyboard-1">
      {keys.split("", 10).map(letter => (
        <Letter
          key={letter}
          letter={letter}
          letterValue={letter}
          onClick={console.log}
        />
      ))}
    </div>
    <div className="keyboard-row keyboard-2">
      {keys
        .slice(10, keys.length)
        .split("", 9)
        .map(letter => (
          <Letter key={letter} letter={letter} onClick={console.log} />
        ))}
    </div>
    <div className="keyboard-row keyboard-3">
      {keys
        .slice(19, keys.length)
        .split("", 7)
        .map(letter => (
          <Letter key={letter} letter={letter} onClick={console.log} />
        ))}
    </div>
  </section>
);
export default KeyboardArea;
