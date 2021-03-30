import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div>
      <form id="city-search-form">
        <input type="search" placeholder="Choose a city..." id="city-input" />
        <input type="submit" value="🔎" className="btn tn-success" />
        <button id="current-location-button">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
  );
}