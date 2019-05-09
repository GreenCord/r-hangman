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
  const [currentEvent, setCurrentEvent] = useState(logic.chooseEvent);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [actionMessage, setActionMessage] = useState("Select a letter.");
  const [displayWord, setDisplayWord] = useState(
    logic.displayWord(currentWord, selectedLetters)
  );

  const setGameState = selectedLetter => {
    const newSelectedLetters = selectedLetters.concat(selectedLetter);
    const newDisplayWord = logic.displayWord(currentWord, newSelectedLetters);
    let returnMessage = selectedLetter;

    currentWord.indexOf(selectedLetter) > -1
      ? (returnMessage += " is in the word!")
      : (returnMessage += " is not in the word!");

    setSelectedLetter(selectedLetter);
    setActionMessage(returnMessage);
    setSelectedLetters(newSelectedLetters);
    setDisplayWord(newDisplayWord);
  };
  return {
    currentWord,
    currentEvent,
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
    currentEvent,
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
        <EventArea currentEvent={currentEvent} />
        <FamilyArea />
        <ActionTextArea
          selectedLetter={selectedLetter}
          actionMessage={actionMessage}
          currentEvent={currentEvent}
        />
        <WordArea displayWord={displayWord} />
        <SelectedLetters selectedLetters={selectedLetters} />
      </main>
      <KeyboardArea
        currentWord={currentWord}
        selectedLetters={selectedLetters}
        onClick={onLetterClick}
      />
      <footer>&copy; 2017-2019 Steven Martinez</footer>
    </div>
  );
};

export default App;
