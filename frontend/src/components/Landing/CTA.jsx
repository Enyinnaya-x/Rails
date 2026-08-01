import React from 'react';
import './CTA.css';
import { useNavigate } from "react-router-dom";


const trustHighlights = [
  "Secure Onboarding",
  "Payroll Processing",
  "Employee Management",
  "Approval Workflows"
];

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-container">

        <span className="cta-badge">
          GET STARTED
        </span>

        <h2 className="cta-title">
          Ready to simplify your workforce management?
        </h2>

        <p className="cta-description">
          Register your company today and manage employees,
          payroll, approvals, and documents from one secure
          platform.
        </p>

        <div className="cta-action-block">
          <button
            className="cta-btn"
            onClick={() => navigate("/signup")}
          >
            Register Company
          </button>

          {/* Subtitle Value Reinforcers */}
          <div className="cta-trust-row">
            {trustHighlights.map((item) => (
              <span className="cta-trust-item" key={item}>
                <span className="check-icon">✓</span> {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}