import React from 'react';

const WithAuthentication = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated, ...otherProps } = props;

    if (!isAuthenticated) {
      return (
        <div className="auth-message">
          <h2>Authentication Required</h2>
          <p>You must be logged in to view this content.</p>
        </div>
      );
    }

    return <WrappedComponent {...otherProps} />;
  };
};

export default WithAuthentication;
