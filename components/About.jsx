"use client";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { focusPoints, principles, teamInfo } from "../data/data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-16 sm:py-20 md:py-24 bg-[#111721] relative overflow-hidden"
    >
      <div className="absolute top-[-8%] -left-10 w-40 h-96 sm:w-80 sm:h-64 rounded-full bg-[#269ca1]/10 filter blur-2xl opacity-70 animate-float1" />
      <div className="absolute bottom-10 -right-10 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-[#269ca1]/10 filter blur-2xl opacity-50 animate-float2" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center w-11/12 mx-auto px-2.5 lg:px-14 pb-12"
      >
        <h1 className="text-white text-2xl md:text-5xl font-bold mb-2.5">
          About <span className="text-[#269ca1]">Us</span>
        </h1>

        <div className="mx-auto w-28 md:w-56 h-1 bg-gradient-to-r from-[#269ca1] to-transparent mb-2"></div>

        <p className="text-lg md:text-xl text-gray-400">
          Meet the creative minds behind the code
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative border border-gray-700 h-full text-start p-5 rounded-2xl mt-8 md:mt-10 flex flex-col md:flex-row justify-between gap-10"
        >
          <div className="absolute hidden md:block -top-8 -right-5 w-28 h-40 sm:h-40 rounded-full bg-[#269ca1]/10 filter blur-xl opacity-50 animate-float3" />

          <div className="flex-1">
            <h2 className="text-white text-xl md:text-3xl font-bold mb-2.5">
              Software Engineers
            </h2>
            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-[#269ca1] rounded-full"></div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-gray-400 leading-relaxed pt-3"
            >
              We are a diverse team of developers, designers, and strategists
              united by one goal — building exceptional digital products. Our
              experience and creativity drive us to solve real problems and help
              businesses grow through innovation and technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-gray-700 text-start p-5 rounded-2xl mt-10"
            >
              <h3 className="text-white text-xl font-bold mb-2.5">
                Coding Principles
              </h3>

              {principles.map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-base md:text-lg text-gray-400 leading-relaxed pt-3"
                >
                  <GiCheckMark className="text-[#269ca1]" />
                  {item.text}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-5 flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-[#1a4d50] p-6 rounded-3xl bg-[#0d2a2c] flex flex-col gap-5"
            >
              <h4 className="text-white text-xl font-bold">Team Info</h4>
              {teamInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#269ca1]/20 flex items-center justify-center text-sm sm:text-base text-[#269ca1]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#8b949e] text-sm">{item.label}</p>
                    <p className="text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="size-full border border-gray-700 p-5 rounded-3xl flex flex-col gap-2 group hover:border-[#269ca1] duration-500"
            >
              <h4 className="text-white text-lg font-bold group-hover:text-[#269ca1] duration-500">
                Current Focus
              </h4>
              {focusPoints.map((point, index) => (
                <div key={index}>
                  <p className="text-[#8b949e] text-sm">{point}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-4 border-[#269ca1]/10"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border-4 border-[#269ca1]/10"></div>
    </section>
  );
};

export default About;
