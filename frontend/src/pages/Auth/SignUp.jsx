import React from 'react';
import './SignUp.css';

export default function SignUp() {
  return (
    <div className="signup-page">
      
      {/* Left Branding Panel */}
      <div className="signup-left">
        <div className="brand-content">
          <a href="/" className="signup-logo">
            Rails<span className="logo-dot">.</span>
          </a>
          <h1 className="brand-title">
            Workforce Management
          </h1>
          <p className="brand-description">
            "Manage employees, payroll, and approvals from one secure platform."
          </p>
        </div>
      </div>

      {/* Right Form Container */}
      <div className="signup-right">
        <div className="form-wrapper">
          
          <div className="form-header">
            <h2>Create Company</h2>
            <p>Set up your organization workspace to get started.</p>
          </div>

          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input 
                type="text" 
                id="companyName" 
                placeholder="e.g. Acme Corp" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyEmail">Company Email</label>
              <input 
                type="email" 
                id="companyEmail" 
                placeholder="admin@company.com" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input 
                type="tel" 
                id="phoneNumber" 
                placeholder="+234 800 000 0000" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="••••••••" 
              />
            </div>

            <button type="submit" className="submit-button">
              Create Company
            </button>

          </form>

          <p className="form-footer-text">
            Already have an account? <a href="#signin">Sign In</a>
          </p>

        </div>
      </div>

    </div>
  );
}