import "./Welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/search");
  };

  const handleLearnMore = () => {
    const servicesSection = document.getElementById("services");

    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="welcome-section">
      <div className="welcome-overlay"></div>

      <div className="welcome-container">

        {/* LEFT CONTENT */}
        <div className="welcome-content">

          <span className="tag">
            🚖 Smart Ride Booking Platform
          </span>

          <h1>
            Book Your Ride
            <br />
            <span>Anytime, Anywhere</span>
          </h1>

          <p>
            RideNGo helps you find safe, affordable and comfortable
            rides with just a few clicks. Travel smarter with
            convenient online booking.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={handleBookNow}
            >
              🚗 Book Now
            </button>

            <button
              className="secondary-btn"
              onClick={handleLearnMore}
            >
              Learn More →
            </button>

          </div>

          {/* QUICK FEATURES */}
          <div className="hero-features">

            <div className="hero-feature">
              <span>🚗</span>
              <div>
                <strong>Cars</strong>
                <small>Self Drive</small>
              </div>
            </div>

            <div className="hero-feature">
              <span>🏍️</span>
              <div>
                <strong>Bikes</strong>
                <small>Easy Rental</small>
              </div>
            </div>

            <div className="hero-feature">
              <span>🛺</span>
              <div>
                <strong>Autos</strong>
                <small>Quick Booking</small>
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div className="welcome-visual">

          <div className="offer-badge">
            <span>🔥</span>
            <div>
              <strong>Special Offer</strong>
              <small>Up to 30% OFF</small>
            </div>
          </div>

          <div className="vehicle-circle">
            🚗
          </div>

          <div className="floating-card card-one">
            ⭐ 4.9 Rating
          </div>

          <div className="floating-card card-two">
            📍 Nearby Vehicles
          </div>

        </div>

      </div>
    </section>
  );
}

export default Welcome;