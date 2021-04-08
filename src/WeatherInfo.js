import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="Weather">
            <div className="row">
          <div className="col">
              <div className="border rounded">
            <h1 id="city">{props.data.city}</h1>
            <h2>
                <WeatherTemperature celsius={props.data.temperature} />
              <div className="col">
                <ul>
                  <li className="date" id="date">
                    <FormattedDate date={props.data.date} />
                  </li>
              </ul>
                
              </div>
            </h2>
            </div>
          </div>
          <div className="col">
              <div className="border rounded" >
                <div className="float">
                <WeatherIcon code={props.data.icon} size={120} />
            </div>
            <div className="description text-capitalize text-center">
            
                {props.data.description}
                
            </div>
            <div className="col">
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