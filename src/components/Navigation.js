import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
         <li className="nav-item">
           <Link to="/blog" className="nav-link">Blogs</Link>
         </li>
          <li className="nav-item">
            <Link to="/userProfile" className="nav-link">Profile</Link>
          </li>

      </ul>
    </nav>
  );
};

export default Navigation;
