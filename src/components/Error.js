import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Error.css';

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default Error;
