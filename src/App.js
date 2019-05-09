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
  const [actionMessage, setActionMessage] = useState("Select a letter.");
  const [selectedLetters, setSelectedLetters] = useState([]);

  const setGameState = selectedLetter => {
    setSelectedLetter(selectedLetter);
    console.log("selectedLetters", selectedLetters);
    console.log("Type of selectedLetters", typeof selectedLetters);
    const newSelectedLetters = selectedLetters.concat(selectedLetter);
    console.log("newSelectedLetters", newSelectedLetters);
    console.log("Type of newSelectedLetters", typeof newSelectedLetters);

    let returnMessage = selectedLetter;
    currentWord.indexOf(selectedLetter) > -1
      ? (returnMessage += " is in the word!")
      : (returnMessage += " is not in the word!");
    setActionMessage(returnMessage);
    setSelectedLetters(newSelectedLetters);
  };
  return {
    currentWord,
    selectedLetter,
    actionMessage,
    selectedLetters,
    setGameState
  };
};

const App = props => {
  const {
    currentWord,
    selectedLetter,
    actionMessage,
    selectedLetters,
    setGameState
  } = useGameState();

  const onLetterClick = letter => {
    setGameState(letter);
    // props.setSelectedLetter(letter);
    // if (currentWord.indexOf(letter) > -1) {
    //   return console.log(letter + " is in the word!");
    // } else {
    //   return console.log(letter + " is not in the word!");
    // }
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
        <WordArea currentWord={currentWord} />
        <SelectedLetters selectedLetters={selectedLetters} />
      </main>
      <KeyboardArea currentWord={currentWord} onClick={onLetterClick} />
      <footer>&copy; 2017-2019 Steven Martinez</footer>
    </div>
  );
};

export default App;
