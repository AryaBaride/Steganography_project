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
          We help people to build incredible brands and superior products. Our
          perspective is to furnish outstanding captivating services.
        </p>
        <p className="text-gray-300 text-lg mt-4 leading-relaxed">
          Nullam gravida orci ac luctus molestie. Fusce finibus congue erat, non
          aliquam magna tincidunt at. Aenean lacinia arcu ex, sed pharetra nibh
          porta a. Curabitur vel consequat nibh, ac interdum nisl.
        </p>

        {/* Features Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Versatile Brand */}
          <div className="flex items-start space-x-4">
            <span className="text-blue-400 text-3xl">⚙️</span>
            <div>
              <h3 className="text-xl font-semibold text-white">Versatile Brand</h3>
              <p className="text-gray-300 text-base">
                We are crafting a digital method that subsists life across all mediums.
              </p>
            </div>
          </div>

          {/* Digital Agency */}
          <div className="flex items-start space-x-4">
            <span className="text-blue-400 text-3xl">🔥</span>
            <div>
              <h3 className="text-xl font-semibold text-white">Digital Agency</h3>
              <p className="text-gray-300 text-base">
                We believe in innovation by integrating primary with elaborate ideas.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
