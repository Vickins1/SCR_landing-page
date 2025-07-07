"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Moon, Sun } from "lucide-react"; // Removed unused Search import
import Image from "next/image";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  // Theme toggle initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
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

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Smart Choice Rental Management Logo"
            width={130}
            height={70}
            className="logo-image"
          />
        </div>
        <div className="nav-links">
          <a
            href="/how-it-works"
            className="nav-link"
            onClick={() => handleNavigation("/how-it-works")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-compass" />
            </span>
            How It Works
          </a>
          <a
            href="/features"
            className="nav-link"
            onClick={() => handleNavigation("/features")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-sparkles" />
            </span>
            Features
          </a>
          <a
            href="/pricing"
            className="nav-link"
            onClick={() => handleNavigation("/pricing")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-wallet" />
            </span>
            Pricing
          </a>
          <a
            href="/sign-in"
            className="nav-link"
            onClick={() => handleNavigation("/sign-in")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-log-in" />
            </span>
            Sign In
          </a>
          <a
            href="/sign-up"
            className="nav-link"
            onClick={() => handleNavigation("/sign-up")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-user-plus" />
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