import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/logo.png';
import '../assets/header.css'

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="MindReader Logo" height="32px" />
        </Link>
        <div className="navbar-links">
          <div className="dropdown">
            <button className="dropbtn">Get Help</button>
            <div className="dropdown-content">
              <Link to="/questionnaire">Mental Health Test</Link>
              <Link to="/wiki">Learn More</Link>
            </div>
          </div>
          <Link to="/forum">Support Forum</Link>
          <Link to="#mission">Our Mission</Link>
          <Link to="/emergency">Find Help Now</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
