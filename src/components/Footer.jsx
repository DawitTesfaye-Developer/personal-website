// Footer.js
import React from 'react';
import '../components/css/Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Dawit Tesfaye. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://linkedin.com/in/dawit-tesfaye-hatau-60a17b311" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:dawit6825@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
