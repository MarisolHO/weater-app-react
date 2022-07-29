export default function City(props) {

  return (
    <div className="city">
      <h1>{props.city}</h1>
      <p>
        <span>Monday 11:00 </span>
        <br />
        <span className="sky">{props.description}</span>
      </p>
    </div>
  );
}
