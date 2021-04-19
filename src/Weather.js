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
    feelsLike: Math.round(response.data.main.feels_like),
    temperature: response.data.main.temp,
    humidity:response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date (response.data.dt *1000),
    description:response.data.weather[0].description,
    icon:response.data.weather[0].icon 
  });
}

function Position(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let apiKey = "88bb6b7ed04faa186d338b9c9e0be6e6";
    let apiGeoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    axios.get(apiGeoUrl).then(handleResponse);
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
   function currentPosition() {
    navigator.geolocation.getCurrentPosition(Position);
  }

if (weatherData.ready){
return (
        <div>
          <WeatherInfo data={weatherData} />
          <Forecast  coordinates={weatherData.coordinates} />
      <hr />
      <br />
      <div className= "mb-3">
      <form onSubmit= {handleSubmit}>
        <input 
        type="search" 
        placeholder="Enter a city..." 
        id="city-input" 
        autoFocus="on"
        onChange={handleCityChange}
        className="form-control-sm border-secondary rounded-pill"
      />
        <input 
        type="submit" 
        value="Search" 
        className="btn rounded-pill btn-secondary" 
        auto-complete="on"
       />
        <input 
        type="button"
        value="My location"
        className="btn rounded-pill btn-secondary"
        auto-complete="on"
        onClick={currentPosition}
       />
</form>
</div>     
</div> 
    );
}else{
  const apiKey="88bb6b7ed04faa186d338b9c9e0be6e6";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 

  return (
  <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden"></span>
  </div>
</div>
);
}  
}
