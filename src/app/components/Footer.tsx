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
          <button className="bg-black rounded-full px-10 py-5 text-[#eaff6a] text-xl font-normal shadow-lg hover:bg-[#222] transition">
            Schedule your free demo now!
          </button>
        </div>
      </div>

        <hr className="border-gray-400 mb-4" />
        <div className="text-center text-white text-base">
          Contact | Terms of Service | Privacy Policy | © IgniteTaxAI 2025
        </div>
     </footer>
    </>
  );
};

export default Footer;
