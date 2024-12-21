import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import imageprofile from '../assets/Profile/1.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="/logo.png" alt="Streaming App Logo" /> */}
        <span>Logo</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        {/* <li><Link to="/series">Series</Link></li> */}
        <li><Link to="/newreleases">New Releases</Link></li>
        <li><Link to="/mylist">My List</Link></li>
      </ul>
      <div className="navbar-actions">
        <input type="text" placeholder="Search..." className="navbar-search"/>
        <button className="navbar-button login-button">Login</button>
        <button className="navbar-button vip-button">
          <FaCrown className="crown-icon" /> VIP
        </button>
        <img src={imageprofile} alt="Profile" className="profile-image" />
      </div>
    </nav>
  );
};

export default Navbar;
