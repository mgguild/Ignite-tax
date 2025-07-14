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
            <a
              href="#about_us"
              className="text-white font-medium hover:text-yellow-300 transition relative group"
              onClick={closeNavbar}
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#product"
              className="text-white font-medium hover:text-yellow-300 transition relative group"
              onClick={closeNavbar}
            >
              Product
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#resources"
              className="text-white font-medium hover:text-yellow-300 transition relative group"
              onClick={closeNavbar}
            >
              Resources
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          {/* Spacer */}
          <div className="flex-1" />
          {/* Sign In / Sign Up buttons on the right */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
              className="px-8 py-2 rounded-full border border-white text-white bg-transparent hover:bg-yellow-300 hover:text-black transition font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
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
          <div className="px-6 pt-6 pb-10 space-y-4">
            <a href="#" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              HOME
            </a> 
            <a href="#about_us" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              ABOUT
            </a>
            <a href="#product" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              PRODUCT
            </a>
            <a href="#resources" className="text-white font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              RESOURCES
            </a>
            <div className="flex-1" />
            <a
              href="https://app--taxai-pro-b398ec5f.base44.app/login?from_url=https://app--taxai-pro-b398ec5f.base44.app/?fbclid=IwY2xjawLFrn1leHRuA2FlbQIxMABicmlkETFwUGtEQTg4ODNneGxmZ25YAR59fEuWqOkGaKjxJJxi_3tQzbpsqbKzqu2sMwuoxnYdeCAKh_cC7v2hAMJCLg_aem_lwuzbSe-zbWyVLFPt8p6jg&app_id=6856685cef268de0b398ec5f"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-1 rounded-full border border-white text-white bg-transparent hover:bg-yellow-300 hover:text-black transition font-medium"
              onClick={closeNavbar}
            >
              SIGN IN
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
