import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later you'll send the data to the backend here

    navigate("/dashboard");
  };

  return (
    <div className="signup-page">

      {/* Left Branding Panel */}
      <div className="signup-left">
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

      {/* Right Form */}
      <div className="signup-right">
        <div className="form-wrapper">

          <form
            className="signup-form"
            onSubmit={handleSubmit}
          >
            
            {/* Company Name & Email Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Company Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="e.g. Acme Corp" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Company Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="admin@company.com" 
                  required 
                />
              </div>
            </div>

            {/* Phone & Location Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+234 800 000 0000" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location / Address *</label>
                <input 
                  type="text" 
                  id="location" 
                  placeholder="Lagos, Nigeria" 
                  required 
                />
              </div>
            </div>

            {/* Staff Count */}
            <div className="form-group">
              <label htmlFor="staff_no">Number of Employees (Staff Count) *</label>
              <input 
                type="number" 
                id="staff_no" 
                placeholder="e.g. 50" 
                min="1"
                required 
              />
            </div>

            {/* Company Logo Upload */}
            <div className="form-group">
              <label htmlFor="logo">Company Logo</label>
              <input
                type="file"
                id="logo"
                accept="image/*"
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">Company Description</label>
              <textarea 
                id="description" 
                rows="3" 
                placeholder="Briefly describe your company operations..."
              />
            </div>

            <button type="submit" className="submit-button">
              Complete Setup
            </button>

          </form>

          <Link to="/login" className="link-signin">
            Sign In As Different User
          </Link>

        </div>
      </div>

    </div>
  );
}
