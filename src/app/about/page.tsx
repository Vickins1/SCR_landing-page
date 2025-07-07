// File: src/app/about/page.tsx

import React from 'react';// Ensure global styles are imported
import './about.css'; // Import specific styles for the About page
export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Discover the story and services of Smart Choice Rental Management Limited.
          </p>
        </div>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <div>
            <p className="about-text">
              Smart Choice Rental Management Limited is a premier property management
              firm based in Kutus, Kenya. With a proven track record of excellence and
              professionalism, we provide end-to-end rental solutions to property
              owners and tenants, ensuring reliable returns and stress-free
              management. We specialize in the management of residential, commercial,
              and mixed-use properties, offering tailored services that fit.
            </p>
          </div>
          <img
            src="/placeholder-property.jpg" // Replace with actual image path
            alt="Sample Managed Property"
            className="about-image"
          />
        </div>
      </div>
      <div className="about-section">
        <h2>Mission</h2>
        <p className="about-text">
          To simplify property ownership and deliver exceptional rental
          experiences through service, technology, and trust.
        </p>
      </div>
      <div className="about-section">
        <h2>Vision</h2>
        <p className="about-text">
          To be the most reliable name in property management across Kenya.
        </p>
      </div>
      <div className="about-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card"><p>Rental Property Marketing & Tenant Acquisition</p></div>
          <div className="service-card"><p>Lease Agreement Management</p></div>
          <div className="service-card"><p>Tenant Screening & Onboarding</p></div>
          <div className="service-card"><p>Rent Collection & Monthly Statements</p></div>
          <div className="service-card"><p>Property Maintenance & 24/7 Repair Response</p></div>
          <div className="service-card"><p>Regular Property Inspections</p></div>
          <div className="service-card"><p>Owner Reporting & Updates</p></div>
        </div>
      </div>
      <div className="about-section">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <ul>
            <li><strong>Office:</strong> Kutus, Kenya</li>
            <li><strong>Phone:</strong> +254 011 764-9850</li>
            <li><strong>Email:</strong> smartchoicerentalmanagement@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}