import React from "react";

import "./KeyboardArea.css";

import Letter from "../Letter/Letter";
// import logic from "../../utils/game";

const keys = "QWERTYUIOPASDFGHJKLZXCVBNM";

const letterStatus = (letter, arr) => {
  console.log(
    "letterStatus:",
    arr.indexOf(letter) > -1 ? "unavailable" : "available"
  );
  return arr.indexOf(letter) > -1 ? "unavailable" : "available";
};

const KeyboardArea = props => (
  <section className="keyboard">
    <div className="keyboard-row keyboard-1">
      {keys.split("", 10).map(letter => (
        <Letter
          key={letter}
          letter={letter}
          letterValue={letter}
          status={letterStatus(letter, props.selectedLetters)}
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
            letterValue={letter}
            status={letterStatus(letter, props.selectedLetters)}
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
            letterValue={letter}
            status={letterStatus(letter, props.selectedLetters)}
            onClick={() => props.onClick(letter)}
          />
        ))}
    </div>
  </section>
);
export default KeyboardArea;
