import "./SearchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: "1",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (
      !formData.pickup ||
      !formData.destination ||
      !formData.date ||
      !formData.time
    ) {
      setMessage("Please fill pickup, destination, date and time.");
      return;
    }

    const query = new URLSearchParams({
      pickup: formData.pickup,
      destination: formData.destination,
      date: formData.date,
      time: formData.time,
      passengers: formData.passengers,
    });

    navigate(`/search?${query.toString()}`);
  };

  return (
    <section className="search-section">

      <div className="search-container">

        <div className="search-heading">
          <span>🔎</span>

          <div>
            <h2>Find Your Perfect Ride</h2>
            <p>
              Search cars, bikes and autos near you
            </p>
          </div>
        </div>


        <form
          className="search-form"
          onSubmit={handleSearch}
        >

          {/* Pickup */}
          <div className="input-group">

            <label>
              📍 Pickup Location
            </label>

            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="Enter pickup location"
            />

          </div>


          {/* Destination */}
          <div className="input-group">

            <label>
              🏁 Destination
            </label>

            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter destination"
            />

          </div>


          {/* Date */}
          <div className="input-group">

            <label>
              📅 Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

          </div>


          {/* Time */}
          <div className="input-group">

            <label>
              🕐 Time
            </label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />

          </div>


          {/* Passengers */}
          <div className="input-group">

            <label>
              👥 Passengers
            </label>

            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
            >
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5">5+ Passengers</option>
            </select>

          </div>


          <button
            type="submit"
            className="search-btn"
          >
            🔍 Search Ride
          </button>

        </form>


        {message && (
          <p className="search-message">
            ⚠️ {message}
          </p>
        )}

      </div>

    </section>
  );
}

export default SearchBar;