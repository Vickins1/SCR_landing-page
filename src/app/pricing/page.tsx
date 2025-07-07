"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import "./page.css"; // Ensure custom styles are imported

export default function Pricing() {
  return (
    <div className="content bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen">
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1 className="pricing-title">Transparent Pricing Plans</h1>
          <p className="pricing-subtitle">Affordable solutions tailored to your property needs.</p>
        </div>
      </section>
      <section className="pricing-container max-w-6xl mx-auto px-6 py-12">
        <div className="pricing-plans grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="pricing-card bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-3 transition-all duration-300">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Basic Plan</h2>
            <p className="text-3xl font-bold text-green-300 mb-6">$99<span className="text-lg font-normal text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><CheckCircle className="text-green-300 w-5 h-5 mr-2" /> Tenant Screening</li>
              <li className="flex items-center"><CheckCircle className="text-green-300 w-5 h-5 mr-2" /> Rent Collection</li>
            </ul>
            <button className="pricing-button w-full">Get Started</button>
          </div>
          <div className="pricing-card bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-3 transition-all duration-300 recommended">
            <div className="pricing-recommended-badge">Recommended</div>
            <h2 className="text-xl font-bold text-blue-900 mb-4">Pro Plan</h2>
            <p className="text-3xl font-bold text-green-300 mb-6">$199<span className="text-lg font-normal text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><CheckCircle className="text-green-300 w-5 h-5 mr-2" /> All Basic Features</li>
              <li className="flex items-center"><CheckCircle className="text-green-300 w-5 h-5 mr-2" /> Maintenance Repairs</li>
              <li className="flex items-center"><CheckCircle className="text-green-300 w-5 h-5 mr-2" /> Financial Reporting</li>
            </ul>
            <button className="pricing-button w-full">Get Started</button>
          </div>
          <div className="pricing-card bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-3 transition-all duration-300">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Premium Plan</h2>
            <p className="text-3xl font-bold text-green-300 mb-6">$299<span className="text-lg font-normal text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><CheckCircle className="text-green-300 w-5 h-5 mr-2" /> All Pro Features</li>
              <li className="flex items-center"><CheckCircle className="text-green-300 w-5 h-5 mr-2" /> Legal Compliance</li>
              <li className="flex items-center"><CheckCircle className="text-green-300 w-5 h-5 mr-2" /> 24/7 Support</li>
            </ul>
            <button className="pricing-button w-full">Get Started</button>
          </div>
        </div>
        <div className="pricing-comparison mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Plan Comparison</h2>
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">Basic</th>
                <th className="p-4 text-center">Pro</th>
                <th className="p-4 text-center">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-t">Tenant Screening</td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 border-t">Rent Collection</td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 border-t">Maintenance Repairs</td>
                <td className="p-4 border-t text-center"></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 border-t">Financial Reporting</td>
                <td className="p-4 border-t text-center"></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 border-t">Legal Compliance</td>
                <td className="p-4 border-t text-center"></td>
                <td className="p-4 border-t text-center"></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 border-t">24/7 Support</td>
                <td className="p-4 border-t text-center"></td>
                <td className="p-4 border-t text-center"></td>
                <td className="p-4 border-t text-center"><CheckCircle className="text-green-300 w-5 h-5 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}