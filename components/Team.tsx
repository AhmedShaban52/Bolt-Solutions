"use client";
import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { teamMembers } from "../data/data";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section
      id="team"
      className="scroll-mt-28 pt-10 pb-14 bg-[#09101e] relative overflow-hidden"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-10 left-[-5%] w-60 h-60 rounded-full bg-[#269ca1]/10 filter blur-3xl opacity-50 animate-float1"></div>
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 rounded-full bg-[#269ca1]/10 filter blur-3xl opacity-40 animate-float2"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-11/12 mx-auto px-2 lg:px-14 md:pt-20 pb-12 relative z-10"
      >
        <div className="text-center">
          <motion.h1
            className="text-white text-2xl md:text-5xl font-bold mb-2.5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Team <span className="text-[#38b2ac]">Members</span>
          </motion.h1>
          
          <motion.div
            className="mx-auto h-1 bg-gradient-to-r from-[#38b2ac] to-transparent mb-2"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            style={{ maxWidth: "20rem" }}
          />
          
          <motion.p
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Group of Engineers, Developers, And Designers Dedicated to
            Delivering Excellence.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {teamMembers.map((item, index) => (
            <motion.div
              key={index}
              className="relative group px-5 py-8 border border-[#1a4d50] rounded-3xl space-y-5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_rgba(56,178,172,0.15)] hover:border-[#38b2ac]"
              variants={{
                hidden: { 
                  opacity: 0, 
                  x: -50,
                  rotateY: -15,
                  filter: "blur(4px)"
                },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  rotateY: 0,
                  filter: "blur(0px)",
                  transition: { 
                    duration: 0.7, 
                    ease: "backOut",
                    delay: index * 0.15
                  } 
                }
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 20px rgba(56, 178, 172, 0.25)",
                transition: { duration: 0.3 } 
              }}
            >
              <span className="pointer-events-none absolute w-40 h-40 right-0 bottom-0 rounded-full bg-[#269ca1]/15 blur-2xl transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"></span>

              <div className="flex items-start gap-4 z-10 relative">
                <motion.span 
                  className="text-[#38b2ac] text-3xl p-2 rounded-full bg-[#0d2a2c] border border-[#1a4d50] group-hover:text-[#0d2a2c] group-hover:bg-[#38b2ac] group-hover:border-[#38b2ac] transition-all duration-300"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <BsPersonWorkspace />
                </motion.span>

                <div>
                  <motion.h1 
                    className="text-xl font-bold text-white group-hover:text-[#38b2ac] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.h1>
                  <motion.h2 
                    className="text-lg font-medium text-gray-400 group-hover:text-[#a0e0dd] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.div 
                    className="mt-3 flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.05 }
                      }
                    }}
                  >
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#0d2a2c] text-[#38b2ac] border border-[#1a4d50] group-hover:bg-[#38b2ac]/20 group-hover:text-[#a0e0dd] transition-colors duration-300"
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { 
                            opacity: 1, 
                            scale: 1,
                            transition: { duration: 0.3 }
                          }
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>

              <motion.p 
                className="text-gray-400 text-sm mt-4 z-10 relative group-hover:text-[#c2f0ed] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 mx-auto w-full h-px bg-gradient-to-r from-transparent via-[#38b2ac] to-transparent opacity-30"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        />
      </motion.div>
    </section>
  );
};

export default Team;