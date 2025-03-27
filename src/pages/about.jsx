import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-16 bg-gray-900">
      
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png" // Replace with actual image URL
          className="rounded-lg shadow-2xl w-full max-w-lg" // Increased image size
        />
      </div>

      {/* Right Side - About Us Content */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-16">
        <h2 className="text-4xl font-extrabold text-white">Who Are We?</h2>
        <p className="text-gray-300 text-lg mt-6 leading-relaxed">
        We specialize in developing cutting-edge steganographic techniques to embed secret messages within images, audio, or text files while maintaining their original appearance. 
        
        </p>
        <p className="text-gray-300 text-lg mt-4 leading-relaxed">
        Our mission is to provide a secure and innovative way to 
        conceal information within digital media, ensuring privacy and confidentiality in data exchange.
        </p>

        {/* Features Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Versatile Brand */}
          <div className="flex items-start space-x-4">
            <span className="text-blue-400 text-3xl">⚙️</span>
            <div>
              <h3 className="text-xl font-semibold text-white">Enhanced Security</h3>
              <p className="text-gray-300 text-base">
                 Prevents suspicion by making messages invisible.
              </p>
            </div>
          </div>

          {/* Digital Agency */}
          <div className="flex items-start space-x-4">
            <span className="text-blue-400 text-3xl">🔥</span>
            <div>
              <h3 className="text-xl font-semibold text-white">Privacy Protection</h3>
              <p className="text-gray-300 text-base">
              Ideal for secure messaging and preventing unauthorized access.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
