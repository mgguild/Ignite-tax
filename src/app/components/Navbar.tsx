"use client"
import React, { useState } from 'react';
import Image from "next/image"

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  return (
    <nav className="bg-[#161616] fixed w-full z-10 top-0">
      <div className="w-full flex justify-center bg-[#161616] py-6 border-b border-gray-600">
        <div className="w-[90%] max-w-6xl flex items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <a href="/" className="text-black" onClick={closeNavbar}>
              <Image src="/logo/Ignite-Tax-Ai-4.png" alt="logo" width={50} height={40} />
            </a>
            <h1 className="hidden sm:block text-3xl font-bold whitespace-nowrap dark:text-pink-800"></h1>
          </div>
          {/* Navigation links - LEFT */}
          <div className="hidden md:flex items-center space-x-4 ml-8">
            <a href="#about_us" className="text-white font-medium hover:text-yellow-300 transition" onClick={closeNavbar}>
              About
            </a>
            <a href="#product" className="text-white font-medium hover:text-yellow-300 transition" onClick={closeNavbar}>
              Product
            </a>
            <a href="#resources" className="text-white font-medium hover:text-yellow-300 transition" onClick={closeNavbar}>
              Resources
            </a>
          </div>
          {/* Spacer */}
          <div className="flex-1" />
          {/* Sign In / Sign Out buttons on the right */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-8 py-2 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition font-medium">
              Sign In
            </button>
            <button className="px-8 py-2 rounded-full bg-[#eaff6a] text-black font-medium hover:bg-[#d4e85a] transition">
              Sign Up
            </button>
          </div>
          {/* Hamburger for mobile */}
          <div className="md:hidden ml-auto">
            <button className="inline-flex p-4 rounded-md text-yellow-300 md:text-black hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
              {isClick ? (
                <svg className="h-8 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden text-center">
          <div className="px-5 pt-5 pb-9 space-y-2">
            <a href="#" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              HOME
            </a> 
            <a href="#about_us" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              ABOUT
            </a>
            <a href="#product" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              PRODUCT
            </a>
            <a href="#resouces" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              RESOURCES
            </a>
            
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
