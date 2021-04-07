import React from "react";


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
          <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="" />
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