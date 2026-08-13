import "./Services.css";

import cityCar from "../assets/city-car.jpg";
import bikeRental from "../assets/bike-rental.jpg";
import airportCar from "../assets/airport-car.jpg";
import roadTripCar from "../assets/road-trip-car.jpg";

function Services() {
  const services = [
    {
      id: 1,
      image: cityCar,
      title: "City Rides",
      desc: "Quick and affordable rides across your city with comfortable vehicles.",
      button: "Book City Ride",
    },
    {
      id: 2,
      image: bikeRental,
      title: "Bike Rental",
      desc: "Rent reliable bikes for daily travel, college trips and weekend rides.",
      button: "Rent a Bike",
    },
    {
      id: 3,
      image: airportCar,
      title: "Airport Pickup",
      desc: "Comfortable and convenient airport pickup and drop services.",
      button: "Book Airport Ride",
    },
    {
      id: 4,
      image: roadTripCar,
      title: "Outstation Trips",
      desc: "Enjoy comfortable long-distance journeys with our rental vehicles.",
      button: "Plan Your Trip",
    },
  ];

  return (
    <section className="services-section" id="services">

      <div className="services-header">

        <span className="services-tag">
          🚗 RIDE N GO SERVICES
        </span>

        <h2>
          Ride Services
          <span> We Provide</span>
        </h2>

        <p>
          Choose from cars, bikes and convenient travel services
          designed for every journey.
        </p>

      </div>


      <div className="services-grid">

        {services.map((service) => (
          <div
            className="service-card"
            key={service.id}
          >

            {/* IMAGE */}

            <div className="service-image">

              <img
                src={service.image}
                alt={service.title}
              />

              <div className="image-overlay">
                RideNGo
              </div>

            </div>


            {/* CONTENT */}

            <div className="service-content">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.desc}
              </p>

              <button
                className="service-btn"
              >
                {service.button}
                <span>→</span>
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;