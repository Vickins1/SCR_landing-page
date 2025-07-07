"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Moon, Sun, Compass, Sparkles, Wallet, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  // Initialize isDarkMode with null to indicate "loading" state
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const router = useRouter();

  // Theme initialization
  useEffect(() => {
    // Only run on client side
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;
    
    setIsDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Theme toggle logic
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  // Navigation handler
  const handleNavigation = (href: string) => {
    router.push(href);
  };

  // Render nothing or a loading state until isDarkMode is determined
  if (isDarkMode === null) {
    return null; // Or a loading placeholder if desired
  }

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <a href="/" onClick={() => handleNavigation("/")} aria-label="Home">
            <Image
              src="/logo.png"
              alt="Smart Choice Rental Management Logo"
              width={130}
              height={70}
              className="logo-image"
            />
          </a>
        </div>
        <div className="nav-links">
          <a
            href="/how-it-works"
            className="nav-link"
            onClick={() => handleNavigation("/how-it-works")}
          >
            <span className="icon" aria-hidden="true">
              <Compass size={20} />
            </span>
            How It Works
          </a>
          <a
            href="/features"
            className="nav-link"
            onClick={() => handleNavigation("/features")}
          >
            <span className="icon" aria-hidden="true">
              <Sparkles size={20} />
            </span>
            Features
          </a>
          <a
            href="/pricing"
            className="nav-link"
            onClick={() => handleNavigation("/pricing")}
          >
            <span className="icon" aria-hidden="true">
              <Wallet size={20} />
            </span>
            Pricing
          </a>
          <a
            href="/sign-in"
            className="nav-link"
            onClick={() => handleNavigation("/sign-in")}
          >
            <span className="icon" aria-hidden="true">
              <LogIn size={20} />
            </span>
            Sign In
          </a>
          <a
            href="/sign-up"
            className="nav-link"
            onClick={() => handleNavigation("/sign-up")}
          >
            <span className="icon" aria-hidden="true">
              <UserPlus size={20} />
            </span>
            Sign Up
          </a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}