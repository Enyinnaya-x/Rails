

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Building,
  User,
  ShieldCheck,
  Edit2,
  Save,
  Key,
} from "lucide-react";
import "./Profile.css";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Victor",
    lastName: "Emmanuel",
    email: "victor@email.com",
    phone: "+234 800 000 0000",
    dob: "1994-05-18",
    gender: "Male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log("Profile updated:", formData);
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <div>
          <h1>Profile</h1>
          <p>Manage your personal information and account details.</p>
        </div>
      </div>

      {/* Main Profile Overview Hero Card */}
      <div className="profile-hero-card">
        <div className="profile-avatar-wrapper">
          <div className="profile-avatar">VE</div>
        </div>

        <div className="profile-hero-info">
          <h2>{`${formData.firstName} ${formData.lastName}`}</h2>
          <span className="profile-role">HR Administrator</span>

          <div className="profile-quick-meta">
            <div className="meta-item">
              <Mail size={16} />
              <span>{formData.email}</span>
            </div>
            <div className="meta-item">
              <Phone size={16} />
              <span>{formData.phone}</span>
            </div>
            <div className="meta-item">
              <Building size={16} />
              <span>Human Resources</span>
            </div>
            <div className="meta-item">
              <MapPin size={16} />
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>

        <div className="profile-hero-action">
          <button
            type="button"
            className="edit-profile-btn"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit2 size={16} />
            <span>{isEditing ? "Cancel Edit" : "Edit Profile"}</span>
          </button>
        </div>
      </div>

      {/* Two Column Grid Section */}
      <div className="profile-grid">
        {/* Personal Information Card */}
        <div className="profile-card">
          <div className="card-title-bar">
            <User size={20} className="card-icon" />
            <h3>Personal Information</h3>
          </div>

          <form onSubmit={handleSave}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {isEditing && (
              <div className="form-actions">
                <button type="submit" className="save-changes-btn">
                  <Save size={16} />
                  <span>Save Changes</span>
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Employment Information Card */}
        <div className="profile-card">
          <div className="card-title-bar">
            <Briefcase size={20} className="card-icon" />
            <h3>Employment Information</h3>
          </div>

          <div className="info-display-grid">
            <div className="info-item">
              <span className="info-label">Employee ID</span>
              <p className="info-value id-badge">RAILS-0001</p>
            </div>

            <div className="info-item">
              <span className="info-label">Position</span>
              <p className="info-value">HR Administrator</p>
            </div>

            <div className="info-item">
              <span className="info-label">Department</span>
              <p className="info-value">Human Resources</p>
            </div>

            <div className="info-item">
              <span className="info-label">Employment Type</span>
              <p className="info-value">Full-time</p>
            </div>

            <div className="info-item">
              <span className="info-label">Date Joined</span>
              <p className="info-value">01 Jan 2026</p>
            </div>

            <div className="info-item">
              <span className="info-label">Reporting Manager</span>
              <p className="info-value">—</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Section Card */}
      <div className="profile-card security-card">
        <div className="card-title-bar">
          <ShieldCheck size={20} className="card-icon" />
          <h3>Security</h3>
        </div>

        <div className="security-row">
          <div className="security-info">
            <div className="security-icon-bg">
              <Key size={18} />
            </div>
            <div>
              <strong>Password</strong>
              <p>Last changed 30 days ago</p>
            </div>
          </div>

          <button type="button" className="change-pwd-btn">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}