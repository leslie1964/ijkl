'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col justify-between  bg-white text-black gap-10"
      // style={{
      //   backgroundImage: `url(/assets/bg.png)`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className=" w-full md:w-md max-w-lg p-8 rounded-lg shadow-xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image 
              alt={process.env.NEXT_PUBLIC_BANK_NAME || ""}
              src="/assets/logo.png"
              width={280}
              height={80}
              className="h-12"
            />
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">Welcome to {process.env.NEXT_PUBLIC_BANK_NAME} Banking</h1>
          
          <p className="text-center mb-8">
            Access your accounts securely or verify your information to continue.
          </p>

          <div className="flex flex-col space-y-4">
            <Link href="/login" className="bg-[#840029]  px-6 py-3 rounded-md text-center text-white font-medium hover:bg-[#840029] transition-colors">
              Login to Your Account
            </Link>
            
            <Link href="/verification" className="bg-[#3B3836] text-white px-6 py-3 rounded-md text-center font-medium hover:bg-[#4e4c4b] transition-colors">
              Verify Your Information
            </Link>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>Need help? Contact our support team at</p>
            <a href={process.env.NEXT_PUBLIC_MAIN_PAGE_URL} className="text-[#840029] hover:underline">
              support@{process.env.NEXT_PUBLIC_BANK_NAME}.com
            </a>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}