
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Smart Choice Rental Management Limited.
          All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="lucide lucide-twitter" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="lucide lucide-instagram" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="lucide lucide-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}
