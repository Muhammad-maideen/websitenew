import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import background from '../assets/images/bg-2.jpg'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      setMessage(response.data.message); // Success message
      setShowSnackbar(true); // Show snackbar

      if (response.data.message === 'Login successful') {
        // Redirect to the Home page after a short delay
        setTimeout(() => {
          navigate('/home'); // Replace with the route to your Home page
        }, 2000); // Delay for 2 seconds
      } else {
        setTimeout(() => setShowSnackbar(false), 3000); // Hide the snackbar after 3 seconds
      }
    } catch (error) {
      setMessage(error.response?.data?.message || error.message); // Error message
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 3000); // Hide the snackbar after 3 seconds
    }
  };
  const navigate = useNavigate();
 

  return (
    <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      // backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,login')`,
      backgroundImage: `url('${background}')`,
    }}
  >
    <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-8 max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
        Welcome Back
      </h2>
      <p className="text-center text-gray-500 mb-6">Sign in to your account</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
        >
          Sign In
        </button>
      </form>
      <p className="text-center text-gray-500 mt-4 text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
  Sign up
</Link>
      </p>
    </div>
          {/* Custom Snackbar */}
          {showSnackbar && (
        <div className={
          
         message==="Login successful"?
         "fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-4 rounded-md shadow-md z-50":
         "fixed top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-2 px-4 rounded-md shadow-md z-50"
          
          }>
          {message}!
        </div>
      )}

  </div>
  );


  
};

export default Login;
