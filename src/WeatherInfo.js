import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="Weather">
            <div className="row">
          <div className="col-sm-6">
            <h1 id="city">{props.data.city}</h1>
            <h2>
                <WeatherTemperature celsius={props.data.temperature} />
              <div className="col-sm">
                <ul>
                  <li className="date" id="date">
                    <FormattedDate date={props.data.date} />
                  </li>
              </ul>
                <br />
                <div className="col d-flex align-items-end">
                  <ul>
                    <li>
                      <strong>Humidity:</strong> <span id="humidity">{props.data.humidity}</span>%{" "}
                      <i className="fas fa-tint"></i>
                    </li>
                    <li>
                      <strong>Wind speed:</strong> <span id="wind">{Math.round(props.data.wind)}</span>{" "}
                      km/h <i className="fas fa-wind"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </h2>
          </div>
          <div className="col">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float"
              id="weather-icon"
            />
            <div className="text-capitalize" id="description">
             {props.data.description}
            </div>
          </div>
        </div>
       </div> 
       </div>
    );
}