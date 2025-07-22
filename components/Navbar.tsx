"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";
import logo from "../assets/logo4.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`sticky top-0 z-50 px-5 md:px-8 xl:px-14 pt-1 pb-3 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D1117] shadow-lg border-b border-[#1a3a5f]"
          : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between pt-1.5 pb-0.5">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Dodix Tech Logo"
            className="size-10 sm:size-12"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-center">
          <NavbarLinks />
        </div>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 pr-3.5 pl-6 py-2.5 cursor-pointer bg-gradient-to-r from-[#269ca1] to-[#1d8a8f] text-white font-medium rounded-full hover:from-[#1d8a8f] hover:to-[#14777b] transition-all duration-300 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#1d8a8f] to-[#14777b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center">
              Contact Us
              <RiCustomerService2Fill className="ml-3 text-lg" />
            </span>
            {/* نقطة الأنيمشن الدائمة */}
            <span className="relative z-10 w-2 h-2 bg-white rounded-full animate-ping  bottom-0 right-0 opacity-50"></span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl bg-[#1a2a3a] w-10 h-10 rounded-full flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-[#0D1117] border-t border-[#1a3a5f] pt-4 pb-6 px-5 z-40 animate-slideDown">
          <div className="text-white text-base">
            <NavbarLinks isMobile={true} />
          </div>

          {/* Contact Button - Mobile */}
          <div className="mt-6">
            <button
              onClick={() => {
                scrollToContact();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#269ca1] to-[#1d8a8f] text-white font-medium rounded-full hover:from-[#1d8a8f] hover:to-[#14777b] transition-all duration-300"
            >
              <RiCustomerService2Fill className="text-lg" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
