import "./Login.css";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaGoogle,
  FaKey,
  FaMotorcycle,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import API from "../../Axios/api";
import bike from "../../assets/bike-rental.jpg";

function Login() {
  const navigate = useNavigate();

  const [started, setStarted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Start bike animation
  const startRide = () => {
    if (started) return;

    setStarted(true);

    // Show login after bike animation
    setTimeout(() => {
      setShowLogin(true);
    }, 3000);
  };

  // Enter / Space key starts the bike
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.key === "Enter" || e.key === " ") &&
        !started
      ) {
        e.preventDefault();
        startRide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [started]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!formData.email || !formData.password) {
      setMessage("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const data = response.data;

      console.log("Login Response:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        if (data.user.role) {
          localStorage.setItem(
            "role",
            data.user.role
          );
        }
      }

      setMessage(
        data.message || "Login successful!"
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {
      console.error("Login Error:", error);

      console.log(
        "Backend Response:",
        error.response?.data
      );

      setMessage(
        error.response?.data?.message ||
          "Login failed. Please check your email and password."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* ================= BIKE INTRO ================= */}

      {!showLogin && (
        <div
          className={`bike-intro ${
            started ? "ride-started" : ""
          }`}
        >

          <div className="intro-overlay"></div>

          <div className="brand">
            <h1>
              Ride<span>N</span>Go
            </h1>

            <p>
              SMART SELF DRIVE & RENTAL BOOKING
            </p>
          </div>

          <div className="intro-content">

            <h2>
              Your Ride.
              <br />
              Your Rules.
            </h2>

            {!started && (
              <p className="start-text">
                Ready to ride?
              </p>
            )}

            {started && (
              <p className="starting-text">
                STARTING YOUR RIDE...
              </p>
            )}

          </div>

          {/* REAL BIKE */}

          <div
            className={`bike-wrapper ${
              started ? "bike-moving" : ""
            }`}
            onClick={startRide}
          >
            <img
              src={bike}
              alt="RideNGo Bike"
              className="real-bike"
            />

            {!started && (
              <div className="bike-key">
                <FaKey />
              </div>
            )}

          </div>

          {/* START BUTTON */}

          {!started && (
            <button
              className="start-bike-btn"
              onClick={startRide}
            >
              <FaMotorcycle />
              PRESS ENTER TO START
            </button>
          )}

          {/* LOADING */}

          {started && (
            <div className="ride-loading">

              <div className="loading-text">
                Loading your journey...
              </div>

              <div className="loading-bar">
                <div className="loading-progress"></div>
              </div>

              <span>100%</span>

            </div>
          )}

        </div>
      )}

      {/* ================= LOGIN ================= */}

      {showLogin && (
        <div className="login-container">

          <div className="login-left">

            <div className="login-logo">
              Ride<span>N</span>Go
            </div>

            <h1>
              Welcome Back 👋
            </h1>

            <p className="login-subtitle">
              Login to continue your RideNGo journey.
            </p>

            <form onSubmit={handleSubmit}>

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

              {/* PASSWORD */}

              <div className="input-box">

                <FaLock className="icon" />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <FaEye
                  className="eye"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                />

              </div>

              {/* LOGIN */}

              <button
                type="submit"
                className="login-btn"
                disabled={loading}
              >
                {loading
                  ? "Logging in..."
                  : "Login →"}
              </button>

              {/* MESSAGE */}

              {message && (
                <p className="login-message">
                  {message}
                </p>
              )}

              {/* GOOGLE */}

              <button
                type="button"
                className="google-btn"
                onClick={() =>
                  setMessage(
                    "Google login will be added later."
                  )
                }
              >
                <FaGoogle />
                Continue with Google
              </button>

              {/* REGISTER */}

              <p className="register-text">
                Don't have an account?{" "}

                <Link to="/register">
                  Register
                </Link>
              </p>

            </form>

          </div>

          <div className="login-right">

            <div className="right-bike">
              <img
                src={bike}
                alt="RideNGo Bike"
              />
            </div>

            <h2>
              Ride<span>N</span>Go
            </h2>

            <p>
              Smart Self Drive & Rental Booking
            </p>

            <div className="ride-lines">
              Explore.
              <br />
              Book.
              <br />
              Ride.
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Login;