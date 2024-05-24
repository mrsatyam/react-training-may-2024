import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Blog from './components/Blog';
import Product from './components/Product';
import Error from './components/Error';
import AuthenticatedUserProfile from './components/AuthenticatedUserProfile';

const App = () => {
  const isAuthenticated = true;

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/:id" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<Blog />} />
          <Route path="/userProfile" element={<AuthenticatedUserProfile isAuthenticated={isAuthenticated} user={user} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
