import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>

      {/* Content with fade-in animation */}
      <motion.p
        className="text-gray-300 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Dataeasy. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
      </motion.p>

      {/* Section: Information We Collect */}
      <h2 className="text-2xl font-semibold mt-6 mb-3"> Information We Collect</h2>
      <motion.p
        className="text-gray-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        We collect personal information such as your name and email when you register on our site.
      </motion.p>

      {/* Section: How We Use Your Information */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
      <motion.ul
        className="list-disc list-inside text-gray-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <li>To provide and improve our services.</li>
        <li>To personalize your experience.</li>
        <li>To send updates, promotions, or important notices.</li>
      </motion.ul>

      {/* Section: Data Security */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Data Security</h2>
      <motion.p
        className="text-gray-300 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        We use security measures to protect your information.
      </motion.p>

      {/* Section: Contact Us */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
      <motion.p
        className="text-gray-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        If you have any questions about our Privacy Policy, contact us at{" "}
        <a href="mailto:support@dataeasy.com" className="text-blue-400 underline">
          support@dataeasy.com
        </a>.
      </motion.p>
    </div>
  );
};

export default PrivacyPolicy;
