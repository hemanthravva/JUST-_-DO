// src/components/signin/Signin.js

import React, { useState } from 'react';
import './Sign.css'; // Make sure this CSS file exists
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'; // Import toast notifications
import { setUser } from '../../store/userSlice';
import { login } from '../../store/authSlice';

// IMPORTANT: For toast notifications to appear, you must add the <ToastContainer />
// component to your main App.js file. See the other Canvas document for the code.

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      toast.warn('Please fill all fields before you login');
      return;
    }
    try {
      const response = await axios.post('http://localhost:1000/api/v1/signin', inputs);
      
      // On successful login
      sessionStorage.setItem('id', response.data.user._id);
      dispatch(setUser(response.data.user));
      dispatch(login(response.data.user));
      toast.success('Login successful!');
      navigate('/todo');

    } catch (error) {
      // This block handles all errors from the backend
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred.';
      toast.error(errorMessage);

      // NEW FEATURE: Check if the error is "User not found"
      if (error.response && error.response.status === 404) {
        // Wait 2 seconds for the user to read the toast, then redirect
        setTimeout(() => {
          navigate('/signup');
        }, 2000);
      }
      console.error('Signin error:', errorMessage);
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-content">
        <div className="vertical-text">
          <span>S</span>
          <span>I</span>
          <span>G</span>
          <span>N</span>
          <span className="space"></span>
          <span>I</span>
          <span>N</span>
        </div>
        <div className="signin-container">
          <h1 className="signin-title">Welcome Back</h1>
          <form className="signin-form" onSubmit={submit}>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={inputs.email}
              onChange={change}
              required
            />
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={change}
              required
            />
            <button type="submit" className="btn-signin">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
