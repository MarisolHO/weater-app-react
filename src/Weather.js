import React from "react";
import City from "./City";
import Search from "./Search";
import Temperature from "./Temperature";

export default function Weather() {
  return (
    <div className="wrapper container d-flex flex-column">
      <div className="weather-wrapper border">
        <Search />
        <div className="weather-today d-flex justify-content-between">
          <City />
          <Temperature />
        </div>
      </div>
      <p className="open-source">This project was coded by Marisol HO and is {""}
        <a href="https://github.com/MarisolHO/weather-app-react" target="_blank">Open-source code</a>{" "}

      </p>
    </div>
  );
}
