import React, { useState } from "react";
import logic from "./utils/game";

import "./assets/css/reset.css";
import "./App.css";

import EventArea from "./components/EventArea/EventArea";
import FamilyArea from "./components/FamilyArea/FamilyArea";
import ActionTextArea from "./components/ActionTextArea/ActionTextArea";
import WordArea from "./components/WordArea/WordArea";
import KeyboardArea from "./components/KeyboardArea/KeyboardArea";

const useGameState = () => {
  const [currentWord] = useState(logic.chooseWord);

  return { currentWord };
};

const App = props => {
  const { currentWord } = useGameState();

  const onLetterClick = letter => {
    console.log("onLetterClick", letter);
    console.log("currentWord", currentWord);
    if (currentWord.indexOf(letter) > -1) {
      return console.log(letter + " is in the word!");
    } else {
      return console.log(letter + " is not in the word!");
    }
  };

  return (
    <div className="App">
      <main className="GameWrapper">
        <header>
          <h1>Oregon Adventure</h1>
        </header>
        <EventArea />
        <FamilyArea />
        <ActionTextArea />
        <WordArea currentWord={currentWord} />
        <KeyboardArea currentWord={currentWord} onClick={onLetterClick} />
      </main>
      <footer>&copy; 2017-2019 Steven Martinez</footer>
    </div>
  );
};

export default App;
