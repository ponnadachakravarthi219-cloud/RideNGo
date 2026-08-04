import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "RideNGo is the best cab booking platform I've used. The drivers are punctual and the rides are very comfortable.",
    },
    {
      id: 2,
      name: "Priya Reddy",
      role: "College Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Very affordable prices and an easy booking process. I use RideNGo almost every week.",
    },
    {
      id: 3,
      name: "Arjun Kumar",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      review:
        "Professional drivers, clean cars and excellent customer support. Highly recommended!",
    },
  ];

  return (
    <section className="testimonials">

      <div className="testimonial-title">
        <h5>TESTIMONIALS</h5>
        <h2>What Our Customers Say</h2>
        <p>
          Thousands of customers trust RideNGo for safe and reliable journeys.
        </p>
      </div>

      <div className="testimonial-grid">

        {reviews.map((review) => (

          <div className="testimonial-card" key={review.id}>

            <img src={review.image} alt={review.name} />

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="review-text">
              "{review.review}"
            </p>

            <h3>{review.name}</h3>

            <span>{review.role}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;