import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later you'll validate the login here
    navigate("/dashboard");
  };

  return (
    <div className="signin-page">
      {/* Left Branding Panel */}
      <div className="signin-left">
        <div className="brand-content">
          <Link to="/" className="signin-logo">
            Rails<span className="logo-dot">.</span>
          </Link>

          <h1 className="brand-title">Workforce Management</h1>

          <p className="brand-description">
            Everything your company needs to manage people, payroll, and approvals.
          </p>
        </div>
      </div>

      {/* Right Form Container */}
      <div className="signin-right">
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Welcome Back</h2>
            <p>Sign in to access your company dashboard.</p>
          </div>

          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="companyEmail">Company Email</label>
              <input
                type="email"
                id="companyEmail"
                placeholder="admin@company.com"
                required
              />
            </div>

            <div className="form-group">
              <div className="label-wrapper">
                <label htmlFor="password">Password</label>
                <a href="#forgot-password" className="forgot-link">
                  Forgot Password?
                </a>
              </div>

              <input
                type="password"
                id="password"
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Sign In
            </button>
          </form>

          <p className="form-footer-text">
            Don't have an account? <Link to="/signup">Create Company</Link>
          </p>
        </div>
      </div>
    </div>
  );
}