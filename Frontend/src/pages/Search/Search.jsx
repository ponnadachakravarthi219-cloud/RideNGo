import "./Search.css";

function Search() {
  return (
    <div className="search-page">

      <div className="search-header">

        <h1>Find Your Perfect Ride</h1>

        <p>
          Search and book self-drive cars & bikes.
        </p>

      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Pickup Location"
        />

        <input
          type="date"
        />

        <input
          type="date"
        />

        <select>
          <option>Vehicle Type</option>
          <option>Car</option>
          <option>Bike</option>
          <option>SUV</option>
          <option>Luxury</option>
        </select>

        <button>
          Search
        </button>

      </div>

    </div>
  );
}

export default Search;