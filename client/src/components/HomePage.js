import React from "react";
import { Link } from "react-router-dom";
import '../styles/HomePage.css'; // Updated path

const HomePage = () => {
  const parkingSpaces = 20; // Static for now

  return (
    <div className="homepage">
      <header className="header">
        <div className="hero-image-container">
          <img
            src="https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Parking Space"
            className="hero-image"
          />
          <div className="overlay">
            <h1>Parking Management System</h1>
            <p>Efficient parking management at your fingertips.</p>
            <div className="buttons">
              <Link to="/login" className="btn">Login</Link>
              <Link to="/signup" className="btn">Signup</Link>
            </div>
            <div className="parking-status">
              <h3>Available Parking Spaces: {parkingSpaces}</h3>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;