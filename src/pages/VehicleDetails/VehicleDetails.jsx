import "./VehicleDetails.css";

function VehicleDetails() {
  return (
    <section className="vehicle-details">

      <div className="vehicle-container">

        <div className="vehicle-image">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200"
            alt="Vehicle"
          />
        </div>

        <div className="vehicle-info">

          <h1>Hyundai Creta 2024</h1>

          <p className="price">
            ₹1,800 / Day
          </p>

          <div className="specs">

            <div className="spec">
              <h4>Fuel</h4>
              <p>Petrol</p>
            </div>

            <div className="spec">
              <h4>Transmission</h4>
              <p>Automatic</p>
            </div>

            <div className="spec">
              <h4>Seats</h4>
              <p>5</p>
            </div>

            <div className="spec">
              <h4>Mileage</h4>
              <p>18 km/l</p>
            </div>

          </div>

          <h3>Description</h3>

          <p className="description">
            Enjoy a premium self-drive experience with the Hyundai Creta.
            Perfect for city travel, family trips, and weekend adventures.
          </p>

          <button className="book-btn">
            Book Now
          </button>

        </div>

      </div>

    </section>
  );
}

export default VehicleDetails;