import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="logo">
          <span className="logo__icon">🚖</span>
          <span className="logo__text">RideNGo</span>
        </a>

        <nav>
          <ul className="nav__links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/signin">Sign In</a></li>
            <li>
              <a href="/login" className="login-btn">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;