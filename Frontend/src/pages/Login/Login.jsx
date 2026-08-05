import "./Login.css";
import { FaEnvelope, FaLock, FaEye, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-left">

          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue your RideNGo journey.
          </p>

          <form>

            <div className="input-box">

              <FaEnvelope className="icon"/>

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <div className="input-box">

              <FaLock className="icon"/>

              <input
                type="password"
                placeholder="Password"
              />

              <FaEye className="eye"/>

            </div>

            <button className="login-btn">
              Login
            </button>

            <button className="google-btn">

              <FaGoogle />

              Continue with Google

            </button>

            <p className="register-text">

              Don't have an account?

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

    </div>
  );
}

export default Login;