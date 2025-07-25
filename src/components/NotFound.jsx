import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-extrabold text-teal-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <div>
        <Button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          Go back home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
