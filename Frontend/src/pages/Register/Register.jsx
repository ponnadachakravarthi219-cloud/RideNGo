import "./Register.css";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useState,
  useEffect,
} from "react";

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


  /* =========================================
     ANIMATION STATES
  ========================================= */

  const [startAnimation, setStartAnimation] =
    useState(false);

  const [showRegister, setShowRegister] =
    useState(false);


  /* =========================================
     FORM DATA
  ========================================= */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });


  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);


  /* =========================================
     START CAR
  ========================================= */

  const startCar = () => {

    if (startAnimation) {
      return;
    }

    setStartAnimation(true);


    /*
      CSS animation = 3.2 seconds

      Wait 3.5 seconds and then
      display registration page.
    */

    setTimeout(() => {

      setShowRegister(true);

    }, 3500);

  };


  /* =========================================
     ENTER KEY
  ========================================= */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (
        event.key === "Enter" &&
        !startAnimation &&
        !showRegister
      ) {

        startCar();

      }

    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [startAnimation, showRegister]);


  /* =========================================
     INPUT CHANGE
  ========================================= */

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]:
        event.target.value,
    });

  };


  /* =========================================
     REGISTER SUBMIT
  ========================================= */

  const handleSubmit = async (event) => {

    event.preventDefault();

    setMessage("");


    /* -----------------------------------------
       EMPTY FIELD CHECK
    ----------------------------------------- */

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {

      setMessage(
        "Please fill all fields"
      );

      return;

    }


    /* -----------------------------------------
       PASSWORD CHECK
    ----------------------------------------- */

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setMessage(
        "Passwords do not match"
      );

      return;

    }


    /* -----------------------------------------
       PHONE CHECK
    ----------------------------------------- */

    if (
      !/^\d{10}$/.test(
        formData.phone
      )
    ) {

      setMessage(
        "Phone number must contain 10 digits"
      );

      return;

    }


    /* -----------------------------------------
       API REGISTER
    ----------------------------------------- */

    try {

      setLoading(true);


      const response =
        await API.post(
          "/auth/register",
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }
        );


      const data = response.data;


      console.log(
        "Register Response:",
        data
      );


      setMessage(
        data.message ||
        "Registration successful!"
      );


      /* ---------------------------------------
         GO TO LOGIN
      --------------------------------------- */

      setTimeout(() => {

        navigate("/login");

      }, 1000);


    } catch (error) {

      console.error(
        "Register Error:",
        error
      );


      console.log(
        "Backend Response:",
        error.response?.data
      );


      setMessage(
        error.response?.data?.message ||
        "Registration failed"
      );


    } finally {

      setLoading(false);

    }

  };


  /* =========================================
     JSX
  ========================================= */

  return (

    <div className="register-wrapper">


      {/* =================================================
          FULL SCREEN CAR INTRO
      ================================================= */}

      {!showRegister && (

        <div
          className={`car-intro ${
            startAnimation
              ? "car-started"
              : ""
          }`}
        >


          {/* -----------------------------------------
              RED BACKGROUND LIGHTS
          ----------------------------------------- */}

          <div
            className="road-light light-one"
          />

          <div
            className="road-light light-two"
          />

          <div
            className="road-light light-three"
          />


          {/* -----------------------------------------
              INTRO CONTENT
          ----------------------------------------- */}

          <div className="intro-content">


            {/* LOGO */}

            <h1 className="intro-logo">
              RideNGo
            </h1>


            {/* TITLE */}

            <h2 className="intro-title">
              Start Your Journey
            </h2>


            {/* SUBTITLE */}

            <p className="intro-subtitle">
              Smart Self Drive Car & Bike Rental
            </p>


            {/* -------------------------------------
                CAR
            ------------------------------------- */}

            <div className="car-area">


              {/* RED GLOW */}

              <div className="car-glow" />


              {/* CAR IMAGE */}

              <img
                src={cityCar}
                alt="RideNGo Car"
                className="animated-car"
              />


            </div>


            {/* -------------------------------------
                START BUTTON
            ------------------------------------- */}

            {!startAnimation && (

              <button
                type="button"
                className="car-key"
                onClick={startCar}
              >

                <FaKey />

                <span>
                  START CAR
                </span>

              </button>

            )}


            {/* -------------------------------------
                ENTER MESSAGE
            ------------------------------------- */}

            {!startAnimation && (

              <div className="press-enter">

                PRESS{" "}

                <strong>
                  ENTER
                </strong>{" "}

                TO START

              </div>

            )}


            {/* -------------------------------------
                ENGINE MESSAGE
            ------------------------------------- */}

            {startAnimation && (

              <div className="engine-text">

                ENGINE STARTING...

              </div>

            )}


          </div>


          {/* -----------------------------------------
              ROAD
          ----------------------------------------- */}

          <div className="road">

            <div className="road-line" />

          </div>


        </div>

      )}


      {/* =================================================
          REGISTER PAGE
      ================================================= */}

      {showRegister && (

        <div className="register-container">


          {/* =========================================
              LEFT SIDE
          ========================================= */}

          <div className="register-left">


            <h1>
              Create Account
            </h1>


            <p>
              Register to start booking
              self-drive vehicles.
            </p>


            <form
              onSubmit={handleSubmit}
            >


              {/* -------------------------------------
                  NAME
              ------------------------------------- */}

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


              {/* -------------------------------------
                  EMAIL
              ------------------------------------- */}

              <div className="input-box">

                <FaEnvelope
                  className="icon"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              {/* -------------------------------------
                  PHONE
              ------------------------------------- */}

              <div className="input-box">

                <FaPhone
                  className="icon"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>


              {/* -------------------------------------
                  PASSWORD
              ------------------------------------- */}

              <div className="input-box">

                <FaLock
                  className="icon"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />

              </div>


              {/* -------------------------------------
                  CONFIRM PASSWORD
              ------------------------------------- */}

              <div className="input-box">

                <FaLock
                  className="icon"
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={
                    formData.confirmPassword
                  }
                  onChange={handleChange}
                />

              </div>


              {/* -------------------------------------
                  ID CARD
              ------------------------------------- */}

              <div className="input-box">

                <FaIdCard
                  className="icon"
                />

                <input
                  type="file"
                  accept="image/*"
                />

              </div>


              {/* -------------------------------------
                  REGISTER BUTTON
              ------------------------------------- */}

              <button
                type="submit"
                className="register-btn"
                disabled={loading}
              >

                {loading
                  ? "Creating Account..."
                  : "Create Account"}

              </button>


              {/* -------------------------------------
                  MESSAGE
              ------------------------------------- */}

              {message && (

                <p className="register-message">
                  {message}
                </p>

              )}


              {/* -------------------------------------
                  LOGIN LINK
              ------------------------------------- */}

              <p className="login-link">

                Already have an account?{" "}

                <Link to="/login">
                  Login
                </Link>

              </p>


            </form>


          </div>


          {/* =========================================
              RIGHT SIDE
          ========================================= */}

          <div className="register-right">

            <h2>
              RideNGo
            </h2>

            <p>
              Smart Self Drive Car & Bike
              Rental Platform
            </p>

          </div>


        </div>

      )}

    </div>

  );

}


export default Register;