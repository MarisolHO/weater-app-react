export default function Temperature() {
  let temperatureData = {
    celsius: "20"
  };
  return (
    <div className="temperature">
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        className="sun"
        alt="clear"
      />
      <p>
        <span>{temperatureData.celsius}</span>
        <span className="units">
          <a href="/" className="active">
            °C
          </a>{" "}
          |<a href="/">°F</a>
        </span>
        <div className="col">
          <ul className="today-orther-info">
            <li>Humidity: 78%</li>
            <li>Wind: 11km/h</li>
          </ul>
        </div>
      </p>
    </div>
  );
}
