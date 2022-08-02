import axios from "axios";
import { useState } from "react";

const apiKey = "e3f308dbc1f40462b7213a15fa40687f";

export default function Search({ setCurrentWeather }) {
  const [city, setCity] = useState("paris");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (loading === false) {
      setLoading(true);
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch(() => setLoading(false));
    }
  }

  function handleResponse(response) {
    console.log(response.data);
    const weartherData = {
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      city: city,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    };
    setCurrentWeather(weartherData);
    setLoading(false);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header d-flex justify-content-between">
        <div className="search">
          <input
            type="text"
            placeholder="Enter a city"
            className="search-input"
            autoFocus="on"
            value={city}
            onChange={handleCityChange}
          />
          <i className="fas fa-search fa-fw search-icon"></i>
        </div>
        <button type="submit" className="submit">
          Search
        </button>
      </div>
    </form>
  );
}
