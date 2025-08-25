"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./page.css";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you for your message! We will get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Get in Touch with Smart Choice</h1>
          <p className="contact-subtitle">Your trusted partner for seamless property management solutions.</p>
        </div>
      </section>
      <section className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-heading">Contact Information</h2>
            <div className="contact-details">
              <div className="contact-detail">
                <Mail className="contact-icon" />
                <span>smartchoicerentalmanagement@gmail.com</span>
              </div>
              <div className="contact-detail">
                <Phone className="contact-icon" />
                <span>+254 117 649 850 / +254 702 036 837</span>
              </div>
              <div className="contact-detail">
                <MapPin className="contact-icon" />
                <span>Kerugoya, Kenya</span>
              </div>
            </div>
            <div className="office-hours">
              <h3 className="contact-subheading">Office Hours</h3>
              <p className="contact-text">Monday - Friday: 8:00 AM - 5:00 PM EAT</p>
              <p className="contact-text">Saturday: 9:00 AM - 1:00 PM EAT</p>
            </div>
          </div>
          <div className="contact-form">
            <h2 className="contact-heading">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="form-grid">
              <div className="form-group">
                <label htmlFor="name" className="contact-label">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="contact-input"
                  required
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="contact-label">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="contact-input"
                  required
                  aria-required="true"
                />
              </div>
              <div className="form-group form-group-full">
                <label htmlFor="message" className="contact-label">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message here"
                  className="contact-input contact-textarea"
                  required
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                className="contact-button"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-label="Send message"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}