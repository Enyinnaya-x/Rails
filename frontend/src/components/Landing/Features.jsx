import React from "react";
import {
  Users,
  Wallet,
  MessageSquare,
  FileText,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import "./Features.css";

const featuresData = [
  {
    icon: Users,
    title: "Manage Employees",
    description: "Store employee records, departments, roles and contact information in one place.",
  },
  {
    icon: Wallet,
    title: "Payroll Processing",
    description: "Run payroll securely with multi-level approval workflows before payments are processed.",
  },
  {
    icon: MessageSquare,
    title: "Bulk Messaging",
    description: "Send company-wide emails and SMS updates to employees in just a few clicks.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Upload PDFs, DOCX files and spreadsheets for secure access across your organization.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Track workforce insights, payroll history and operational performance with visual reports.",
  },
  {
    icon: ShieldCheck,
    title: "Approval Workflow",
    description: "Create structured approval processes for payroll and other business operations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        
        <div className="features-header">
          <span className="features-badge">FEATURES</span>
          <h2 className="features-heading">
            Everything you need <br />
            to manage your workforce.
          </h2>
          <p className="features-supporting-text">
            From onboarding new employees to approving payroll and managing company documents, 
            Rails keeps your operations in one secure workspace.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
}

