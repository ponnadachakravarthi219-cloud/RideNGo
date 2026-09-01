```jsx
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

      {/* FESTIVE BACKGROUND */}
      <div className="festive-glow glow-one"></div>
      <div className="festive-glow glow-two"></div>

      <div className="welcome-overlay"></div>

      <div className="welcome-container">

        {/* ================= LEFT CONTENT ================= */}
        <div className="welcome-content">

          <span className="festival-tag">
            🐘 ✨ GANESH CHATURTHI SPECIAL ✨ 🐘
          </span>

          <h1>
            Celebrate Ganesh Chaturthi
            <br />
            <span>Ride With Happiness</span>
          </h1>

          <p className="festival-text">
            This Vinayaka Chavithi, make every journey special with
            RideNGo. Book your car, bike or auto and enjoy amazing
            festival offers with your loved ones.
          </p>

          {/* OFFER BOX */}
          <div className="festival-offer">

            <div className="offer-icon">
              🐘
            </div>

            <div className="offer-content">
              <span>VINAYAKA CHAVITHI OFFER</span>

              <strong>
                UP TO 50% OFF
              </strong>

              <small>
                Use Code: <b>GANESHA50</b>
              </small>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={handleBookNow}
            >
              🚗 Book Festival Ride
            </button>

            <button
              className="secondary-btn"
              onClick={handleLearnMore}
            >
              Explore Offers →
            </button>

          </div>

          {/* QUICK FEATURES */}
          <div className="hero-features">

            <div className="hero-feature">
              <span>🚗</span>

              <div>
                <strong>Cars</strong>
                <small>Festival Trips</small>
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

        {/* ================= RIGHT VISUAL ================= */}
        <div className="welcome-visual">

          {/* FESTIVAL BADGE */}
          <div className="offer-badge">

            <span>🎁</span>

            <div>
              <strong>Ganesh Chaturthi</strong>

              <small>
                Special Offers
              </small>
            </div>

          </div>

          {/* MAIN GANESHA */}
          <div className="ganesha-circle">

            <div className="ganesha">
              🐘
            </div>

            <div className="ganesha-text">
              <strong>श्री गणेशाय नमः</strong>
              <span>Happy Vinayaka Chavithi</span>
            </div>

          </div>

          {/* FLOATING OFFER */}
          <div className="floating-card festival-card-one">
            🎟️ GANESHA50
          </div>

          <div className="floating-card festival-card-two">
            🎁 50% OFF
          </div>

          <div className="floating-card festival-card-three">
            ❤️ Family Rides
          </div>

        </div>

      </div>

      {/* DECORATIVE DIYAS */}
      <div className="diya diya-one">🪔</div>
      <div className="diya diya-two">🪔</div>
      <div className="diya diya-three">🪔</div>

    </section>
  );
}

export default Welcome;
```
