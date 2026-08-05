import "./Booking.css";

function Booking() {
  return (
    <div className="booking-page">

      <div className="booking-container">

        <h1>Book Your Vehicle</h1>

        <form className="booking-form">

          <div className="form-group">
            <label>Pickup Location</label>
            <input type="text" placeholder="Enter Pickup Location" />
          </div>

          <div className="form-group">
            <label>Return Location</label>
            <input type="text" placeholder="Enter Return Location" />
          </div>

          <div className="form-group">
            <label>Pickup Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Pickup Time</label>
            <input type="time" />
          </div>

          <div className="form-group">
            <label>Return Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Return Time</label>
            <input type="time" />
          </div>

          <div className="form-group full-width">
            <label>Coupon Code</label>
            <input type="text" placeholder="Enter Coupon Code" />
          </div>

          <div className="summary">

            <h2>Booking Summary</h2>

            <div className="summary-item">
              <span>Vehicle</span>
              <span>Hyundai Creta</span>
            </div>

            <div className="summary-item">
              <span>Rental Price</span>
              <span>₹1800 / Day</span>
            </div>

            <div className="summary-item">
              <span>Security Deposit</span>
              <span>₹3000</span>
            </div>

            <div className="summary-item total">
              <span>Total Amount</span>
              <span>₹4800</span>
            </div>

          </div>

          <button className="payment-btn">
            Proceed to Payment
          </button>

        </form>

      </div>

    </div>
  );
}

export default Booking;