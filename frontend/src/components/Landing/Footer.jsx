import React from 'react';
import './Footer.css';

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Help Center", href: "#help" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Section: Brand Info + Navigation Columns */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              Rails<span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Modern workforce management and payroll software for growing teams.
            </p>
          </div>

          <div className="footer-links-grid">
            {footerLinks.map((column) => (
              <div className="footer-column" key={column.title}>
                <h4 className="footer-column-title">{column.title}</h4>
                <ul className="footer-column-links">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright Notice */}
        <div className="footer-bottom">
          <p>© 2026 Rails. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}