import React from "react";
import logo from "../src/media/FU_logo.png";
import tempImage from "../src/media/Lilly_Bench.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Runesite</h1>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search for a rune..." />
      </div>
      <div className="Content">
        <div className="Description-Section">
          <div className="Image-Description">
            <img src={tempImage} className="Content-image" alt="content" />
            <p className="Content-description">This is a description.</p>
          </div>
          <button className="Content-button">Click me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
