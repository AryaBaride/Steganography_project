import React from "react";

const Contact = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-5xl w-full flex flex-col md:flex-row bg-black rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Side - Contact Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 bg-gray-800 rounded" />
            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 rounded" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 bg-gray-800 rounded"></textarea>
            <button className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </div>

        {/* Right Side - Static Map Image */}
        <div className="md:w-1/2">
          <img
            src="https://i.pinimg.com/originals/21/e7/c9/21e7c96aca661ace178a90cf0d09a468.png"  // Replace with an actual map image URL
            alt="Map Location"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;
