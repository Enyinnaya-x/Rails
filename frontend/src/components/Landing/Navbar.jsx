import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="minimal-navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-brand">
          <span className="brand-dot">✦</span> Rails
        </div>

        {/* Desktop Navigation Links */}
        <div className={`nav-menu ${isOpen ? 'is-active' : ''}`}>
          <a href="#features" className="nav-item">Features</a>
          <a href="#how-it-works" className="nav-item">How It Works</a>
          <a href="#pricing" className="nav-item">Pricing</a>
          
          {/* Action Button inside menu for mobile view parity */}
          <div className="mobile-cta">
            <button className="btn-nav-primary">Register Company</button>
          </div>
        </div>

        {/* Right Side Call to Action (Desktop) */}
        <div className="nav-actions">
          <a href="#signin" className="nav-link-secondary">Sign In</a>
          <button className="btn-nav-primary">Register Company</button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`nav-toggle ${isOpen ? 'is-active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}
