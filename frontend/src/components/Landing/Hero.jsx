import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="rails-hero">
      {/* Background ambient glow effect */}
      <div className="hero-glow-blob"></div>

      <div className="hero-container">
        
        {/* Left Column: Text Content & Actions */}
        <div className="hero-content">
          <div className="content-badge">
            Secure payroll . Employee management
          </div>
          
          <h1 className="hero-heading">
            Run your business from one intelligent platform
          </h1>
          
          <p className="hero-subtext">
            Manage employees, approve payroll, send bulk messages, organize company 
            records, and automate daily workflows—all from one secure platform.
          </p>

          <div className="hero-action-group">
            <button className="btn-primary-hero">Register Company</button>
            <button className="btn-secondary-hero">Book Demo</button>
          </div>

          {/* Scannable Trust Indicators */}
          <div className="hero-trust-indicators">
            <span className="trust-item">✔ Payroll approvals</span>
            <span className="trust-item">✔ Bulk messaging</span>
            <span className="trust-item">✔ Employee records</span>
          </div>
        </div>

        {/* Right Column: Premium Visual Interactive Interface */}
        <div className="hero-visual">
          <div className="interface-wrapper">
            
            {/* Main Dashboard Placeholder Container */}
            <div className="dashboard-main-container">
              {/* Subtle grid pattern inside */}
              <div className="dashboard-pattern"></div>
            </div>

            {/* Premium Floating Contextual Cards */}
            {/* Card 1: Employees */}
            <div className="floating-card card-employees float-animation-1">
              <div className="card-header">
                <span className="card-label">Employees</span>
                <span className="card-icon employees-icon">👤</span>
              </div>
              <div className="card-value">+24</div>
            </div>

            {/* Card 2: Payroll */}
            <div className="floating-card card-payroll float-animation-2">
              <div className="card-header">
                <span className="card-label">Payroll</span>
              </div>
              <div className="card-value status-approved">Approved ✓</div>
            </div>

            {/* Card 3: Messages */}
            <div className="floating-card card-messages float-animation-3">
              <div className="card-header">
                <span className="card-label">Messages</span>
                <span className="card-icon messages-icon">✉</span>
              </div>
              <div className="card-value">1,203 <span className="value-suffix">Sent</span></div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}