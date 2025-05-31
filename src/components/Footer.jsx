// Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../components/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Dawit Tesfaye. All rights reserved.
        </p>
        <ul className="social-links">
          <li>
            <a
              href="https://linkedin.com/in/dawit-tesfaye-hatau-60a17b311"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="mailto:dawit6825@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
