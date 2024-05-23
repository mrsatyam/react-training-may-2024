import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Product from './Product';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Check out the list of dishes available at Foodify </p>

      <ul>
        <li>
          <Link to="/about/1">Burgers</Link>
        </li>
        <li>
          <Link to="/about/2">Wraps</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
