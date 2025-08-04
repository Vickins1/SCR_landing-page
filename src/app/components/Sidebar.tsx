"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon, Compass, Wallet, LogIn, UserPlus, Info, Mail, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
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

  useEffect(() => {
    const menuToggle = menuToggleRef.current;
    const sidebar = sidebarRef.current;

    if (menuToggle && sidebar) {
      const handleToggle = () => {
        setIsSidebarOpen((prev) => {
          const newState = !prev;
          sidebar.classList.toggle("active", newState);
          menuToggle.setAttribute("aria-expanded", String(newState));
          if (newState) {
            const firstLink = sidebar.querySelector("a");
            if (firstLink) firstLink.focus();
          } else {
            menuToggle.focus();
          }
          return newState;
        });
      };

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          target instanceof HTMLElement &&
          !sidebar.contains(target) &&
          !menuToggle.contains(target)
        ) {
          setIsSidebarOpen(false);
          sidebar.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && isSidebarOpen) {
          setIsSidebarOpen(false);
          sidebar.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.focus();
        }
      };

      menuToggle.addEventListener("click", handleToggle);
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        menuToggle.removeEventListener("click", handleToggle);
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isSidebarOpen]);

  return (
    <>
      <button
        ref={menuToggleRef}
        className="menu-toggle mobile-menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isSidebarOpen}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        ref={sidebarRef}
        className="sidebar"
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        <div className="sidebar-content">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"
              alt="Smart Choice Rental Management Logo"
              width={130}
              height={70}
              className="logo-image"
              aria-hidden="true"
            />
          </Link>
          <Link href="/how-it-works" className="sidebar-link">
            <span className="icon" aria-hidden="true">
              <Compass size={20} />
            </span>
            How It Works
          </Link>
          <Link href="/https://app.smartchoicerentalmanagement.com/property-listings" className="sidebar-link">
            <span className="icon" aria-hidden="true">
              <Building2 size={20} />
            </span>
            Properties
          </Link>

          <Link href="/about" className="sidebar-link">
            <span className="icon" aria-hidden="true">
              <Info size={20} />
            </span>
            About Us
          </Link>
          <Link href="/pricing" className="sidebar-link">
            <span className="icon" aria-hidden="true">
              <Wallet size={20} />
            </span>
            Pricing
          </Link>
          <Link href="https://app.smartchoicerentalmanagement.com/" className="sidebar-link">
            <span className="icon" aria-hidden="true">
              <LogIn size={20} />
            </span>
            Sign In
          </Link>
          <Link href="https://app.smartchoicerentalmanagement.com/sign-up" className="sidebar-link">
            <span className="icon" aria-hidden="true">
              <UserPlus size={20} />
            </span>
            Sign Up
          </Link>
          <Link href="/contact-us" className="sidebar-link">
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
            <span className="toggle-label">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}