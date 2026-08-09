import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../Axios/api";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaIdCard,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

      // Go to login
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
  );
}

export default Register;