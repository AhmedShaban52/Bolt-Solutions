"use client";
import React from "react";
import { motion } from "framer-motion";
import { contactDetails } from "../data/data";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import Link from "next/link";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  // تم التصحيح هنا: إزالة duration غير المتوافقة مع spring
  const item = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
      },
    },
  };

  const lineItem = {
    hidden: {
      width: 0,
    },
    show: {
      width: "12rem",
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 2.0,
      },
    },
  };

  // تم التصحيح هنا: تغيير النوع إلى tween مع duration
  const formItem = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween", // تغيير من spring إلى tween
        ease: "easeOut",
        duration: 1.2,
      },
    },
  };

  return (
    <section
      id="contact"
      className="scroll-mt-8 py-12 sm:py-16 md:py-24 md:pb-20 bg-[#0D1117] relative overflow-hidden"
    >
      <div className="absolute top-[-8%] -left-10 w-40 h-96 sm:w-80 sm:h-64 rounded-full bg-[#269ca1]/10 filter blur-2xl opacity-70 animate-float1" />
      <div className="absolute bottom-10 -right-10 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-[#269ca1]/10 filter blur-2xl opacity-50 animate-float2" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-4 border-[#269ca1]/10"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border-4 border-[#269ca1]/10"></div>

      <div className="container w-5/6 mx-auto relative z-10">
        <motion.div
          className="text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h1
            className="text-white text-2xl md:text-5xl font-bold mb-2.5"
            variants={item}
          >
            Get In <span className="text-[#269CA1]">Touch</span>
          </motion.h1>

          <motion.div
            className="mx-auto w-48 md:w-80 h-1 bg-gradient-to-r from-[#269CA1] to-transparent mb-2"
            variants={lineItem}
          ></motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400"
            variants={item}
          >
            Group of Engineers, Developers, And Designers Dedicated to
            Delivering Excellence.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 pt-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative">
            <div className="absolute hidden md:block -top-8 -right-5 w-28 h-40 sm:h-40 rounded-full bg-[#269ca1]/10 filter blur-xl opacity-50 animate-float3" />

            <motion.h3
              className="text-xl sm:text-2xl font-semibold text-text-primary"
              variants={item}
            >
              Contact Information
            </motion.h3>

            <motion.p
              className="text-sm sm:text-base text-gray-500 pt-5"
              variants={item}
            >
              Feel free to reach out to me through any of the following methods.
              Im always open to discussing new projects, creative ideas, or
              opportunities.
            </motion.p>

            <div className="pt-8">
              {contactDetails.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 mb-8 group"
                  variants={item}
                >
                  <span className="bg-[#269CA1]/20 p-2 sm:p-3 rounded-full group-hover:bg-[#269CA1]/30 transition-all duration-300">
                    {item.icon}
                  </span>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h4 className="text-white">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-10">
              <motion.h5
                className="text-xl sm:text-2xl font-semibold text-text-primary"
                variants={item}
              >
                Follow Me
              </motion.h5>

              <motion.div
                className="flex justify-start gap-3 sm:gap-4 pt-2 sm:pt-4"
                variants={container}
              >
                <Link
                  href="https://www.instagram.com/dodixtech?igsh=azBhZDlra3IycWx1"
                  target="_blank"
                  className="inline-flex items-center text-text-primary justify-center p-1.5 sm:p-2 text-xs sm:text-sm font-medium transition-colors rounded-full border border-white/30 hover:bg-white/10 cursor-pointer hover:border-[#269CA1] hover:text-[#269CA1] duration-300"
                >
                  <FaInstagram size={18} />
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="bg-[#161B22] p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm sm:shadow-md border border-gray-700 relative overflow-hidden"
            variants={item}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#269CA1]/10 animate-pulse"></div>

            <motion.h6
              className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-text-primary relative z-10"
              variants={item}
            >
              Send Me a Message
            </motion.h6>

            <motion.form
              action="mailto:dodixtech@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4 sm:space-y-6 relative z-10"
              variants={container}
            >
              <motion.div
                className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6"
                variants={container}
              >
                <motion.div
                  className="col-span-2 md:col-span-1"
                  variants={formItem}
                >
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-text-primary"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-white/30 mt-2 p-2 pl-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#269CA1] duration-500 placeholder-gray-600"
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  className="col-span-2 md:col-span-1"
                  variants={formItem}
                >
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-text-primary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-white/30 mt-2 p-2 pl-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#269CA1] duration-500 placeholder-gray-600"
                    placeholder="Your Email"
                  />
                </motion.div>
              </motion.div>

              <motion.div className="w-full col-span-1" variants={formItem}>
                <label
                  htmlFor="text"
                  className="text-sm font-medium text-text-primary"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-white/30 mt-2 p-2 pl-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#269CA1] duration-500 placeholder-gray-600"
                  placeholder="Your Subject"
                />
              </motion.div>

              <motion.div className="w-full col-span-1" variants={formItem}>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 sm:px-4 mt-2 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#269CA1] duration-500 text-text-primary min-h-[100px] sm:min-h-[150px] bg-transparent placeholder-gray-600"
                  placeholder="Write your message here..."
                />
              </motion.div>

              <motion.button
                className="w-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm bg-gradient-to-r from-[#269CA1] to-[#1D8A8F] text-white font-medium rounded-lg hover:from-[#1D8A8F] hover:to-[#14777B] transition-all transform  duration-500 shadow shadow-[#269CA1]/30 flex items-center justify-center cursor-pointer group relative overflow-hidden"
                variants={formItem}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.3 },
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#1D8A8F] to-[#14777B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center">
                  <BsSendFill size={18} className="mr-2" /> Send Message
                </span>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;