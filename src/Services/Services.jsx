import "./Services.css";
import {
  FaTaxi,
  FaBusinessTime,
  FaPlaneDeparture,
  FaRoute,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      id: 1,
      icon: <FaTaxi />,
      title: "City Rides",
      desc: "Quick and affordable rides across your city with verified drivers.",
    },
    {
      id: 2,
      icon: <FaBusinessTime />,
      title: "Corporate Travel",
      desc: "Professional rides for business meetings and office transportation.",
    },
    {
      id: 3,
      icon: <FaPlaneDeparture />,
      title: "Airport Pickup",
      desc: "On-time airport pickup and drop services available 24/7.",
    },
    {
      id: 4,
      icon: <FaRoute />,
      title: "Outstation Trips",
      desc: "Comfortable long-distance rides at affordable prices.",
    },
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h5>OUR SERVICES</h5>
        <h2>Ride Services We Provide</h2>
        <p>
          Experience safe, reliable and comfortable rides designed for every
          travel need.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;