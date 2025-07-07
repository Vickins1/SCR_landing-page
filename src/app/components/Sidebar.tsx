"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Sun, Moon, Compass, Wallet, LogIn, UserPlus, Info, Mail } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  // Sidebar toggle + accessibility handlers
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

  const handleNavigation = (href: string) => {
    setIsSidebarOpen(false);
    sidebarRef.current?.classList.remove("active");
    menuToggleRef.current?.setAttribute("aria-expanded", "false");
    router.push(href);
  };

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
          <a href="/" onClick={() => handleNavigation("/")} aria-label="Home">
            <Image
              src="/logo.png"
              alt="Smart Choice Rental Management Logo"
              width={130}
              height={70}
              className="logo-image"
              aria-hidden="true"
            />
          </a>
          <a
            href="/how-it-works"
            className="sidebar-link"
            onClick={() => handleNavigation("/how-it-works")}
          >
            <span className="icon" aria-hidden="true">
              <Compass size={20} />
            </span>
            How It Works
          </a>
          
          <a
            href="/about"
            className="sidebar-link"
            onClick={() => handleNavigation("/about")}
          >
            <span className="icon" aria-hidden="true">
              <Info size={20} />
            </span>
            About Us
          </a>
          <a
            href="/pricing"
            className="sidebar-link"
            onClick={() => handleNavigation("/pricing")}
          >
            <span className="icon" aria-hidden="true">
              <Wallet size={20} />
            </span>
            Pricing
          </a>
          <a
            href="/sign-in"
            className="sidebar-link"
            onClick={() => handleNavigation("/sign-in")}
          >
            <span className="icon" aria-hidden="true">
              <LogIn size={20} />
            </span>
            Sign In
          </a>
          <a
            href="/sign-up"
            className="sidebar-link"
            onClick={() => handleNavigation("/sign-up")}
          >
            <span className="icon" aria-hidden="true">
              <UserPlus size={20} />
            </span>
            Sign Up
          </a>
          <a
            href="/contact-us"
            className="sidebar-link"
            onClick={() => handleNavigation("/contact-us")}
          >
            <span className="icon" aria-hidden="true">
              <Mail size={20} />
            </span>
            Contact Us
          </a>
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