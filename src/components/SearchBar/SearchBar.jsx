import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="search-section">
      <div className="search-container">

        <div className="input-group">
          <label>Pickup Location</label>
          <input type="text" placeholder="Enter pickup location" />
        </div>

        <div className="input-group">
          <label>Destination</label>
          <input type="text" placeholder="Enter destination" />
        </div>

        <div className="input-group">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="input-group">
          <label>Time</label>
          <input type="time" />
        </div>

        <div className="input-group">
          <label>Passengers</label>
          <select>
            <option>1 Passenger</option>
            <option>2 Passengers</option>
            <option>3 Passengers</option>
            <option>4 Passengers</option>
            <option>5+ Passengers</option>
          </select>
        </div>

        <button className="search-btn">
          Search Ride
        </button>

      </div>
    </section>
  );
}

export default SearchBar;