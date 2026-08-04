import "./SummaryCards.css";
import {
  FaCarSide,
  FaMapMarkedAlt,
  FaUsers,
  FaStar,
} from "react-icons/fa";

function SummaryCards() {
  const cards = [
    {
      id: 1,
      icon: <FaCarSide />,
      number: "2,500+",
      title: "Available Drivers",
      color: "#2563eb",
    },
    {
      id: 2,
      icon: <FaMapMarkedAlt />,
      number: "120+",
      title: "Cities Covered",
      color: "#10b981",
    },
    {
      id: 3,
      icon: <FaUsers />,
      number: "500K+",
      title: "Happy Customers",
      color: "#f59e0b",
    },
    {
      id: 4,
      icon: <FaStar />,
      number: "4.9",
      title: "Customer Rating",
      color: "#ef4444",
    },
  ];

  return (
    <section className="summary">
      <div className="summary-container">
        {cards.map((card) => (
          <div className="summary-card" key={card.id}>
            <div
              className="summary-icon"
              style={{ background: card.color }}
            >
              {card.icon}
            </div>

            <h2>{card.number}</h2>

            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SummaryCards;