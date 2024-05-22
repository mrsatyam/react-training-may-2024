import React, { useState, useEffect } from 'react';
import UserList from './UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

const App = () => {

  return (
    <div className="App">
       <h1>App component:</h1>
      <Router>
              <Navigation/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
    </div>
  );
};


export default App;
