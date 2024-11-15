import React, { useState } from 'react';
import './Home.css';
import Sign_up_in from '../components/Sign_up_in';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar 
        setIsModalOpen={setIsModalOpen} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />
      {isModalOpen && <Sign_up_in onClose={closeModal} setIsLoggedIn={setIsLoggedIn} />}
      
      <div id="home" className={`home-container ${isModalOpen ? 'blurred' : ''}`}>
        <div className="search-bar">
          <input type="text" placeholder="Where do you want to go?" />
          <button>Search</button>
        </div>

        <div className="recommendations">
          <h2>Top Recommendations</h2>
          <div className="recommendation-card">
            <div className="image-container">
              <img src="https://example.com/place.jpg" alt="Place" />
            </div>
            <div className="content-container">
              <h3>Beautiful Beach</h3>
              <p>A breathtaking beach with crystal clear waters and white sand. Perfect for relaxation and water sports.</p>
            </div>
          </div>
        </div>

        <div id="about" className="about-section">
          <h2>About Us</h2>
          <p>We are dedicated to helping you find the best travel destinations and experiences around the world.</p>
        </div>

        <div id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>Email: contact@travelify.com</p>
          <p>Phone: +1-234-567-890</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
