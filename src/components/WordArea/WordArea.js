import React from "react";

import "./WordArea.css";
import Letter from "../Letter/Letter";

const words = [
  "dysentery",
  "snakebite",
  "hunting",
  "river",
  "goldrush",
  "wagon",
  "buffalo",
  "measles",
  "exhaustion",
  "typhoid",
  "cholera",
  "exploration",
  "cavalry",
  "mountains",
  "funeral",
  "pioneer",
  "independence",
  "yukon"
];

const util = {
  chooseWord: () => {
    return words[Math.floor(Math.random() * words.length)].split("");
  }
};

const WordArea = () => (
  <section className="wordArea">
    {util.chooseWord().map((letter, i) => (
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
