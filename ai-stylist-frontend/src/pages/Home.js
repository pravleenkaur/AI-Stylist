import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to AI Stylist</h1>
          <p>Discover the latest trends and find your perfect style!</p>
          <Link to="/register">
            <button className="btn-primary">Sign Up</button>
          </Link>
        </div>
      </section>

      {/* Other sections or components can be added here */}
    </div>
  );
}

export default Home;
