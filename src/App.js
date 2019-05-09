import React, { useState } from "react";
import logic from "./utils/game";

import "./assets/css/reset.css";
import "./App.css";

import EventArea from "./components/EventArea/EventArea";
import FamilyArea from "./components/FamilyArea/FamilyArea";
import ActionTextArea from "./components/ActionTextArea/ActionTextArea";
import WordArea from "./components/WordArea/WordArea";
import KeyboardArea from "./components/KeyboardArea/KeyboardArea";
import SelectedLetters from "./components/SelectedLetters/SelectedLetters";

const useGameState = () => {
  const [currentWord] = useState(logic.chooseWord);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [actionMessage, setActionMessage] = useState("Select a letter.");
  const [displayWord, setDisplayWord] = useState(
    logic.displayWord(currentWord, selectedLetters)
  );

  const setGameState = selectedLetter => {
    setSelectedLetter(selectedLetter);
    const newSelectedLetters = selectedLetters.concat(selectedLetter);
    let returnMessage = selectedLetter;
    currentWord.indexOf(selectedLetter) > -1
      ? (returnMessage += " is in the word!")
      : (returnMessage += " is not in the word!");
    setActionMessage(returnMessage);
    setSelectedLetters(newSelectedLetters);
    console.log("newSelectedLetters", newSelectedLetters);
    const newDisplayWord = logic.displayWord(currentWord, newSelectedLetters);
    setDisplayWord(newDisplayWord);
    console.log(
      "logic call for setDisplayWord",
      logic.displayWord(currentWord, newSelectedLetters)
    );
    console.log("Is new word updated?", displayWord);
  };
  return {
    currentWord,
    selectedLetter,
    selectedLetters,
    actionMessage,
    displayWord,
    setGameState
  };
};

const App = props => {
  const {
    currentWord,
    selectedLetter,
    selectedLetters,
    actionMessage,
    displayWord,
    setGameState
  } = useGameState();

  const onLetterClick = letter => {
    if (selectedLetters.indexOf(letter) === -1) {
      setGameState(letter);
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
        <ActionTextArea
          selectedLetter={selectedLetter}
          actionMessage={actionMessage}
        />
        <WordArea displayWord={displayWord} />
        <SelectedLetters selectedLetters={selectedLetters} />
      </main>
      <KeyboardArea currentWord={currentWord} onClick={onLetterClick} />
      <footer>&copy; 2017-2019 Steven Martinez</footer>
    </div>
  );
};

export default App;
