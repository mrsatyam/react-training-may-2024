import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Product from './Product';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page.</p>

      <ul>
        <li>
          <Link to="/about/product1">Product 1</Link>
        </li>
        <li>
          <Link to="/about/product2">Product 2</Link>
        </li>
      </ul>
      <Routes>
              <Route path="/about/:id" component={Product} />
      </Routes>
    </div>
  );
};

export default About;
