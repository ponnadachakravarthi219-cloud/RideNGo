import "./Register.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaIdCard,
} from "react-icons/fa";

function Register() {
  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-left">
          <h1>Create Account</h1>

          <p>Register to start booking self-drive vehicles.</p>

          <form>

            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="input-box">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input-box">
              <FaPhone className="icon" />
              <input type="tel" placeholder="Mobile Number" />
            </div>

            <div className="input-box">
              <FaLock className="icon" />
              <input type="password" placeholder="Password" />
            </div>

            <div className="input-box">
              <FaLock className="icon" />
              <input type="password" placeholder="Confirm Password" />
            </div>

            <div className="input-box">
              <FaIdCard className="icon" />
              <input type="file" />
            </div>

            <button className="register-btn">
              Create Account
            </button>

            <p className="login-link">
              Already have an account?

              <Link to="/login">
                Login
              </Link>
            </p>

          </form>
        </div>

        <div className="register-right">
          <h2>RideNGo</h2>

          <p>
            Smart Self Drive Car & Bike Rental Platform
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;