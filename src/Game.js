import React, { useState } from "react";
import logic from "./utils/game";

import "./assets/css/reset.css";
import "./Game.css";

import EventArea from "./components/EventArea/EventArea";
import FamilyArea from "./components/FamilyArea/FamilyArea";
import ActionTextArea from "./components/ActionTextArea/ActionTextArea";
import WordArea from "./components/WordArea/WordArea";
import KeyboardArea from "./components/KeyboardArea/KeyboardArea";
import SelectedLetters from "./components/SelectedLetters/SelectedLetters";
import ReplayButton from "./components/ReplayButton/ReplayButton";

const useGameState = () => {
  const newFamily = logic.family.map(member => {
    return {
      name: member.name,
      alive: true
    };
  });
  const [gameStatus, setGameStatus] = useState("playing");
  const [currentWord] = useState(logic.chooseWord);
  const [currentEvent, setCurrentEvent] = useState(logic.chooseEvent);
  const [currentWagon, setCurrentWagon] = useState(logic.images.playing[0]);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [familyStatus, setFamilyStatus] = useState(newFamily);
  const [currentFamilyMember, setCurrentFamilyMember] = useState(
    familyStatus.length - 1
  );
  const [actionMessage, setActionMessage] = useState("");
  const [displayWord, setDisplayWord] = useState(
    logic.displayWord(currentWord, selectedLetters)
  );

  const setGameState = selectedLetter => {
    if (gameStatus === "playing") {
      const newSelectedLetters = selectedLetters.concat(selectedLetter);
      const newDisplayWord = logic.displayWord(currentWord, newSelectedLetters);
      let returnMessage = "";
      let newGameStatus = "playing";

      if (currentWord.indexOf(selectedLetter) > -1) {
        if (newDisplayWord.indexOf("-") > -1) {
          setCurrentEvent(logic.chooseEvent);
        } else {
          setCurrentEvent(logic.images.winner[0]);
          setCurrentWagon(logic.images.winner[1]);
          newGameStatus = "winner";
          returnMessage = "Congratulations! You made it to Oregon!";
        }
      } else {
        const newFamily = familyStatus;
        newFamily[currentFamilyMember].alive = !newFamily[currentFamilyMember]
          .alive;
        setFamilyStatus(newFamily);
        if (currentFamilyMember === 0) {
          setCurrentEvent(logic.images.gameover[0]);
          setCurrentWagon(logic.images.gameover[1]);
          newGameStatus = "gameover";
          returnMessage = "You didn't make it to Oregon.";
        } else {
          setCurrentFamilyMember(currentFamilyMember - 1);
        }
      }

      setSelectedLetter(selectedLetter);
      setActionMessage(returnMessage);
      setSelectedLetters(newSelectedLetters);
      setDisplayWord(newDisplayWord);
      setGameStatus(newGameStatus);
    }
  };
  return {
    gameStatus,
    currentWord,
    currentEvent,
    currentWagon,
    selectedLetter,
    selectedLetters,
    familyStatus,
    actionMessage,
    displayWord,
    setGameState
  };
};

const Game = props => {
  const {
    gameStatus,
    currentWord,
    currentEvent,
    currentWagon,
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
    <div className="Game">
      <main className="GameWrapper">
        <header>
          <h1>Oregon Adventure</h1>
        </header>
        <EventArea currentEvent={currentEvent} currentWagon={currentWagon} />
        <FamilyArea family={familyStatus} />
        <ActionTextArea
          selectedLetter={selectedLetter}
          actionMessage={actionMessage}
          currentEvent={currentEvent}
        />
        <WordArea displayWord={displayWord} />
        {gameStatus !== "playing" ? (
          <ReplayButton onClick={props.startNewGame} />
        ) : (
          <SelectedLetters selectedLetters={selectedLetters} />
        )}
      </main>
      <KeyboardArea
        currentWord={currentWord}
        selectedLetters={selectedLetters}
        onClick={onLetterClick}
      />
      <footer>
        &copy; 2017-2019 <span className="footer-name">Steven Martinez</span>
      </footer>
    </div>
  );
};

export default Game;
