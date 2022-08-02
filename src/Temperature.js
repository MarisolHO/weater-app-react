import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Temperature(props) {
  return (
    <div className="temperature">
      <WeatherIcon code={props.icon} size={52} />

      <WeatherTemperature celsius={props.temperature} />

      <ul className="today-other-info">
        <li>Humidity: {props.humidity}%</li>
        <li>Wind: {props.wind}km/h</li>
      </ul>
    </div>
  );
}
