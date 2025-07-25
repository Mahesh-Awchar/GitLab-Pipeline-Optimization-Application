import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-9xl font-bold text-gray-200">404</div>
      <h1 className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</h1>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex space-x-4">
        <Link
          to="/"
          className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FC6D26] hover:bg-[#FCA326]"
        >
          <Home size={18} className="mr-2" />
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <ArrowLeft size={18} className="mr-2" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;