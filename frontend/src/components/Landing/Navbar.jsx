import React, { useState } from 'react';
import './Navbar.css';

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
          <a href="#features" className="nav-link">Features</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          {/* Mobile Primary Action */}
          <div className="mobile-cta-wrapper">
            <button className="btn-register">Register Company</button>
          </div>
        </div>

        {/* Desktop Interface Controls */}
        <div className="nav-actions">
          <a href="#signin" className="link-signin">Sign In</a>
          <button className="btn-register">Register Company</button>
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