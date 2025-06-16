import Image from 'next/image';
import React from 'react';
import { NavbarLinks } from './NavbarLinks';
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo-removebg.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-[#0b0f1a] px-5 pt-1 pb-3"> 

      <Image src={logo} alt="Logo" width={30} height={30}/>
       
      <div className="flex justify-center">
        <NavbarLinks />
      </div>
    
      <div className="flex items-center space-x-4 text-xl sm:text-2xl">
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
    </div>
  );
};

export default Navbar;
