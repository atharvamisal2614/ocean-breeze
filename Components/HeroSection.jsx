"use client";
import { useState } from "react";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vitamin-sea-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800/80 to-transparent"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-10">
        {/* Logo */}
        {/* <div>
          <img src="/logo.png" alt="Logo" className="h-24" />
        </div> */}
        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white text-lg p-4 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden md:flex"}`}
        >
          <li>
            <a href="#" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white px-6 text-center">
        <div className="max-w-2xl">
          <p className="text-lg sm:text-xl font-light uppercase tracking-wide">Welcome to</p>
          <h1 className="text-4xl  font-bold font-serif italic bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 text-transparent bg-clip-text">
            Ocean Breeze Beach Resort
          </h1>
          <p className="mt-4 text-lg sm:text-xl">Come in as our guest, and be our family.</p>
        </div>
      </div>
    </section>
  );
}
