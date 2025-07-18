"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun, Compass, Wallet, LogIn, UserPlus, Info, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
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

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"
              alt="Smart Choice Rental Management Logo"
              width={130}
              height={70}
              className="logo-image"
            />
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/about" className="nav-link">
            <span className="icon" aria-hidden="true">
              <Info size={20} />
            </span>
            About Us
          </Link>
          <Link href="/how-it-works" className="nav-link">
            <span className="icon" aria-hidden="true">
              <Compass size={20} />
            </span>
            How It Works
          </Link>
          <Link href="/pricing" className="nav-link">
            <span className="icon" aria-hidden="true">
              <Wallet size={20} />
            </span>
            Pricing
          </Link>
          <Link href="https://app.smartchoicerentalmanagement.com/" className="nav-link">
            <span className="icon" aria-hidden="true">
              <LogIn size={20} />
            </span>
            Sign In
          </Link>
          <Link href="https://app.smartchoicerentalmanagement.com/" className="nav-link">
            <span className="icon" aria-hidden="true">
              <UserPlus size={20} />
            </span>
            Sign Up
          </Link>
          <Link href="/contact-us" className="nav-link">
            <span className="icon" aria-hidden="true">
              <Mail size={20} />
            </span>
            Contact Us
          </Link>
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