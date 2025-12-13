
// NotFound component displays a 404 error page with a link back to the homepage
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  // 404 error page layout
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center" aria-label="404 Not Found page">
    {/* Large 404 error code */}
    <h1 className="text-5xl font-bold text-lime-700 mb-6">404</h1>
    {/* Error message */}
    <p className="text-xl mb-4">Sorry, the page you are looking for does not exist.</p>
    {/* Link to return to the homepage */}
    <Link to="/" className="text-lime-700 underline hover:text-lime-900" aria-label="Back to homepage">Back to Home</Link>
  </div>
);

export default NotFound;
