export default function Search() {
  return (
    <form >
      <div className="header d-flex justify-content-between">
        <div className="search">
          <input
            type="text"
            placeholder="Enter a city"
            className="search-input"
            autoFocus="on"
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
