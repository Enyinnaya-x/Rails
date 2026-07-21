import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="signin-page">
      
      {/* Left Branding Panel (Reused layout structure) */}
      <div className="signin-left">
        <div className="brand-content">
          <a href="/" className="signin-logo">
            Rails<span className="logo-dot">.</span>
          </a>
          <h1 className="brand-title">
            Workforce Management
          </h1>
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

          <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="form-group">
              <label htmlFor="companyEmail">Company Email</label>
              <input 
                type="email" 
                id="companyEmail" 
                placeholder="admin@company.com" 
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
              />
            </div>

            <button type="submit" className="submit-button">
              Sign In
            </button>

          </form>

          <p className="form-footer-text">
            Don't have an account? <a href="#signup">Create Company</a>
          </p>

        </div>
      </div>

    </div>
  );
}