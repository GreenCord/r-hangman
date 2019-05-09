import React, { Component } from "react";

import "./KeyboardArea.css";

import Letter from "../Letter/Letter";

const keys = "QWERTYUIOPASDFGHJKLZXCVBNM";

const letterStatus = (letter, arr) => {
  return arr.indexOf(letter) > -1 ? "unavailable" : "available";
};
class KeyboardArea extends Component {
  constructor(props) {
    super(props);
    this.onLetterPress = this.onLetterPress.bind(this);
  }
  onLetterPress(e) {
    e.preventDefault();
    const reg = /[a-zA-Z]/;
    const keyPressed = String.fromCharCode(e.keyCode);
    if (reg.test(keyPressed)) {
      this.props.onClick(e.key.toUpperCase());
    }
  }
  componentDidMount() {
    document.addEventListener("keypress", this.onLetterPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.onLetterPress, false);
  }
  render() {
    return (
      <section className="keyboard">
        <div className="keyboard-row keyboard-1">
          {keys.split("", 10).map(letter => (
            <Letter
              key={letter}
              letter={letter}
              letterValue={letter}
              status={letterStatus(letter, this.props.selectedLetters)}
              onClick={() => this.props.onClick(letter)}
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
                status={letterStatus(letter, this.props.selectedLetters)}
                onClick={() => this.props.onClick(letter)}
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
                status={letterStatus(letter, this.props.selectedLetters)}
                onClick={() => this.props.onClick(letter)}
              />
            ))}
        </div>
      </section>
    );
  }
}

export default KeyboardArea;
