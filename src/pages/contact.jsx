import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      {/* Intro Text */}
      <p className="text-gray-600 text-center mb-8">
        Have questions or need assistance? Feel free to reach out to us. We're here to help!
      </p>

      {/* Contact Form */}
      <form className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your name" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input 
            type="email" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your email" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            rows="5" 
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-medium py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">📍 Contact Information</h2>
        <p className="text-gray-600">📧 Email: support@example.com</p>
        <p className="text-gray-600">📞 Phone: +91 8799845187</p>
        <p className="text-gray-600">📍 Address: Pune, India</p>
      </div>
    </div>
  );
};

export default Contact;
