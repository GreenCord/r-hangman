import React from "react";

import "./KeyboardArea.css";

const KeyboardArea = () => (
  <section className="keyboard">
    <div className="keyboard-row keyboard-1">
      <div className="letter">Q</div>
      <div className="letter">W</div>
      <div className="letter">E</div>
      <div className="letter">R</div>
      <div className="letter">T</div>
      <div className="letter">Y</div>
      <div className="letter">U</div>
      <div className="letter">I</div>
      <div className="letter">O</div>
      <div className="letter">P</div>
    </div>
    <div className="keyboard-row keyboard-2">
      <div className="letter">A</div>
      <div className="letter">S</div>
      <div className="letter">D</div>
      <div className="letter">F</div>
      <div className="letter">G</div>
      <div className="letter">H</div>
      <div className="letter">J</div>
      <div className="letter">K</div>
      <div className="letter">L</div>
    </div>
    <div className="keyboard-row keyboard-3">
      <div className="letter">Z</div>
      <div className="letter">X</div>
      <div className="letter">C</div>
      <div className="letter">V</div>
      <div className="letter">B</div>
      <div className="letter">N</div>
      <div className="letter">M</div>
    </div>
  </section>
);
export default KeyboardArea;
