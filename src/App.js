import React from "react";
import "./assets/css/reset.css";
import "./App.css";

import EventArea from "./components/EventArea/EventArea";
import FamilyArea from "./components/FamilyArea/FamilyArea";

function App() {
  return (
    <div className="App">
      <main className="GameWrapper">
        <header>
          <h1>Oregon Adventure</h1>
        </header>
        <EventArea />
        <FamilyArea />
        <section className="actionText">
          <p>This is a temporary bit of text. Just to get the layout done.</p>
        </section>
        <section className="wordArea">
          <div className="word-letter">D</div>
          <div className="word-letter">Y</div>
          <div className="word-letter">S</div>
          <div className="word-letter">E</div>
          <div className="word-letter">N</div>
          <div className="word-letter">T</div>
          <div className="word-letter">E</div>
          <div className="word-letter">R</div>
          <div className="word-letter">Y</div>
        </section>
        <section className="lettersGuessed">
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
          <div className="letter">A</div>
          <div className="letter">S</div>
          <div className="letter">D</div>
          <div className="letter">F</div>
          <div className="letter">G</div>
          <div className="letter">H</div>
          <div className="letter">J</div>
          <div className="letter">K</div>
          <div className="letter">L</div>
          <div className="letter">Z</div>
          <div className="letter">X</div>
          <div className="letter">C</div>
          <div className="letter">V</div>
          <div className="letter">B</div>
          <div className="letter">N</div>
          <div className="letter">M</div>
        </section>
      </main>
      <footer>&copy; 2019 &ndash; Steven Martinez</footer>
    </div>
  );
}

export default App;
