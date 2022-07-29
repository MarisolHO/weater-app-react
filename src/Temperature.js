import React from "react";

export default function Temperature(props) {
  return (
    <div className="temperature">
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        className="sun"
        alt={props.description}
      />
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
