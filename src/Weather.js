import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
  const [weatherData, setWeatherData]= useState ({ready:false});

function handleResponse(response){
  setWeatherData({
    ready:true,
    temperature: response.data.main.temp,
    humidity:response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date (response.data.dt *1000),
    description:response.data.weather[0].description,
    iconUrl:"http://openweathermap.org/img/wn/01d@2x.png"
  });
 
}

if (weatherData.ready){
return (
        <div className="Weather">
            <div className="row">
          <div className="col-sm-6">
            <h1 id="city">{weatherData.city}</h1>
            <h2>
              <span className="temperature" id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/" id="celsius-link" className="active">
                  °C
                </a>
                |
                <a href="/" id="fahrenheit-link">
                  °F
                </a>
              </span>
              <div className="col-sm">
                <ul>
                  <li className="date" id="date">
                    <FormattedDate date={weatherData.date} />
                  </li>
              </ul>
                <br />
                <div className="col d-flex align-items-end">
                  <ul>
                    <li>
                      <strong>Humidity:</strong> <span id="humidity">{weatherData.humidity}</span>%{" "}
                      <i className="fas fa-tint"></i>
                    </li>
                    <li>
                      <strong>Wind speed:</strong> <span id="wind">{weatherData.wind}</span>{" "}
                      km/h <i className="fas fa-wind"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </h2>
          </div>
          <div className="col">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float"
              id="weather-icon"
            />
            <div className="text-capitalize" id="description">
             {weatherData.description}
            </div>
          </div>
        </div>
        </div>
    );
}else{
const apiKey="88bb6b7ed04faa186d338b9c9e0be6e6";
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 

  return "Loading...";
}  
}