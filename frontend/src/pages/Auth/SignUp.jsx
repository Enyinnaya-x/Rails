import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  location: "",
  staff_no: "",
  logo: null,
  description: "",
  full_name: "",
  admin_email: "",
  admin_phone: "",
  position: "",
  password: "",
  confirm_password: "",
});

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Signup data:", formData);
};

  return (
    <div className="signup-page">
      {/* Left Branding Panel */}
      <div className="signup-left">
        <div className="brand-content">
          <a href="/" className="signin-logo">
            Rails<span className="logo-dot">.</span>
          </a>
          <h1 className="brand-title">Workforce Management</h1>
          <p className="brand-description">
            Everything your company needs to manage people, payroll, and approvals.
          </p>
        </div>
      </div>

      {/* Right Form */}
      <div className="signup-right">
        <div className="form-wrapper">
          
          <div className="form-header">
            <h2>Create Account</h2>
            <p>Set up your organization and primary admin account.</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            
            {/* Section 1: Company Information */}
            <div className="section-title">
              <h3>Company Information</h3>
            </div>

            {/* Company Name & Email Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Company Name *</label>
                <input 
                  type="text"
                  id="name"
                  name= "name"
                  placeholder="e.g. Acme Corp"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Company Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="admin@company.com" 
                  value={formData.email}
                  onChange={handleChange}
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
                  name="phone"
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location / Address *</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location"
                  placeholder="Lagos, Nigeria" 
                  value={formData.location}
                  onChange={handleChange}
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
                name="staff_no"
                placeholder="e.g. 50" 
                min="1"
                value={formData.staff_no}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Company Logo Upload */}
            <div className="form-group">
              <label htmlFor="logo">Company Logo</label>
              <input
                type="file"
                id="logo"
                name="logo"
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

            <hr className="form-divider" />

            {/* Section 2: Admin Account Information */}
            <div className="section-title">
              <h3>Admin Account</h3>
            </div>

            {/* Admin Name & Email Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="admin_name">Full Name *</label>
                <input 
                  type="text"
                  id="admin_name"
                  name="full_name"
                  placeholder="John Doe"
                  value={formData.full_name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="admin_email">Admin Email *</label>
                <input 
                  type="email" 
                  id="admin_email" 
                  name="admin_email"
                  placeholder="johndoe@company.com" 
                  value={formData.admin_email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            {/* Admin Phone & Position Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="admin_phone">Phone Number *</label>
                <input 
                    type="tel" 
                    id="admin_phone"
                    name="admin_phone"
                    placeholder="+234 800 000 0000"
                    value={formData.admin_phone}
                    onChange={handleChange}
                    required
                  />
              </div>

              <div className="form-group">
                <label htmlFor="admin_position">Position / Role *</label>
                <input 
                  type="text" 
                  id="admin_position" 
                  name= "position"
                  placeholder="e.g. HR Manager / Founder" 
                  value={formData.position}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            {/* Admin Password & Confirmation Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  id="password"
                  name= "password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  minLength="8"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password *</label>
                <input
                  type="password"
                  id="confirm_password"
                  name= "confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  minLength="8"
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-button">
              Complete Setup
            </button>

          </form>

          <div className="link-signin">
            <Link to="/login">Already have an account? Sign in</Link>
          </div>

        </div>
      </div>
    </div>
  );
}