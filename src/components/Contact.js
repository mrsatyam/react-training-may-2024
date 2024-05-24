import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with us through Email: foodify@food.com </p>
      <button onClick={handleNavigate}>Go to Home</button>

    </div>
  );
};

export default Contact;
