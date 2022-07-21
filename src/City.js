export default function City() {
  let weatherData = {
    city: "New York",
    date: "Monday",
    description: "Cloudy"
  };
  return (
    <div className="city">
      <h1>{weatherData.city}</h1>
      <p>
        <span>{weatherData.date} 11:00 </span>
        <br />
        <span className="sky">{weatherData.description}</span>
      </p>
    </div>
  );
}
