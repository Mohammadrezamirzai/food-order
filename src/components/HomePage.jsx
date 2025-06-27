import React from "react";
import featuredDishes from "../util/featuredDishes";
import testimonials from "../util/testimonials";

export default function HomePage() {
  // Example random info (could be randomized or static)
  const awards = [
    "Best Family Restaurant 2023",
    "Top 10 Foodie Destinations 2022",
    "Excellence in Customer Service 2021"
  ];

  return (
    <section className="home-page">
      <div className="home-hero">
        <img
          className="home-hero-img"
          src="http://localhost:3000/images/steak-frites.jpg"
          alt="Restaurant Hero"
        />
        <h2>Welcome to React Food!</h2>
        <p>
          Experience the best of world cuisine, made with love and served with a smile. Enjoy our cozy atmosphere and delicious meals, perfect for families, friends, and foodies alike.
        </p>
        <a href="#order" className="home-cta-btn">Order Now</a>
      </div>
      <div className="home-info-grid">
        <div className="home-info-card">
          <h3>Address</h3>
          <p>123 Flavor Street<br/>Foodville, FL 54321</p>
        </div>
        <div className="home-info-card">
          <h3>Contact</h3>
          <p>Phone: (555) 123-4567<br/>Email: info@reactfood.com</p>
        </div>
        <div className="home-info-card">
          <h3>Awards</h3>
          <ul>
            {awards.map((award, idx) => (
              <li key={idx}>{award}</li>
            ))}
          </ul>
        </div>
        <div className="home-info-card">
          <h3>Opening Hours</h3>
          <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
        </div>
      </div>
      <div className="home-featured-section">
        <h3>Featured Dishes</h3>
        <div className="home-featured-dishes">
          {featuredDishes.map((dish, idx) => (
            <div className="home-featured-dish" key={idx}>
              <img src={dish.image} alt={dish.name} />
              <span>{dish.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="home-testimonials-section">
        <h3>What Our Customers Say</h3>
        <div className="home-testimonials">
          {testimonials.map((t, idx) => (
            <div className="home-testimonial" key={idx}>
              <div className="home-testimonial-avatar">
                {t.name.charAt(0)}
              </div>
              <p>"{t.text}"</p>
              <span>- {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
