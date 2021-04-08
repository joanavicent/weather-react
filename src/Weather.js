import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
  const [weatherData, setWeatherData]= useState ({ready:false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
  setWeatherData({
    ready:true,
    coordinates:response.data.coord,
    temperature: response.data.main.temp,
    humidity:response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date (response.data.dt *1000),
    description:response.data.weather[0].description,
    icon:response.data.weather[0].icon 
  });
 
}
function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "88bb6b7ed04faa186d338b9c9e0be6e6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

if (weatherData.ready){
return (
        
        <div>
          <WeatherInfo data={weatherData} />
      <form onSubmit= {handleSubmit} >
        <input 
        type="search" 
        placeholder="Enter a city..." 
        id="city-input" 
        autoFocus="on"
        onChange={handleCityChange}
        />
        <input 
        type="submit" 
        value="🔎" 
        className="btn btn-success" 
        />
        <button id="current-location-button">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
      <Forecast  coordinates={weatherData.coordinates} />
    </div>
        
    );
}else{
const apiKey="88bb6b7ed04faa186d338b9c9e0be6e6";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 

  return "Loading...";
}  
}
