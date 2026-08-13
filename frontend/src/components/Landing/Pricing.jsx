import React from "react";
import { Check } from "lucide-react";
import "./Pricing.css";

const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams getting started with better workforce management.",
    price: "₦25,000",
    period: "/month",
    features: [
      "Up to 25 employees",
      "Employee management",
      "Basic payroll management",
      "Leave management",
      "Basic reports",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    description: "For growing companies that need more control and automation.",
    price: "₦60,000",
    period: "/month",
    features: [
      "Up to 100 employees",
      "Everything in Starter",
      "Payroll approval workflows",
      "Bulk email messaging",
      "Bulk SMS messaging",
      "Advanced reports & analytics",
    ],
    button: "Start with Business",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with larger teams and more complex needs.",
    price: "Custom",
    period: "",
    features: [
      "100+ employees",
      "Everything in Business",
      "Advanced approval workflows",
      "Custom reporting",
      "Dedicated support",
      "Custom integrations",
    ],
    button: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        {/* Header Section */}
        <div className="pricing-header">
          <span className="pricing-badge">PRICING</span>

          <h2 className="pricing-heading">
            Simple pricing for growing companies.
          </h2>

          <p className="pricing-subtext">
            Choose a plan that fits your company today and scale as your workforce grows.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${
                plan.popular ? "pricing-card-popular" : ""
              }`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>

              <div className="pricing-price">
                <span className="price">{plan.price}</span>
                {plan.period && (
                  <span className="price-period">{plan.period}</span>
                )}
              </div>

              <button className="pricing-button">{plan.button}</button>

              <div className="pricing-divider"></div>

              <p className="features-title">Includes:</p>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} strokeWidth={2.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}