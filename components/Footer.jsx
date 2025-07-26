"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import logo from "../assets/logo4.png";
import Image from "next/image";
import Link from "next/link";
import { bottomLinks, socialLinks } from "../data/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-16 bg-gradient-to-b from-[#0D1117] to-[#0a1c2e] border-t border-[#1a3a5f]">
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#269ca1]/10 filter blur-3xl animate-pulse"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#269ca1]/10 filter blur-3xl animate-pulse"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full border-4 border-[#269ca1]/10"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute -top-40 -right-20 w-60 h-60 rounded-full border-4 border-[#269ca1]/10"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-center">
              <div className="w-16 h-16 mr-3">
                <Image
                  src={logo}
                  alt="Dodix Tech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <motion.p
              className="text-gray-400 text-sm leading-relaxed"
              variants={itemVariants}
            >
              We craft stunning digital experiences that blend beautiful design
              with robust functionality—tailored to elevate your brand and
              engage your audience.
            </motion.p>
            <motion.div
              className="flex space-x-4 pt-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {socialLinks.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    className="bg-[#1a2a3a] hover:bg-[#269ca1] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="lg:pl-10" variants={itemVariants}>
            <motion.h3
              className="text-white text-lg font-bold mb-6 pb-2 border-b border-[#1a3a5f] inline-block"
              variants={itemVariants}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-[#269ca1] transition-all duration-300 group"
                    >
                      <BsArrowRight className="mr-3 text-[#269ca1] group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-white text-lg font-bold mb-6 pb-2 border-b border-[#1a3a5f] inline-block"
              variants={itemVariants}
            >
              Our Services
            </motion.h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "Cloud Solutions",
                "SEO Optimization",
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-[#269ca1] transition-all duration-300 group"
                  >
                    <BsArrowRight className="mr-3 text-[#269ca1] group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-white text-lg font-bold mb-6 pb-2 border-b border-[#1a3a5f] inline-block"
              variants={itemVariants}
            >
              Contact Us
            </motion.h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start group"
                variants={itemVariants}
              >
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0d2a2c] border border-[#1a4d50] text-[#269ca1] text-xl transition-all duration-300 group-hover:bg-[#269ca1] group-hover:border-[#269ca1] group-hover:text-white">
                  <IoMdMail className="z-10" />
                  <span className="cursor-pointer absolute w-full h-full rounded-full bg-[#269ca1]/15 blur-md transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"></span>
                </div>
                <Link href="#" className="ml-4">
                  <p className="text-gray-400 text-sm group-hover:text-[#a0e0dd] transition-colors duration-300">
                    Email
                  </p>
                  <p className="text-white group-hover:text-[#269ca1] transition-colors duration-300">
                    dodixtech@gmail.com
                  </p>
                </Link>
              </motion.li>

              <motion.li
                className="flex items-start group cursor-pointer"
                variants={itemVariants}
              >
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0d2a2c] border border-[#1a4d50] text-[#269ca1] text-xl transition-all duration-300 group-hover:bg-[#269ca1] group-hover:border-[#269ca1] group-hover:text-white">
                  <span className="z-10">📍</span>
                  <span className="absolute w-full h-full rounded-full bg-[#269ca1]/15 blur-md transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"></span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm group-hover:text-[#a0e0dd] transition-colors duration-300">
                    Location
                  </p>
                  <p className="text-white group-hover:text-[#269ca1] transition-colors duration-300">
                    Cairo, Egypt
                  </p>
                </div>
              </motion.li>

              <motion.li
                className="flex items-start group cursor-pointer"
                variants={itemVariants}
              >
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0d2a2c] border border-[#1a4d50] text-[#269ca1] text-xl transition-all duration-300 group-hover:bg-[#269ca1] group-hover:border-[#269ca1] group-hover:text-white">
                  <span className="z-10">📱</span>
                  <span className="absolute w-full h-full rounded-full bg-[#269ca1]/15 blur-md transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"></span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm group-hover:text-[#a0e0dd] transition-colors duration-300">
                    Phone
                  </p>
                  <p className="text-white group-hover:text-[#269ca1] transition-colors duration-300">
                    +20 123 456 7890
                  </p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-[#1a3a5f] my-10"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-500 text-sm mb-4 md:mb-0"
            variants={itemVariants}
          >
            &copy; {currentYear} Dodix Tech. All rights reserved.
          </motion.p>
          <motion.div
            className="flex space-x-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {bottomLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                variants={itemVariants}
                className="text-gray-500 hover:text-[#269ca1] text-sm transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a1c2e] via-[#269ca1] to-[#0a1c2e]"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />
    </footer>
  );
};

export default Footer;
