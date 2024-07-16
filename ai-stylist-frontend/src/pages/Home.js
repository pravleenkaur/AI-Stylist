// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='sub-container'>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to AI Stylist</h1>
            <p>Discover the latest trends and find your perfect style!</p>
            <Link to="/register">
              <button className="btn-primary">Sign Up</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
