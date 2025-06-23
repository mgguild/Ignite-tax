import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0D0D0D] w-full px-4 py-6">
           {/* Demo Section */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-20 gap-8 mb-20 mx-auto max-w-6xl">
        {/* Left: Description and List */}
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-[#eaff6a] text-3xl font-bold mb-2 py-4">Soon...</h1>

          <p className="italic text-white text-xl text-center md:text-left mb-6">
            Experience firsthand how IgniteTaxAI can revolutionize your tax workflow. Request a demo today to:
          </p>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-start">
              <span className="text-green-400 text-2xl mr-3">✔️</span>
              Interactively explore our intuitive AI interface.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 text-2xl mr-3">✔️</span>
              Discover personalized features tailored to your business.
            </li>
            <li className="flex items-start">
              <span className="text-green-400 text-2xl mr-3">✔️</span>
              See real-time examples of how IgniteTaxAI enhances accuracy and efficiency.
            </li>
          </ul>
        </div>
        {/* Right: Call to Action Button */}
        <div className="flex-1 flex justify-center items-center">
          <button
            disabled
            className="bg-gray-900 rounded-full px-10 py-5 text-[#eaff6a] text-xl font-normal shadow-lg opacity-60 cursor-not-allowed"
            >
            Schedule your free demo now!
          </button>
          </div>
        </div>

        <hr className="border-gray-400 mb-4" />
        <div className="text-center text-white text-base space-x-2">
          <a href="mailto:ignitetaxai@gmail.com" className="hover:underline hover:text-[#eaff6a] transition">Contact</a>
          <span>|</span>
          <a href="#terms" className="hover:underline hover:text-[#eaff6a] transition">Terms of Service</a>
          <span>|</span>
          <a href="#privacy" className="hover:underline hover:text-[#eaff6a] transition">Privacy Policy</a>
          <span>|</span>
            © IgniteTaxAI 2025
        </div>
     </footer>
    </>
  );
};

export default Footer;
