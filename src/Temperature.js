import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Temperature(props) {
  return (
    <div className="temperature">
      <WeatherIcon code={props.icon} />

      <p>
        <span className="temperature">{props.temperature}</span>
        <span className="units">
          <a href="/" className="active">
            °C
          </a>{" "}
          |<a href="/">°F</a>
        </span>
        <div className="col">
          <ul className="today-other-info">
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {props.wind}km/h</li>
          </ul>
        </div>
      </p>
    </div>
  );
}
