import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-5xl font-bold text-lime-700 mb-6">404</h1>
    <p className="text-xl mb-4">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="text-lime-700 underline hover:text-lime-900">Back to Home</Link>
  </div>
);

export default NotFound;
