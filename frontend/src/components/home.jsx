import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/home-bg.jpg'; // Replace with your actual image path

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions like clearing local storage or session storage
    localStorage.removeItem('user'); // Example: Remove user data
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-8 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Welcome to Home!</h1>
        <p className="text-gray-500 mb-6">You are logged in successfully.</p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
