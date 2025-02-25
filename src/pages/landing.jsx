import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Globe,
  KeySquare,
  FileLock,
} from "lucide-react";
import faq from "@/data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="flex items-center justify-center gap-x-6">
        <NavLink to="/encode">
          <Button variant="blue" size="xl">
            Encode
          </Button>
        </NavLink>
        <NavLink to="/decode">
          <Button size="xl" variant="destructive">
            Decode
          </Button>
        </NavLink>
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
            {
              icon: <KeySquare className="w-12 h-12 mx-auto text-yellow-500" />,
              title: "Steganography vs Encryption",
              text: "Encryption scrambles data, while steganography hides it inside media files.",
            },
            {
              icon: <Globe className="w-12 h-12 mx-auto text-purple-500" />,
              title: "Real-World Uses",
              text: "Used in watermarking, digital rights protection, and secure communication.",
            },
            {
              icon: <FileLock className="w-12 h-12 mx-auto text-pink-500" />,
              title: "Future of Steganography",
              text: "AI-driven steganography enhances security, making hidden communication more sophisticated.",
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

      <div className="space-y-2" id = "faqs">
        <h2 className="text-3xl font-bold text-left">FAQs</h2>
        <Accordion type="single" collapsible>
          {faq.map((current, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{current.question}</AccordionTrigger>
              <AccordionContent>{current.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};

export default LandingPage;
