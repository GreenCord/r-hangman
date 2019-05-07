import React from "react";
import "./assets/css/reset.css";
import "./App.css";

import EventArea from "./components/EventArea/EventArea";
import FamilyArea from "./components/FamilyArea/FamilyArea";
import ActionTextArea from "./components/ActionTextArea/ActionTextArea";
import WordArea from "./components/WordArea/WordArea";
import KeyboardArea from "./components/KeyboardArea/KeyboardArea";

function App() {
  return (
    <div className="App">
      <main className="GameWrapper">
        <header>
          <h1>Oregon Adventure</h1>
        </header>
        <EventArea />
        <FamilyArea />
        <ActionTextArea />
        <WordArea />
        <KeyboardArea />
      </main>
      <footer>&copy; 2017-2019 Steven Martinez</footer>
    </div>
  );
}

export default App;
