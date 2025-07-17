import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    password: '',
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.username || !inputs.password) {
      alert('Please fill all fields');
      return;
    }
    try {
      const res = await axios.post('http://localhost:1000/api/v1/register', inputs);
      alert(res.data.message);
      if (res.data.message === 'User registered successfully') {
        setInputs({ email: '', username: '', password: '' });
        navigate('/signin');
      }
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      alert(error.response?.data.message || 'Registration failed');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <div className="d-flex flex-column w-100 p-3">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={change}
            value={inputs.email}
          />
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={change}
            value={inputs.username}
          />
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={change}
            value={inputs.password}
          />
          <button className="btn-signup p-2" onClick={submit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;