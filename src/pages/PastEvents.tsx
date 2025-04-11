
import React from 'react';
import { Navigate } from 'react-router-dom';

const PastEvents = () => {
  // Redirect to the specific past event page instead of NotFound
  return <Navigate to="/past-events/llm-to-agentic-ai" />;
};

export default PastEvents;
