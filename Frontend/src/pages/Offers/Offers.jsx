import "./Offers.css";
import { useNavigate } from "react-router-dom";

function Offers() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/home");
  };

  return (
    <div className="offers-page">

      {/* Header */}
      <header className="offers-header">
        <div className="logo">
          🚗 <span>RideNGo</span>
        </div>

        <div className="independence-title">
          🇮🇳 HAPPY INDEPENDENCE DAY 🇮🇳
        </div>
      </header>


      {/* Main Independence Day Section */}
      <main className="independence-main">

        {/* Left Content */}
        <div className="independence-content">

          <div className="small-title">
            🇮🇳 INDEPENDENCE DAY SPECIAL 🇮🇳
          </div>

          <h1>
            Celebrate Freedom
          </h1>

          <h2>
            Ride With Freedom
          </h2>

          <p>
            This Independence Day, celebrate the spirit of freedom
            with RideNGo.
          </p>

          <p>
            Book your favourite car, bike or auto and enjoy
            special Independence Day offers.
          </p>

          <div className="discount">
            GET UP TO <strong>30% OFF</strong>
          </div>

          <button
            className="continue-btn"
            onClick={handleContinue}
          >
            Continue to RideNGo →
          </button>

        </div>


        {/* Right Visual */}
        <div className="independence-visual">

          <div className="chakra">
            ☸
          </div>

          <div className="car">
            🚗
          </div>

          <div className="bike">
            🏍️
          </div>

          <div className="ride-text">
            <span>RIDE</span>
            <span>EXPLORE</span>
            <span>CELEBRATE</span>
          </div>

        </div>

      </main>


      {/* Bottom Message */}
      <section className="freedom-section">

        <div className="tricolor-line">
          <span className="saffron"></span>
          <span className="white"></span>
          <span className="green"></span>
        </div>

        <h2>
          Freedom to Travel • Freedom to Explore
        </h2>

        <p>
          🇮🇳 RideNGo wishes you a Happy Independence Day 🇮🇳
        </p>

      </section>


      {/* Footer */}
      <footer className="offers-footer">
        © 2026 RideNGo • Ride With Freedom 🇮🇳
      </footer>

    </div>
  );
}

export default Offers;