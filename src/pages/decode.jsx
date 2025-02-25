import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Decode = () => {
  const [file, setFile] = useState(null);
  const [decodedMessage, setDecodedMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (selectedFile.type.startsWith("image/") || selectedFile.type.startsWith("audio/"))) {
      setFile(selectedFile);
      setError("");
    } else {
      setError("Please select an image or audio file.");
      setFile(null);
    }
  };

  const handleDecode = () => {
    if (!file) {
      setError("Please select a file to decode.");
      return;
    }

    console.log("Decoding file:", file);

    // Call decoding function here and update decodedMessage   // IMP
    setDecodedMessage("This is a sample decoded message.");
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full max-w-6xl px-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 
                     text-white py-2 px-6 rounded-lg shadow-lg backdrop-blur-md border border-gray-600 
                     transition-all duration-300 transform hover:scale-105"
        >
          ← Back to Home
        </button>
      </div>

      {/* Decode Section */}
      <div className="max-w-4xl w-full p-8 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col min-h-[350px] space-y-4">
        <div className="flex items-center gap-6 w-full">
          {/* File Upload */}
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-2">Select Encrypted Data</label>
            <input
              type="file"
              accept="image/*,audio/*"
              onChange={handleFileChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
            <p className = "text-sm font-medium text-gray-400 mt-2">
            ℹ️ Ensure you upload the exact media file used for encoding; otherwise, decoding may fail.
            </p>
            
          </div>

          {/* Decoded Message Output */}
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-2">Decoded Message</label>
            <textarea
              rows="10"
              value={decodedMessage}
              readOnly
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded resize-none"
              placeholder="Decoded message will appear here..."
            />
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

      {/* Decode Button */}
      <button
        onClick={handleDecode}
        className="mt-2 mb-2 bg-red-900 hover:bg-red-600 text-white py-2 px-6 rounded transition duration-200"
      >
        Decode Message
      </button>
    </div>
  );
};

export default Decode;
