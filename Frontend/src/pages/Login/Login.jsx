import "./Login.css";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaGoogle,
} from "react-icons/fa";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    // Check fields
    if (!formData.email || !formData.password) {
      setMessage("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      // Send login request to backend
      const response = await API.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const data = response.data;

      console.log("Login Response:", data);

      // Save JWT token
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Save user
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

      // Go to dashboard
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
    <div className="login-container">

      <div className="login-left">

        <h1>Welcome Back 👋</h1>

        <p>
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
              style={{
                cursor: "pointer",
              }}
            />

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
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

        <h2>RideNGo</h2>

        <p>
          Smart Self Drive Car & Bike Rental Platform
        </p>

      </div>

    </div>
  );
}

export default Login;