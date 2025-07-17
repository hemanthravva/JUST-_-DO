// src/components/home/Home.js

import React from 'react';
import './Home.css'; // Make sure to import the new CSS
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Get the user's login status from the Redux store
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  // This function handles the button click
  const handleMakeListClick = () => {
    if (isLoggedIn) {
      // If the user is logged in, go to the to-do page
      navigate('/todo');
    } else {
      // If not logged in, go to the sign-in page
      navigate('/signin');
    }
  };

  return (
    // Use the new 'home-wrapper' class for the animated background
    <div className="home-wrapper">
      <div className="home-content d-flex flex-column justify-content-center align-items-center">
        {/* The main heading with the new gradient text effect */}
        <h1 className="home-title text-center">
          MASTER YOUR SCHEDULE <br /> <span>stress-free</span>
        </h1>
        {/* The descriptive text */}
        <p className="home-description text-center">
          Get things done with ease using the
          <br />
          world's #1 task manager app
        </p>
        {/* The button now has an onClick handler */}
        <button className="home-btn" onClick={handleMakeListClick}>
          Make To-Do List
        </button>
      </div>
    </div>
  );
};

export default Home;
