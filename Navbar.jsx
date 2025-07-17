// src/components/Navbar.jsx

import React from 'react';
import './Navbar.css'; // Make sure to import the new CSS
import { GiEvilBook } from 'react-icons/gi'; // CHANGED: Reverted to the original icon
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice'; // Correct the path if needed

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.removeItem('id');
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg cosmic-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* The icon is now white */}
          <GiEvilBook style={{ color: 'white' }} /> JUSTDO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/todo">
                  To-Do List
                </Link>
              </li>
            )}
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="btn-nav signup-btn" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn-nav signin-btn" to="/signin">
                    Sign In
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn-nav logout-btn" onClick={handleLogout}>
                  Log Out
                </button>
              </li>
            )}
             <li className="nav-item profile-item">
               <Link className="nav-link" to="#profile">
                 <img
                   className="image_profile_user"
                   src="https://www.w3schools.com/w3images/avatar2.png"
                   alt="Profile"
                 />
               </Link>
             </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
