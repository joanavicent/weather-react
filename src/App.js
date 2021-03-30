import React from "react";
import './App.css';
import Weather from "./Weather";
import Forecast from "./Forecast";
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <Forecast />
      <footer>
        This project was coded by Joana Vicente and is {" "}
      <a href="https://github.com/joanavicent/weather-react" target="_blank">Open-sourced on GitHub </a>
      </footer>
    </div>
    </div>
  );
}


