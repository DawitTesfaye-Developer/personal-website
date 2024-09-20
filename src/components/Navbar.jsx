import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'auto');

  const applyTheme = (theme) => {
    if (theme === 'auto') {
      const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(systemDarkMode ? 'dark-theme' : 'light-theme');
    } else {
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(`${theme}-theme`);
    }
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const getThemeIcon = () => {
    if (theme === 'light') {
      return <i className="fas fa-moon"></i>; // Moon icon for light theme
    } else if (theme === 'dark') {
      return <i className="fas fa-sun"></i>; // Sun icon for dark theme
    } else {
      return <i className="fas fa-adjust"></i>; // Adjust icon for auto theme
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src='./assets/T.png' alt='logo' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#TopSkills">Top Skills</a>
            </li>

            {/* Dropdown for theme selection */}
            <li className="nav-item dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="themeDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {getThemeIcon()} {/* Display the theme icon */}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="themeDropdown">
                <li>
                  <button className="dropdown-item" onClick={() => setTheme('light')}>
                    <i className="fas fa-moon"></i> Light
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => setTheme('dark')}>
                    <i className="fas fa-sun"></i> Dark
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => setTheme('auto')}>
                    <i className="fas fa-adjust"></i> Auto
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
