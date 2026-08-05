import "./Vehicles.css";

function Vehicles() {
  const vehicles = [
    {
      id: 1,
      name: "Hyundai Creta",
      type: "SUV",
      price: "₹1800 / Day",
      fuel: "Petrol",
      seats: 5,
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600",
    },
    {
      id: 2,
      name: "Royal Enfield Classic 350",
      type: "Bike",
      price: "₹900 / Day",
      fuel: "Petrol",
      seats: 2,
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600",
    },
    {
      id: 3,
      name: "Tata Nexon EV",
      type: "Electric",
      price: "₹2200 / Day",
      fuel: "Electric",
      seats: 5,
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600",
    },
  ];

  return (
    <section className="vehicles">
      <h1>Available Vehicles</h1>

      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <div className="vehicle-card" key={vehicle.id}>
            <img src={vehicle.image} alt={vehicle.name} />

            <div className="vehicle-content">
              <h2>{vehicle.name}</h2>

              <p>{vehicle.type}</p>

              <div className="vehicle-info">
                <span>{vehicle.fuel}</span>
                <span>{vehicle.seats} Seats</span>
              </div>

              <h3>{vehicle.price}</h3>

              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vehicles;