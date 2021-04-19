import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay (props){
   function maxTemperature(){
       let temperature= Math.round(props.data.temp.max);
       return `${temperature}°`;
   }

   function minTemperature(){
       let temperature= Math.round(props.data.temp.min);
       return `${temperature}°`;
   }
   
function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
}

    return ( 
        <div>
    <div className="Forecast-icon">
          <WeatherIcon code={props.data.weather[0].icon} size= {42} />
          <div className="Forecast-day">{day()}</div>
          <div className="Forecast-temperatures">
            <hr />
            <span className="Forecast-temperature-max">{maxTemperature()}</span>
            <span className="Forecast-temperature-min">{minTemperature()}</span>
          </div>
          </div>
          </div>
    );
}