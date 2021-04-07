import React from "react";
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Lisbon"/>
      
      <hr />
      <footer className="text-center">
        This project was coded by Joana Vicente and is {" "}
      <a href="https://github.com/joanavicent/weather-react" target="_blank" rel="noreferrer">Open-sourced on GitHub </a>
      </footer>
    </div>
    </div>
  );
}


