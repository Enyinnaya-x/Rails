import React from 'react';
import './Stats.css';

const statsData = [
  {
    number: "500+",
    label: "Companies",
  },
  {
    number: "15K+",
    label: "Employees Managed",
  },
  {
    number: "99.9%",
    label: "Platform Uptime",
  },
  {
    number: "24/7",
    label: "Customer Support",
  },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">

        <div className="stats-heading">
          <p>Trusted by growing businesses across Nigeria</p>
        </div>

        <div className="stats-grid">
          {statsData.map((item) => (
            <div className="stat-card" key={item.label}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}