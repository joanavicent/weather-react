import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div className="row">
          <div className="col">
            <h1 className="city" id="city">{props.data.city}</h1>
            <h2>
                <WeatherTemperature celsius={props.data.temperature} />
                <ul>
                  <li className="date" id="date">
                    <FormattedDate date={props.data.date} />
                  </li>
                </ul>
            </h2>
          </div>
          <div className="col">
                <div className="float">
                <WeatherIcon code={props.data.icon} size={120} />
                <div className="description text-capitalize text-center">
                  {props.data.description}
                </div>
            <div className="col">
              <div className="float">
                    <div className="text-center">
                  <ul>
                    <li>
                      <strong>Humidity:</strong> <span id="humidity">{props.data.humidity}</span>%{" "}
                      
                    </li>
                    <li>
                      <strong>Wind speed:</strong> <span id="wind">{Math.round(props.data.wind)}</span>{" "}
                      km/h 
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
       </div> 
       
    );
}