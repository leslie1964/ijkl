import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          {/* Left Section - Address */}
          <div className="mb-4 md:mb-0 text-gray-700 text-sm">
            <p>115 S.Grant St</p>
            <p>Fitzgerald, GA 31750</p>
            <p>800-873-6404</p>
          </div>
          
          {/* Middle Section - Navigation */}
          <div className="mb-4 md:mb-0 flex flex-col items-start">
            <a href="https://colony.bank/" className="mb-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="https://digitalbanking.colony.bank/mobile" className="mb-2 text-gray-700 hover:text-gray-900">Mobile</a>
            <a href="https://digitalbanking.colony.bank" className="mb-2 text-gray-700 hover:text-gray-900">Browser Support</a>
            <a href="https://colony.bank/about-us/contact-us" className="mb-2 text-gray-700 hover:text-gray-900">Contact Us</a>
            <a href="https://colony.bank/privacy" className="mb-2 text-gray-700 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="mb-2 text-gray-700 hover:text-gray-900">Get CoBrowsing Code</a>
          </div>
          
          {/* Right Section - NMLS and FDIC info */}
          <div className="mb-4 md:mb-0">
            <div className="text-right text-sm text-gray-700 mb-3">
              <p>NMLS number: 408873</p>
              <p>Routing number: 061202672</p>
            </div>
            <div className="flex justify-end mb-4">
              <div className="flex flex-col items-center">
                <p className="text-xs text-gray-600 mb-1">Member</p>
                <p className="font-bold text-xl">FDIC</p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <a href="#" className="block">
                <Image src={"/public/assets/google-play.png"} width={280}
              height={80} alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="#" className="block">
                <Image src={"/public/assets/app-store.png"} width={280}
              height={80} alt="Download on the App Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/colonybank/" className="text-gray-600 hover:text-gray-900">
            <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full">f</span>
          </a>
          <a href="https://www.linkedin.com/company/colony-bank" className="text-gray-600 hover:text-gray-900">
            <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full">in</span>
          </a>
          <a href="https://www.instagram.com/colonybank/" className="text-gray-600 hover:text-gray-900">
            <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </span>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>Copyright © 2025 All rights reserved.</p>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;