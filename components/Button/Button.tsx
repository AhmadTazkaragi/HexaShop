"use client"; // This marks the component as a Client Component for interactivity

import React from 'react';

const Button = () => {
  const handleLogout = () => {
    // Prints logout to the browser console
    console.log("logout");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-800 hover:bg-red-600 text-white px-5 py-1.5 rounded-md transition-all text-sm font-medium cursor-pointer duration-150"
    >
      Logout
    </button>
  );
};

export default Button;