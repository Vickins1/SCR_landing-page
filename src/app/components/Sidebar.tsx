"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image"; // ✅ Added import for Image component

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
          <a href="/" onClick={() => handleNavigation("/")} aria-label="Home"></a>
          <Image
            src="/logo.png"
            alt="Smart Choice Rental Management Logo"
            width={130}
            height={70}
            className="logo-image"
            aria-hidden="true"
          />
          <a
            href="/how-it-works"
            className="sidebar-link"
            onClick={() => handleNavigation("/how-it-works")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-compass" />
            </span>
            How It Works
          </a>
          <a
            href="/features"
            className="sidebar-link"
            onClick={() => handleNavigation("/features")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-sparkles" />
            </span>
            Features
          </a>
          <a
            href="/pricing"
            className="sidebar-link"
            onClick={() => handleNavigation("/pricing")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-wallet" />
            </span>
            Pricing
          </a>
          <a
            href="/sign-in"
            className="sidebar-link"
            onClick={() => handleNavigation("/sign-in")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-log-in" />
            </span>
            Sign In
          </a>
          <a
            href="/sign-up"
            className="sidebar-link"
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
            <span className="toggle-label">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}