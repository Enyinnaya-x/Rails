import React from 'react';
import { Users } from 'lucide-react';
import './Statcard.css';

export default function StatCard({
  title = "Total Employees",
  value = "207",
  trend = "3+",
  isPositive = true,
  icon: Icon = Users,
  variant = "blue"
  
})


{
  return (
    <div className="stat-card">
      {/* Top Header with Icon and Title */}
      <div className="stat-card-header">
        <div className={`stat-icon-wrapper ${variant}`}>
          {Icon && <Icon size={18} />}
        </div>
        <span className="stat-title">{title}</span>
      </div>

      {/* Bottom Content: Big Number + Trend SVG Sparkline */}
      <div className="stat-card-body">
        <span className="stat-value">{value}</span>

        <div className="stat-trend-container">
          {trend && (
            <span className={`stat-trend-text ${isPositive ? 'positive' : 'negative'}`}>
              {trend}
            </span>
          )}

          {/* Sparkline Graphic */}
          <svg className="sparkline-svg" viewBox="0 0 60 25" fill="none">
            {isPositive ? (
              <path
                d="M2 20 L15 17 L28 22 L42 10 L58 3"
                stroke="#4ADE80"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M2 3 L15 8 L28 5 L42 16 L58 22"
                stroke="#F87171"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}