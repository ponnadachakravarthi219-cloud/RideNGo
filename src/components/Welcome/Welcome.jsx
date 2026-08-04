import "./Welcome.css";

function Welcome() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">

          <span className="tag">🚖 Smart Ride Booking Platform</span>

          <h1>
            Book Your Ride <br />
            Anytime, Anywhere
          </h1>

          <p>
            RideNGo helps you find safe, affordable and comfortable rides
            with just a few clicks. Travel smarter with real-time booking.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Book Now</button>
            <button className="secondary-btn">Learn More</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Welcome;