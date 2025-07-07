"use client";
import React from "react";
import Image from "next/image"; // Use next/image for optimized images
import "./about.css"; // Import specific styles for the About page

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About Smart Choice</h1>
          <p className="about-subtitle">
            Discover the legacy and expertise of Smart Choice Rental Management.
          </p>
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-title">Our Story</h2>
        <div className="about-content flex flex-col lg:flex-row gap-8 items-center">
          <div className="about-text-container">
            <p className="about-text">
              Smart Choice Rental Management Limited, headquartered in Kerugoya, Kenya, is a premier property management firm with a proven track record of excellence. We deliver end-to-end rental solutions for residential, commercial, and mixed-use properties, ensuring reliable returns and stress-free management through professional expertise and innovative technology.
            </p>
          </div>
          <div className="about-image-container">
            <Image
              src="/property.png"
              alt="Managed Property Example"
              width={500}
              height={300}
              className="about-image rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="about-text">
          To simplify property ownership and deliver exceptional rental experiences through dedicated service, cutting-edge technology, and unwavering trust.
        </p>
      </section>
      <section className="about-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="about-text">
          To establish ourselves as the most reliable property management leader across Kenya, setting new standards in client care and operational excellence.
        </p>
      </section>
      <section className="about-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="service-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="service-text">Rental Property Marketing & Tenant Acquisition</p>
          </div>
          <div className="service-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="service-text">Lease Agreement Management</p>
          </div>
          <div className="service-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="service-text">Tenant Screening & Onboarding</p>
          </div>
          <div className="service-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="service-text">Rent Collection & Monthly Statements</p>
          </div>
          <div className="service-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="service-text">Property Maintenance & 24/7 Repair Response</p>
          </div>
          <div className="service-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="service-text">Regular Property Inspections</p>
          </div>
          <div className="service-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="service-text">Owner Reporting & Updates</p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-title">Contact Information</h2>
        <div className="contact-info bg-white p-6 rounded-xl shadow-lg">
          <ul className="space-y-3">
            <li className="contact-item"><strong>Office:</strong> Kerugoya, Kenya</li>
            <li className="contact-item"><strong>Phone:</strong> +254 117 649-850 Or +254 702 036-837</li>
            <li className="contact-item"><strong>Email:</strong> smartchoicerentalmanagement@gmail.com</li>
          </ul>
        </div>
      </section>
    </div>
  );
}