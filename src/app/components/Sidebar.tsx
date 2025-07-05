
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

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
          <img
            src="/logo.png"
            alt="Smart Choice Rental Management Logo"
            className="logo-image"
            aria-hidden="true"
          />
          <a
            href="/about"
            className="sidebar-link"
            onClick={() => handleNavigation("/about")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-info" />
            </span>
            About Us
          </a>
          <a
            href="/properties"
            className="sidebar-link"
            onClick={() => handleNavigation("/properties")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-home" />
            </span>
            Our Properties
          </a>
          <a
            href="/contact"
            className="sidebar-link"
            onClick={() => handleNavigation("/contact")}
          >
            <span className="icon" aria-hidden="true">
              <i className="lucide lucide-mail" />
            </span>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}