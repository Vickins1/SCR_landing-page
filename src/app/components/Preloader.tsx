"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setHide(true), 600); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className={`preloader ${!loading ? "fade-out" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <Image
            src="/logo.png"
            alt="Smart Choice Logo"
            width={150} 
            height={150}
            className="preloader-logo"
            priority 
          />
        </div>
        <p className="preloader-text">Smart Choice Rental Management</p>
      </div>
    </div>
  );
};

export default Preloader;