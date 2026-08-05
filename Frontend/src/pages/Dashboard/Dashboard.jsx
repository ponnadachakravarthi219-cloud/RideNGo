import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <h2>RideNGo Dashboard</h2>

        <input
          type="text"
          placeholder="Search vehicles..."
        />
      </header>

      <section className="welcome-card">
        <h1>Welcome Back 👋</h1>
        <p>Ready for your next self-drive adventure?</p>
      </section>

      <section className="stats">

        <div className="card">
          <h3>08</h3>
          <p>Total Bookings</p>
        </div>

        <div className="card">
          <h3>02</h3>
          <p>Active Rentals</p>
        </div>

        <div className="card">
          <h3>05</h3>
          <p>Favorites</p>
        </div>

        <div className="card">
          <h3>₹3,250</h3>
          <p>Wallet Balance</p>
        </div>

      </section>

      <section className="quick-actions">

        <button>Search Vehicles</button>

        <button>My Bookings</button>

        <button>Payments</button>

        <button>Support</button>

      </section>

    </div>
  );
}

export default Dashboard;