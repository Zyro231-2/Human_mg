import React from 'react';
import './Navbar.css';  // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-links">
          <li className="navbar-link">Home</li>
          <li className="navbar-link">About</li>
          <li className="navbar-link">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
