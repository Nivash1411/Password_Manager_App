import React, { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Lock } from "@mui/icons-material"; // Adding an icon for visual appeal

const Welcome = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/home");

  return (
    
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white animate-gradient"
          : "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-gray-900 animate-gradient"
      }`}
      
    >
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 10s ease infinite;
          }
        `}
      </style>
      
      <div className="bg-white dark:bg-gray-800 text-center p-10 rounded-xl shadow-2xl max-w-md mx-auto relative">
        
        {/* Icon */}
        <Lock fontSize="large" className="text-blue-500 dark:text-teal-400 mb-4" />

        {/* Title with Gradient Text */}
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Password Manager
        </motion.h1>

        {/* Animated Divider */}
        <motion.div
          className="h-1 w-16 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>

        {/* Description */}
        <motion.p
          className="text-lg mb-6 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Securely store and manage your passwords with ease. A simple, safe, and sleek password manager.
        </motion.p>

        {/* Theme Switcher */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <span className="text-lg font-medium mr-2 text-gray-700 dark:text-gray-200">
            Switch Theme
          </span>
          <Switch checked={isDarkMode} onChange={toggleTheme} color="primary" />
        </motion.div>

        {/* Get Started Button with Glow Effect */}
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          onClick={handleGetStarted}
        >
          Get Started
        </motion.button>
      </div>
      
    </div>
  );
};

export default Welcome;
