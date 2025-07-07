"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import Link from "next/link";
import "./page.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    setSuccess(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(false);
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="auth-page bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      <section className="auth-hero">
        <div className="auth-hero-content">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Access your Smart Choice account securely.</p>
        </div>
      </section>
      <section className="auth-container max-w-md w-full mx-auto px-4 sm:px-6 py-8">
        <div className="auth-card">
          <h2 className="auth-heading">Sign In</h2>
          {success && (
            <div className="auth-success" role="alert">
              Login successful! Redirecting...
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
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
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="auth-input"
                required
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="auth-button"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing In...
                </>
              ) : (
                <>
                  <LogIn size={18} className="mr-2" aria-hidden="true" />
                  Sign In
                </>
              )}
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link href="/sign-up" className="text-blue-900 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}