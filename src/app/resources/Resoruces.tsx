"use client";
import React, { useState, useEffect } from "react";

const titles = [
  "How AI is Transforming Tax Preparation",
  "Understanding Philippine Tax Laws",
];

const Resources: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < titles[currentTitle].length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + titles[currentTitle][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentTitle < titles.length - 1) {
      // Pause before next title
      const pause = setTimeout(() => {
        setCurrentTitle((prev) => prev + 1);
        setDisplayed("");
        setCharIndex(0);
      }, 1200);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentTitle]);

  return (
    <section id="resources" className="bg-[#232323] flex flex-col items-center py-12">
      {/* Title and Subtitle */}
      <h2 className="text-4xl md:text-5xl text-white font-normal mb-2 pt-12">Resources</h2>
      <p className="italic text-white text-center mb-8 text-lg">
        Stay ahead in the world of taxation with IgniteTaxAI's rich resource library:
      </p>

      {/* Tax Updates */}
      <div className="mb-10 flex flex-col items-center">
        <span className="text-[#eaff6a] font-medium text-lg">
          Tax Updates:
        </span>
        <span className="text-white text-base ml-2">
          Stay current with the latest BIR rulings, tax circulars, and regulatory changes.
        </span>
      </div>

      {/* Blog Highlight */}
      <div className="w-full max-w-4xl flex flex-col items-center ">
        <div className="w-full bg-[#444] bg-opacity-60 border-8 border-[#393939] flex items-center px-8 py-6 mb-2">
          <span className="text-white text-5xl font-normal mr-6">Blog&nbsp;&nbsp;|</span>
          <span className="text-[#eaff6a] text-base font-normal text-left">
            Insightful articles and expert analyses on Philippine tax trends, best practices, and AI applications in tax management.
          </span>
        </div>
      </div>

      {/* Blog Titles */}
      <div className="flex flex-col items-center gap-12 w-full">
        {titles.map((_, idx) => (
          <h3
            key={idx}
            className="text-white text-3xl md:text-4xl text-center font-normal"
          >
            {displayed}
            <span className="animate-pulse">|</span>
          </h3>
        ))}
      </div>

   
    </section>
  );
};

export default Resources;