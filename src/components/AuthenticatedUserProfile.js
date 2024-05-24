import React from 'react';
import WithAuthentication from './WithAuthentication';
import UserProfile from './UserProfile';

const AuthenticatedUserProfile = WithAuthentication(UserProfile);

export default AuthenticatedUserProfile;
