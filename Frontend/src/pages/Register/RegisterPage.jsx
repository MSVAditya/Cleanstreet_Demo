import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import { auth } from '../../services/auth';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.fullName || formData.username || '',
        email: formData.email,
        password: formData.password,
      };
      const res = await auth.register(payload);
      alert('Registration successful');
      console.log('Register response:', res);
      navigate('/login');
    } catch (err) {
      alert(err?.message || 'Registration failed');
      console.error('Register error:', err);
    }
  };

  return (
    <div className="register-container">
    {/* Navigation bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-icon">🌿</span>
          <Link to="/" className="navbar-logo">Cleanstreet</Link>
        </div>
        <div className="navbar-center">
          <ul className="navbar-menu">
            <li>
              <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            </li>
            <li>
              <Link to="/report" className="navbar-link">Report</Link>
            </li>
            <li>
              <Link to="/view-complaints" className="navbar-link">View Complaints</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <Link to="/login" className="navbar-button">Login</Link>
          <Link to="/register" className="navbar-button register">Register</Link>
        </div>
    </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="form-container">
            <h2>Register for CleanStreet</h2>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <div className="label-optional">
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
            
            <p className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Decorative Shapes */}
      <div className="decorative-shape shape-left"></div>
      <div className="decorative-shape shape-right"></div>
    </div>
  );
};

export default RegisterPage;