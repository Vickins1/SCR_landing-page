
"use client";
import React, { useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.querySelector(".back-to-top") as HTMLElement;
      if (window.scrollY > 300) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}