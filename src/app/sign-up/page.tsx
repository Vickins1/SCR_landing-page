"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";
import "./page.css"; // Import specific styles for the SignUp page

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuccess(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(false);
      router.push("/sign-in");
    }, 2000);
  };

  return (
    <div className="auth-page bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      <section className="auth-hero">
        <div className="auth-hero-content">
          <h1 className="auth-title">Join Smart Choice</h1>
          <p className="auth-subtitle">Create your account to manage your properties effortlessly.</p>
        </div>
      </section>
      <section className="auth-container max-w-md w-full mx-auto p-6">
        <div className="auth-card bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg">
          <h2 className="auth-heading text-2xl font-bold text-blue-900 mb-6">Sign Up</h2>
          {success && (
            <div className="auth-success bg-green-100 text-green-800 p-3 rounded-lg mb-4 animate-fadeIn">
              Registration successful! Redirecting...
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="auth-input"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="auth-input"
                required
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="auth-input"
                required
              />
            </div>
            <button
              type="submit"
              className="auth-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing Up...
                </>
              ) : (
                <>
                  <UserPlus size={18} className="mr-2" /> Sign Up
                </>
              )}
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-900 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}