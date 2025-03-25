
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import FAQSection from "@/components/ui/FAQSection"; // Import FAQ component


import {
  ShieldCheck,
  Lock,
  EyeOff,
  Globe,
  KeySquare,
  FileLock,
  SquareChartGantt,
  Camera,
  FileAudio2,
} from "lucide-react";




const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold lg:text-6xl sm:text-4xl  tracking-tighter py-4">
          "Secure Your Secrets with Cutting-Edge Steganography!"
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Protect your data with next-gen steganography tech.
        </p>
      </section>




    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {[
    {
      path: "/text-image",
      icon: <SquareChartGantt className="w-12 h-12 text-blue-500" />,
      title: "Text to Image",
      text: "Convert hidden text into an image by embedding data within image pixels using steganography.",
    },
    {
      path: "/image-image",
      icon: <Camera className="w-12 h-12 text-green-500" />,
      title: "Image to Image",
      text: "Hide one image inside another, making the embedded image undetectable while preserving visual integrity.",
    },
    {
      path: "/text-audio",
      icon: <FileAudio2 className="w-12 h-12 text-red-500" />,
      title: "Text to Audio",
      text: "Conceal secret messages within an audio file by modifying its sound waves, ensuring discreet communication.",
    },
  ].map((card, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="text-center" // Removed outer box styles
    >
      <NavLink to={card.path} className="flex flex-col items-center">
        {/* Boxed Icon */}
        <motion.div
          className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-xl shadow-md"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {card.icon}
        </motion.div>

        <h3 className="text-2xl font-bold mt-4 text-white">{card.title}</h3>
        <p className="text-gray-300 mt-2 max-w-xs">{card.text}</p>
      </NavLink>
    </motion.div>
  ))}
</div>





      {/* Information Section -> */}
      <section className="text-white py-14 px-6 mb-0 pb-0">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Steganography?
        </h2>

        


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <ShieldCheck className="w-12 h-12 mx-auto text-blue-500" />,
              title: "What is Steganography?",
              text: "Steganography hides data inside digital media files, making it invisible to unauthorized users.",
            },
            {
              icon: <EyeOff className="w-12 h-12 mx-auto text-green-500" />,
              title: "How It Works?",
              text: "Data is embedded into an image or audio file using algorithms, without changing its appearance.",
            },
            {
              icon: <Lock className="w-12 h-12 mx-auto text-red-500" />,
              title: "Why Use It?",
              text: "Unlike encryption, steganography makes secret communication undetectable, adding an extra security layer.",
            },
  
          ].map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center transition duration-300 hover:bg-[#3B3F54] hover:shadow-lg hover:-translate-y-1"
            >
              {card.icon}
              <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
              <p className="text-gray-300 mt-2">{card.text}</p>
            </div>
          ))}
        </div>
      </section>





      <FAQSection />
    </main>
  );
};

export default LandingPage;
