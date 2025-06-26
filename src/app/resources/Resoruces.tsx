"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const titles = [
  "How AI is Transforming Tax Preparation",
  "Understanding Philippine Tax Laws",
];

const Resources: React.FC = () => {
  const [displayed, setDisplayed] = useState(["", ""]);
  const [charIndexes, setCharIndexes] = useState([0, 0]);

  useEffect(() => {
    let done = true;
    const newDisplayed = [...displayed];
    const newCharIndexes = [...charIndexes];

    titles.forEach((title, idx) => {
      if (charIndexes[idx] < title.length) {
        newDisplayed[idx] += title[charIndexes[idx]];
        newCharIndexes[idx] += 1;
        done = false;
      }
    });

    if (!done) {
      const timeout = setTimeout(() => {
        setDisplayed(newDisplayed);
        setCharIndexes(newCharIndexes);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayed(["", ""]);
        setCharIndexes([0, 0]);
      }, 1500);
      return () => clearTimeout(pause);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, charIndexes]);

  return (
    <section id="resources" className="bg-[#232323] flex flex-col items-center py-0 relative overflow-hidden">
      {/* Top Torn Image */}
      <div className="w-full">
        <Image
          src="/backgrounds/Top.png"
          alt="Resources Top"
          width={1920}
          height={20}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center px-4 pb-24 relative ">
        <h2 className="text-4xl md:text-5xl text-white font-normal mb-2 pt-0">Resources</h2>
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full pt-20 px-4">
          {titles.map((title, idx) => (
            <h3
              key={idx}
              className="text-white text-3xl md:text-4xl text-center font-normal"
            >
              {displayed[idx]}
              <span className="animate-pulse">|</span>
            </h3>
          ))}
        </div>
      </div>

      {/* Bottom Torn Image */}
      <div className="w-full mt-0">
        <Image
          src="/backgrounds/bottom.png"
          alt="Resources Bottom"
          width={1920}
          height={50}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Resources;