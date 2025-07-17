// src/components/about/About.jsx

import React from 'react';
import './About.css'; // Make sure to import the new CSS

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">About  JUSTDO</h1>
        <p className="about-intro">
          A To-Do List is a simple yet powerful tool used to organize tasks and manage
          time effectively. It helps individuals keep track of their responsibilities by
          listing tasks they need to complete, often in order of priority or deadline.
        </p>
        
        <div className="mission-vision-container">
          <div className="mission-card">
            <h2>Our Mission</h2>
            <p>
              To provide a seamless and intuitive platform that empowers users to master their schedules, reduce stress, and achieve their goals with clarity and focus.
            </p>
          </div>
          <div className="vision-card">
            <h2>Our Vision</h2>
            <p>
              To be the world's most beloved and effective task management app, fostering productivity and a sense of accomplishment for everyone, everywhere.
            </p>
          </div>
        </div>

        <p className="about-outro">
          Whether written on paper or managed through digital apps, a to-do list provides
          a clear overview of daily, weekly, or long-term goals. By breaking larger tasks
          into smaller, manageable steps, JUSTDO helps you stay focused and maintain a sense of
          accomplishment as you check off completed items.
        </p>
      </div>
    </div>
  );
};

export default About;
