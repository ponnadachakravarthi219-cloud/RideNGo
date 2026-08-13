import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../../Axios/api";
import cityCar from "../../assets/city-car.jpg";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaIdCard,
  FaKey,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  // Animation states
  const [startAnimation, setStartAnimation] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Press ENTER to start car
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "Enter" &&
        !startAnimation &&
        !showRegister
      ) {
        startCar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [startAnimation, showRegister]);

  // Start car animation
  const startCar = () => {
    if (startAnimation) return;

    setStartAnimation(true);

    // Show register form after car animation
    setTimeout(() => {
      setShowRegister(true);
    }, 3500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    // Check empty fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("Please fill all fields");
      return;
    }

    // Check password
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // Check phone
    if (!/^\d{10}$/.test(formData.phone)) {
      setMessage("Phone number must contain 10 digits");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      const data = response.data;

      setMessage(
        data.message || "Registration successful!"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      console.error("Register Error:", error);

      setMessage(
        error.response?.data?.message ||
        "Registration failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-wrapper">

      {/* ======================================
          CAR INTRO ANIMATION
      ====================================== */}

      {!showRegister && (
        <div
          className={`car-intro ${
            startAnimation ? "car-started" : ""
          }`}
        >

          {/* Background lights */}
          <div className="road-light light-one"></div>
          <div className="road-light light-two"></div>
          <div className="road-light light-three"></div>

          <div className="intro-content">

            <div className="intro-logo">
              RideNGo
            </div>

            <p className="intro-title">
              Start Your Journey
            </p>

            <p className="intro-subtitle">
              Smart Self Drive Car & Bike Rental
            </p>

            {/* Car */}
            <div className="car-area">

              <div className="car-glow"></div>

             <img
  src={cityCar}
  alt="RideNGo Car"
  className="animated-car"
/>

            </div>

            {/* Car Key */}
            {!startAnimation && (
              <button
                className="car-key"
                onClick={startCar}
              >
                <FaKey />

                <span>
                  START CAR
                </span>
              </button>
            )}

            {/* Starting message */}
            {!startAnimation && (
              <div className="press-enter">
                PRESS <strong>ENTER</strong> TO START
              </div>
            )}

            {/* Engine starting */}
            {startAnimation && (
              <div className="engine-text">
                ENGINE STARTING...
              </div>
            )}

          </div>

          {/* Road */}
          <div className="road">
            <div className="road-line"></div>
          </div>

        </div>
      )}

      {/* ======================================
          REGISTER PAGE
      ====================================== */}

      {showRegister && (
        <div className="register-container">

          <div className="register-left">

            <h1>Create Account</h1>

            <p>
              Register to start booking self-drive vehicles.
            </p>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="input-box">
                <FaUser className="icon" />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* EMAIL */}
              <div className="input-box">
                <FaEnvelope className="icon" />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* PHONE */}
              <div className="input-box">
                <FaPhone className="icon" />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* PASSWORD */}
              <div className="input-box">
                <FaLock className="icon" />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="input-box">
                <FaLock className="icon" />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              {/* ID CARD */}
              <div className="input-box">
                <FaIdCard className="icon" />

                <input
                  type="file"
                  accept="image/*"
                />
              </div>

              {/* REGISTER BUTTON */}
              <button
                type="submit"
                className="register-btn"
                disabled={loading}
              >
                {loading
                  ? "Creating Account..."
                  : "Create Account"}
              </button>

              {/* MESSAGE */}
              {message && (
                <p className="register-message">
                  {message}
                </p>
              )}

              {/* LOGIN LINK */}
              <p className="login-link">
                Already have an account?{" "}

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
      )}

    </div>
  );
}

export default Register;