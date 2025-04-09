
import React from 'react';
import { Navigate } from 'react-router-dom';

const PastEvents = () => {
  // This component simply redirects to the NotFound page
  return <Navigate to="/not-found" />;
};

export default PastEvents;
