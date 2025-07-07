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
    <div className="contact-page bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Connect with Smart Choice</h1>
          <p className="contact-subtitle">Your trusted partner in property solutions.</p>
        </div>
      </section>
      <section className="contact-container max-w-6xl mx-auto px-6 py-12">
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="contact-info bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="contact-heading">Contact Details</h2>
            <div className="space-y-6 mt-6">
              <p className="contact-detail flex items-center">
                <Mail className="contact-icon text-green-300 w-6 h-6 mr-4 animate-pulse-slow" />
                <span>smartchoicerentalmanagement@gmail.com</span>
              </p>
              <p className="contact-detail flex items-center">
                <Phone className="contact-icon text-green-300 w-6 h-6 mr-4 animate-pulse-slow" />
                <span>+254 011 764-9850</span>
              </p>
              <p className="contact-detail flex items-center">
                <MapPin className="contact-icon text-green-300 w-6 h-6 mr-4 animate-pulse-slow" />
                <span>Kutus, Kenya</span>
              </p>
            </div>
            <div className="mt-8">
              <h3 className="contact-subheading">Office Hours</h3>
              <p className="contact-text">Monday - Friday: 8:00 AM - 5:00 PM EAT</p>
              <p className="contact-text">Saturday: 9:00 AM - 1:00 PM EAT</p>
            </div>
          </div>
          <div className="contact-form bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="contact-heading">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div>
                <label htmlFor="name" className="contact-label block text-sm font-medium text-gray-700">
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
              <div>
                <label htmlFor="email" className="contact-label block text-sm font-medium text-gray-700">
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
              <div>
                <label htmlFor="message" className="contact-label block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message here"
                  className="contact-input h-32 resize-none"
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
                    <Send size={18} className="mr-2 animate-bounce" aria-hidden="true" />
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