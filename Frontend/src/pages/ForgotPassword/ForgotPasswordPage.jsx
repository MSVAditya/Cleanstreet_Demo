import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPasswordPage.css';
import { auth } from '../../services/auth';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await auth.forgotPassword({ email });
      alert('If this email exists, a reset token has been generated.');
      console.log('Forgot password response:', res);
    } catch (err) {
      alert(err?.message || 'Failed to request password reset');
      console.error('Forgot password error:', err);
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
            <h2>Reset Your Password</h2>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send Reset Link
              </button>
              <div className="back-to-login">
                <Link to="/login" className="back-link">Back to Login</Link>
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

export default ForgotPasswordPage;
