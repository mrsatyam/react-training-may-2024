import React, { useState, useEffect } from 'react';
import UserList from './UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Product from './components/Product';
import Blog from './components/Blog';
import Error from './components/Error';


const App = () => {

  return (
    <div className="App">
      <Router>
              <Navigation/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about/:id" element={<Product/>} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:postId" element={<Blog />} />
                <Route path="*" element={<Error />} />
              </Routes>
      </Router>
    </div>
  );
};


export default App;
