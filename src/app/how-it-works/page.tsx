"use client";
import React from "react";
import { CheckCircle, FileText, Wrench, Shield } from "lucide-react";
import "./page.css"; // Import specific styles for the How It Works page

export default function HowItWorks() {
  return (
    <div className="how-it-works-page bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen">
      <section className="how-hero">
        <div className="how-hero-content">
          <h1 className="how-title">How Smart Choice Works</h1>
          <p className="how-subtitle">A seamless journey to effortless property management.</p>
        </div>
      </section>
      <section className="how-container max-w-6xl mx-auto px-6 py-12">
        <div className="how-process">
          <div className="how-progress-bar">
            <div className="how-progress" style={{ width: "100%" }}></div>
          </div>
          <div className="how-steps grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="how-step-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="how-icon text-green-300 w-10 h-10 mb-4" />
              <h3 className="how-step-title">Consultation</h3>
              <p className="how-step-text">Expert assessment by local professionals to understand your needs.</p>
            </div>
            <div className="how-step-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <FileText className="how-icon text-green-300 w-10 h-10 mb-4" />
              <h3 className="how-step-title">Screening & Leasing</h3>
              <p className="how-step-text">Thorough tenant screening and seamless lease management.</p>
            </div>
            <div className="how-step-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Wrench className="how-icon text-green-300 w-10 h-10 mb-4" />
              <h3 className="how-step-title">Maintenance</h3>
              <p className="how-step-text">Reliable repairs with 24/7 response using innovative technology.</p>
            </div>
            <div className="how-step-card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="how-icon text-green-300 w-10 h-10 mb-4" />
              <h3 className="how-step-title">Support</h3>
              <p className="how-step-text">Ongoing care and legal compliance for peace of mind.</p>
            </div>
          </div>
        </div>
        <div className="how-guide mt-12">
          <h2 className="how-guide-title text-2xl font-bold text-blue-900 mb-4 text-center">Interactive Guide</h2>
          <div className="how-guide-placeholder bg-gray-200 rounded-lg p-6 text-center relative overflow-hidden">
            <p className="text-gray-500">Interactive guide coming soon!</p>
            <div className="how-guide-overlay"></div>
          </div>
        </div>
      </section>
    </div>
  );
}