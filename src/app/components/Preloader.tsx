"use client";
import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false); // Controls DOM removal after fade

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Start fade-out
      setTimeout(() => setHide(true), 600); // Remove from DOM after fade
    }, 2000); // Adjust display duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className={`preloader ${!loading ? "fade-out" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <img src="/logo.png" alt="Smart Choice Logo" className="preloader-logo" />
        </div>
        <p className="preloader-text">Smart Choice Rental Management</p>
      </div>
    </div>
  );
};

export default Preloader;
