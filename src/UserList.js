import React, { useState, useEffect } from 'react';
import './UserList.css';

const UserList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delayTimer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(delayTimer);
  }, []);

  const users = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com'
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com'
    },
    {
      id: 3,
      name: 'Charlie',
      email: 'charlie@example.com'
    },
    {
      id: 4,
      name: 'David',
      email: 'david@example.com'
    },
  ];

  return (
    <div className="user-list-container">
    <h1>User Component:</h1>
      {isLoading ? (
        <div className="loader-container">
          <p>Loading users details. Please wait...</p>
          <div className="loader"></div>
        </div>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
