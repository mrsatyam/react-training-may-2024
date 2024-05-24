import React from 'react';
import '../css/UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
