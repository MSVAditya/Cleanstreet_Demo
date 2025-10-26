import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { auth } from '../../services/auth';

const LoginPage = () => {
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
      const res = await auth.login({
        email: formData.email,
        password: formData.password,
      });
      alert('Login successful');
      console.log('Login response:', res);
      navigate('/dashboard');
    } catch (err) {
      alert(err?.message || 'Login failed');
      console.error('Login error:', err);
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
            <h2>Login to CleanStreet</h2>
            <form onSubmit={handleSubmit} className="register-form">            
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                Login
              </button>
              <div className="forgot-password">
                <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Decorative Shapes */}
      <div className="decorative-shape shape-left"></div>
      <div className="decorative-shape shape-right"></div>
    </div>
  );
};

export default LoginPage;