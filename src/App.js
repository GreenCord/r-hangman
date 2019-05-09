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
  const [gameStatus, setGameStatus] = useState("playing");
  const [currentWord] = useState(logic.chooseWord);
  const [currentEvent, setCurrentEvent] = useState(logic.chooseEvent);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [familyStatus, setFamilyStatus] = useState(logic.family);
  const [currentFamilyMember, setCurrentFamilyMember] = useState(
    familyStatus.length - 1
  );
  const [actionMessage, setActionMessage] = useState("Select a letter.");
  const [displayWord, setDisplayWord] = useState(
    logic.displayWord(currentWord, selectedLetters)
  );

  const setGameState = selectedLetter => {
    if (gameStatus === "playing") {
      const newSelectedLetters = selectedLetters.concat(selectedLetter);
      const newDisplayWord = logic.displayWord(currentWord, newSelectedLetters);
      let returnMessage = selectedLetter;

      if (currentWord.indexOf(selectedLetter) > -1) {
        setCurrentEvent(logic.chooseEvent);
        returnMessage += " is in the word!";
      } else {
        const newFamily = familyStatus;
        console.log("newFamily init", newFamily);
        console.log("currentFamilyMember", currentFamilyMember);
        newFamily[currentFamilyMember].alive = !newFamily[currentFamilyMember]
          .alive;
        setFamilyStatus(newFamily);
        if (currentFamilyMember === 0) {
          // If this is the last family member, game over
          setGameStatus("gameover");
        } else {
          setCurrentFamilyMember(currentFamilyMember - 1);
          returnMessage += " is not in the word!";
        }
      }

      setSelectedLetter(selectedLetter);
      setActionMessage(returnMessage);
      setSelectedLetters(newSelectedLetters);
      setDisplayWord(newDisplayWord);
    } else {
      console.log("Game over");
    }
  };
  return {
    currentWord,
    currentEvent,
    selectedLetter,
    selectedLetters,
    familyStatus,
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
    familyStatus,
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
        <FamilyArea family={familyStatus} />
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
