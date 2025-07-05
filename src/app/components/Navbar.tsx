
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Moon, Sun, Search } from "lucide-react";
import Image from "next/image"; // Import next/image for optimized images

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

  // Search handler
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.currentTarget.elements.namedItem("search") as HTMLInputElement).value;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
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
            href="/about"
            className="nav-link"
            onClick={() => handleNavigation("/about")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-info" />
            </span>
            About Us
          </a>
          <a
            href="/properties"
            className="nav-link"
            onClick={() => handleNavigation("/properties")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-home" />
            </span>
            Our Properties
          </a>
          <a
            href="/contact"
            className="nav-link"
            onClick={() => handleNavigation("/contact")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-mail" />
            </span>
            Contact
          </a>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Search properties..."
              aria-label="Search properties"
              className="search-input"
            />
            <button type="submit" className="search-btn" aria-label="Search">
              <Search size={20} />
            </button>
          </form>
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