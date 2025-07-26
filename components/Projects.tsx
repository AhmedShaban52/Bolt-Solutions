"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { cards } from "../data/data";

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const cardItem = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1.5,
      },
    },
  };

  const textItem = {
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
        stiffness: 100,
        duration: 1.2,
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
        duration: 1.5,
      },
    },
  };

  const bottomItem = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1.8,
      },
    },
  };

  return (
    <section
      id="projects"
      className="scroll-mt-28 pt-24 pb-24 bg-gradient-to-b from-[#0a0f1a] to-[#09101e] relative overflow-hidden"
    >
      <div className="absolute top-10 left-[-5%] w-60 h-60 rounded-full bg-[#269ca1]/10 filter blur-3xl opacity-50 animate-float1"></div>
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 rounded-full bg-[#269ca1]/10 filter blur-3xl opacity-40 animate-float2"></div>

      <div className="w-11/12 mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            variants={textItem}
          >
            Our <span className="text-[#269ca1]">Projects</span>
          </motion.h1>

          <motion.div
            className="mx-auto w-48 md:w-80 h-1 bg-gradient-to-r from-[#269ca1] to-transparent mb-4"
            variants={lineItem}
          ></motion.div>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            variants={textItem}
          >
            Real results. Real impact. A glimpse into our development journey.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={cardItem} className="relative">
              <Link
                href={card.href}
                className="relative group px-7 py-9 border border-[#1a4d50] rounded-3xl space-y-5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(38,156,161,0.2)] hover:border-[#269ca1] block h-full"
              >
                <span className="pointer-events-none absolute w-40 h-40 right-0 bottom-0 rounded-full bg-[#269ca1]/15 blur-2xl transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"></span>
                <span className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-[#269ca1]/20 blur-xl animate-pulse"></span>

                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0d2a2c] border border-[#1a4d50] text-[#269ca1] text-3xl group-hover:text-white group-hover:bg-[#269ca1] group-hover:border-[#269ca1] transition-all duration-300">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#269ca1] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-4 group-hover:text-white transition-colors duration-300">
                    {card.description}
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-[#0d2a2c] text-[#269ca1] border border-[#1a4d50] group-hover:bg-[#269ca1] group-hover:text-white transition-colors duration-300">
                    View Case Study
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-[#0d2a2c] text-[#269ca1] border border-[#1a4d50] group-hover:bg-[#269ca1] group-hover:text-white transition-colors duration-300">
                    See Demo
                  </span>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500 group-hover:text-[#a0e0dd] transition-colors duration-300 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {card.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#0d2a2c] text-[#269ca1] border border-[#1a4d50] group-hover:bg-[#269ca1]/20 group-hover:text-[#a0e0dd] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 mx-auto w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#269ca1] to-transparent opacity-30"></div>

        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="show"
          variants={bottomItem}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Interested in our work?
            <Link
              href="#contact"
              className="text-[#269ca1] hover:text-[#d1f5f3] transition-colors duration-300 font-semibold relative group px-1"
            >
              Contact us today
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#269ca1] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            to discuss how we can bring your project to life.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#09101e] to-transparent z-0"></div>
    </section>
  );
};

export default Projects;
