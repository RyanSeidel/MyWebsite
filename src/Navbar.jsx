// src/Navbar.jsx

import React from 'react';
import './Navbar.css'; // Import styles for the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">MyPortfolio</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;