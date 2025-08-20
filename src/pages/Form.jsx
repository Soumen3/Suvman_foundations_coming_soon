import React, { useState } from 'react';

// Google Form Component
const Form = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
        >
          X
        </button>
        
        {/* Form header */}
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-6 text-white">
          <h3 className="text-2xl font-bold">Stay Connected with Suvman Foundation</h3>
          <p className="text-green-100 mt-2">Fill out this form to get updates about our upcoming initiatives</p>
        </div>
        
        {/* Embedded Google Form */}
        <div className="h-[600px] overflow-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScZOkwoopqcquBAfKV7VCj7KeSB6h4CM7BP5SbgYocDBvCNoA/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Suvman Foundation Contact Form"
            className="w-full"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Form