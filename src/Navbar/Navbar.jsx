import React from 'react';
import './Navbar.css'; // We'll create this file for styling next

function Navbar() {
  return (
    <nav className="navbar">
      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;