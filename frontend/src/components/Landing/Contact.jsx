import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      company: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Column: Info & Details */}
        <div className="contact-info">
          <span className="contact-badge">CONTACT US</span>

          <h2>
            Let's talk about
            <br />
            your workforce.
          </h2>

          <p className="contact-description">
            Have questions about Rails or want to see how it can help your
            company manage employees more efficiently? Send us a message and
            we'll get back to you.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">
                <Mail size={20} strokeWidth={2.2} />
              </div>
              <div>
                <span>Email</span>
                <p>info@rails.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Phone size={20} strokeWidth={2.2} />
              </div>
              <div>
                <span>Phone</span>
                <p>+234 800 000 0000</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={20} strokeWidth={2.2} />
              </div>
              <div>
                <span>Location</span>
                <p>PortHarcourt, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="contact-success">
              <div className="success-icon">✓</div>
              <h3>Message sent</h3>
              <p>
                Thanks for reaching out. We'll get back to you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="contact-reset-button"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}