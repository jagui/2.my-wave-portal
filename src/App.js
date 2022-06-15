import * as React from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hey Chain!</div>

        <div className="bio">I am Suss and I worked on a space craft</div>

        <button className="waveButton" onClick={wave}>
          Eject Me
        </button>
      </div>
    </div>
  );
}
