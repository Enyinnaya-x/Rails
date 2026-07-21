import React from "react";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-card-icon-wrapper">
        <Icon className="feature-card-icon" size={24} strokeWidth={2} />
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
      
    </div>
  );
}