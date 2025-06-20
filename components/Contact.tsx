import React from "react";
import { contactDetails } from "../data/data";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-8 py-12 sm:py-16 md:py-20 bg-[#0D1117]">
      <div className="container w-5/6 mx-auto">
        <div className="text-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold mb-2.5">
            Get In <span className="text-blue-700">Touch</span>
          </h1>
          <div className="mx-auto w-48 md:w-80 h-1 bg-gradient-to-r from-blue-700 to-transparent mb-2"></div>
          <p className="text-lg md:text-xl text-gray-400">
            Group of Engineers, Developers, And Designers Dedicated to
            Delivering Excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 pt-20">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">
              Contact Information
            </h3>
            <p className="text-sm sm:text-base text-gray-500 pt-5">
              Feel free to reach out to me through any of the following methods.
              I'm always open to discussing new projects, creative ideas, or
              opportunities.
            </p>
            <div className="pt-8">
              {contactDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 mb-8"
                >
                  <span className="bg-blue-700/20 p-2 sm:p-3 rounded-full">
                    {item.icon}
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <h5 className="text-xl sm:text-2xl font-semibold text-text-primary">
                Follow Me
              </h5>
              <div className="flex justify-center md:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a className="inline-flex items-center text-text-primary justify-center p-1.5 sm:p-2 text-xs sm:text-sm font-medium transition-colors rounded-full border border-gray-700 hover:bg-[#161b22] cursor-pointer">
                  <AiFillGithub size={18} />
                </a>
                <a className="inline-flex items-center text-text-primary justify-center p-1.5 sm:p-2 text-xs sm:text-sm font-medium transition-colors rounded-full border border-gray-700 hover:bg-[#161b22] cursor-pointer">
                  <FaInstagram size={18} />
                </a>
                <a className="inline-flex items-center text-text-primary justify-center p-1.5 sm:p-2 text-xs sm:text-sm font-medium transition-colors rounded-full border border-gray-700 hover:bg-[#161b22] cursor-pointer">
                  <IoLogoLinkedin size={18} />
                </a>
                <a className="inline-flex items-center text-text-primary justify-center p-1.5 sm:p-2 text-xs sm:text-sm font-medium transition-colors rounded-full border border-gray-700 hover:bg-[#161b22] cursor-pointer">
                  <MdEmail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-5 sm:p-6 md:p-8 rounded-lg shadow-sm sm:shadow-md border border-gray-700">
            <h6 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-text-primary">
              Send Me a Message
            </h6>
            <form  action="mailto:mostafaontrack@gmail.com" method="post" className="space-y-4 sm:space-y-6">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-text-primary"> Name </label>
                  <input type="text" id="name" className="w-full border border-gray-700 mt-2 p-2 pl-4 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 duration-500" placeholder="Your Name"/>            
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="email" className="text-sm font-medium text-text-primary"> Email </label>
                  <input type="email" id="email" className="w-full border border-gray-700 mt-2 p-2 pl-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 duration-500" placeholder="Your Email"/>            
                </div>
              </div>
                <div className="w-full col-span-1">
                  <label htmlFor="text" className="text-sm font-medium text-text-primary"> Subject </label>
                  <input type="text" id="subject" className="w-full border border-gray-700 mt-2 p-2 pl-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 duration-500" placeholder="Your Subject"/>            
                </div>
                <div className="w-full col-span-1">
                  <label htmlFor="message" className="text-sm font-medium text-text-primary"> Message </label>
                  <textarea id="message" className="w-full px-3 sm:px-4 mt-2 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 duration-500 text-text-primary min-h-[100px] sm:min-h-[150px]" placeholder="Write your message here..."/>            
                </div>
                <button className="w-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm bg-blue-600 text-text-primary rounded-md hover:bg-blue-700/90 transition-colors duration-500 flex items-center justify-center cursor-pointer">
                    <BsSendFill size={18} className="mr-2"/> Send Message
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
