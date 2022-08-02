import FormattedDate from "./FormattedDate";

export default function City(props) {
  return (
    <div className="city">
      <h1>{props.city}</h1>
      <p>
        <span>
          <FormattedDate date={props.date} />
        </span>

        <span className="sky">{props.description}</span>
      </p>
    </div>
  );
}
