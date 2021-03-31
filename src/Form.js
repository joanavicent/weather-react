import React, {useState} from "react";
import "./Form.css";


export default function Form(props) {
    const[city, setCity]=useState (props.defaultCity);
    function handleSubmit(event){
        event.preventDefault();
    }

    function handleCityChange(event){
setCity(event.target.value);
    }
  return (
    <div>
      <form onSubmit= {handleSubmit} id="city-search-form">
        <input 
        type="search" 
        placeholder="Enter a city..." 
        id="city-input" 
        autoFocus="on"
        onChange={handleCityChange}
        />
        <input 
        type="submit" 
        value="🔎" 
        className="btn tn-success" 
        />
        <button id="current-location-button">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
  );
}