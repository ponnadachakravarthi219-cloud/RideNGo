import "./WhyChoose.css";
import {
  FaShieldAlt,
  FaClock,
  FaMoneyBillWave,
  FaHeadset,
  FaMapMarkedAlt,
  FaUserCheck,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "100% Safe Journey",
      desc: "Verified drivers with live ride tracking and emergency support."
    },
    {
      id: 2,
      icon: <FaClock />,
      title: "Fast Pickup",
      desc: "Nearest driver arrives within minutes after booking."
    },
    {
      id: 3,
      icon: <FaMoneyBillWave />,
      title: "Affordable Prices",
      desc: "Transparent pricing without hidden charges."
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated customer support available anytime."
    },
    {
      id: 5,
      icon: <FaMapMarkedAlt />,
      title: "Live GPS Tracking",
      desc: "Track your ride in real time from pickup to destination."
    },
    {
      id: 6,
      icon: <FaUserCheck />,
      title: "Verified Drivers",
      desc: "Every driver is verified before joining RideNGo."
    },
  ];

  return (
    <section className="why">
      <div className="why-title">
        <span>WHY CHOOSE US</span>
        <h2>Why Ride With RideNGo?</h2>
        <p>
          We combine technology, safety and comfort to deliver the best ride
          experience for every customer.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item) => (
          <div className="why-card" key={item.id}>
            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;