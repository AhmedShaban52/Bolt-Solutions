"use client";
import Image from "next/image";
import React, { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo-removebg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#0b0f1a] px-5 md:px-8 xl:px-14 pt-1 pb-3">
      <div className="relative flex items-center justify-between">
        {/* Logo */}
        <Image src={logo} alt="Logo" width={30} height={30} />

        {/* Desktop Links */}
        <div className="hidden md:flex justify-center">
          <NavbarLinks />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 text-xl sm:text-2xl">
          <a
            href="https://www.facebook.com/Bolt.Solutions2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-500"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/your_instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-500"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/bolt-solutions2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors duration-500"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@your_tiktok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-500"
          >
            <FaTiktok size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-[#0b0f1a] border-t border-gray-700 pt-4 pb-6 px-5 z-40">
          <div className="text-white text-base">
            <NavbarLinks isMobile={true} />
          </div>

          {/* Mobile Icons in column */}
          <div className="flex  items-start gap-x-4 text-xl mt-4">
            <a
              href="https://www.facebook.com/Bolt.Solutions2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-500 flex items-center gap-2"
            >
              <FaFacebook /> 
            </a>
            <a
              href="https://www.instagram.com/your_instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-500 flex items-center gap-2"
            >
              <FaInstagram /> 
            </a>
            <a
              href="https://www.linkedin.com/company/bolt-solutions2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors duration-500 flex items-center gap-2"
            >
              <FaLinkedin /> 
            </a>
            <a
              href="https://www.tiktok.com/@your_tiktok"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors duration-500 flex items-center gap-2"
            >
              <FaTiktok /> 
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
