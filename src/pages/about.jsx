import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

      {/* Intro Section */}
      <p className="text-gray-600 text-center mb-8">
        Welcome to <span className="font-semibold">Steganography Tool</span>, your trusted platform for securely encoding and decoding messages in media files. Our mission is to provide an intuitive and secure way to protect sensitive information using cutting-edge steganography techniques.
      </p>

      {/* Our Mission */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔍 Our Mission</h2>
        <p className="text-gray-600">
          We believe in digital privacy and secure communication. Our goal is to provide a seamless tool that allows users to hide messages within images and audio files while ensuring top-tier encryption.
        </p>
      </div>

      {/* What We Offer */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🚀 What We Offer</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Secure and reliable **image & audio steganography**</li>
          <li>User-friendly interface with quick encoding/decoding</li>
          <li>End-to-end encryption for data protection</li>
          <li>Open-source and continuously improving features</li>
        </ul>
      </div>

      {/* Our Vision */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🌍 Our Vision</h2>
        <p className="text-gray-600">
          We envision a future where digital privacy is easily accessible to everyone. By using **steganography**, we empower individuals to communicate securely without compromising usability.
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-2">📞 Get in Touch</h2>
        <p className="text-gray-600">
          Have questions or feedback? Reach out to us at{" "}
          <span className="font-medium">support@example.com</span>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
