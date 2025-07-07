import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Smart Choice Rental Management Limited.
          All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/share/1Gb77VsVt1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@smartchoicerentalmanage?_t=ZM-8xpaVff2dHh&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          
        </div>
      </div>

      {/* Developer credit below */}
      <div className="developer-credit-wrapper">
        <p className="developer-credit">
          Developed by{" "}
          <a
            href="https://vickins-technologies.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vickins Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
