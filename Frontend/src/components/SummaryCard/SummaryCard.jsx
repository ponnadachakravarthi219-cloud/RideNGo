import "./SummaryCard.css";

function SummaryCard() {
  const summaryData = [
    {
      icon: "🚗",
      number: "100+",
      title: "Cars Available",
      description: "Ready for your journey",
    },
    {
      icon: "🏍️",
      number: "150+",
      title: "Bikes Available",
      description: "Affordable & convenient",
    },
    {
      icon: "🛺",
      number: "80+",
      title: "Autos Available",
      description: "Quick city rides",
    },
    {
      icon: "⭐",
      number: "4.9/5",
      title: "Customer Rating",
      description: "Trusted by riders",
    },
  ];

  return (
    <section className="summary-section">

      <div className="summary-container">

        {summaryData.map((item, index) => (
          <div
            className="summary-card"
            key={index}
          >

            <div className="summary-icon">
              {item.icon}
            </div>

            <div className="summary-content">

              <h2>
                {item.number}
              </h2>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SummaryCard;