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
      <p className="open-source">
        <a href="https://github.com/MarisolHO/weather-app">Open-source code</a>{" "}
        by Marisol HO
      </p>
    </div>
  );
}
