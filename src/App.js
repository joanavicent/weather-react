import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="location-info">
      <Weather defaultCity="Lisbon"/>
      </div>
      <hr />
      <footer className="text-center">
        Weather App coded by Joana Vicente and Open-sourced on {" "}
      <a href="https://github.com/joanavicent/weather-react" target="_blank" rel="noreferrer"> GitHub </a>
      </footer>
    </div>
    </div>
  );
}


