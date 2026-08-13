import React from 'react';
import { Building2, UserCog, Briefcase } from 'lucide-react';
import './HowItWorks.css';

const stepsData = [
  {
    number: "①",
    icon: Building2,
    title: "Create Company",
    description: "Register your business and create your organization workspace in minutes."
  },
  {
    number: "②",
    icon: UserCog,
    title: "Invite HR Admin",
    description: "Assign an administrator who can manage employees, track records, and run payroll."
  },
  {
    number: "③",
    icon: Briefcase,
    title: "Start Managing",
    description: "Add employees, process payroll, send bulk messages, and access visual reports."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="how-container">
        
        {/* Unified typography header components */}
        <div className="section-header">
          <span className="section-badge">
            HOW IT WORKS
          </span>
          <h2 className="section-title">
            Get started in three simple steps.
          </h2>
          <p className="section-description">
            Setting up Rails takes only a few minutes.
          </p>
        </div>

        {/* Dynamic Process Steps Layout */}
        <div className="steps-grid">
          {stepsData.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div className="step-card" key={step.title}>
                <div className="step-card-header">
                  <span className="step-index-marker">{step.number}</span>
                  <div className="step-icon-frame">
                    <IconComponent className="step-lucide-icon" size={24} strokeWidth={2} />
                  </div>
                </div>
                
                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-description">{step.description}</p>
                
                {/* Visual connecting arrow indicator for desktop view (omitted on last item) */}
                {index < stepsData.length - 1 && (
                  <div className="step-flow-arrow" aria-hidden="true">→</div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}