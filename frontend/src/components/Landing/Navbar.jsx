import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="rails-navbar">
      <div className="nav-container">
        
        {/* Elegant Minimalist Logo */}
        <div className="nav-logo">
          <span className="logo-marker">◈</span>
          <span className="logo-text">Rails</span>
        </div>

        {/* Clean, Numberless Navigation Links */}
        <div className={`nav-menu ${isOpen ? 'is-active' : ''}`}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          
          {/* Mobile Primary Action */}
          <div className="mobile-cta-wrapper">
            <Link to="/signup" className="btn-register">
              Register Company
            </Link>
          </div>
        </div>

        {/* Desktop Interface Controls */}
        <div className="nav-actions">
          {/* <Link to="/login" className="link-signin">
            Sign In
          </Link> */}

          <Link to="/signup" className="btn-register">
            Register Company
          </Link>
        </div>

        {/* Modern Minimal Toggle Button */}
        <button 
          className={`nav-toggle-burger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

      </div>
    </nav>
  );
}