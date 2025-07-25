import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mobileProjects } from "../../data/data";

const Page = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0f1a] to-[#0d1117] text-white min-h-screen">
      <div className="w-11/12 mx-auto px-2">
        <div className="text-center mb-16">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Mobile <span className="text-[#269ca1]">Projects</span>
          </h1>
          <div className="mx-auto w-44 md:w-96 h-1 bg-gradient-to-r from-[#269ca1] to-transparent mb-3"></div>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-lg">
            A selection of mobile applications built with cutting-edge
            technologies, delivering seamless user experiences across iOS and
            Android platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileProjects.map((project, index) => (
            <div
              key={index}
              className="group border border-[#1a3a5f] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#269ca1] hover:shadow-[0_0_30px_rgba(38,156,161,0.2)] relative"
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${project.title} project`}
              ></Link>

              <div className="relative h-72 overflow-hidden bg-[#0d1117] flex items-center justify-center">
                <div className="relative w-3/4 mx-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    width={300}
                    height={500}
                  />
                </div>
              </div>

              <div className="p-5 bg-[#0d1117] relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#269ca1] hover:text-[#a0e0dd] transition-colors relative z-20"
                  >
                    ↗<span className="hidden md:block">Live Demo</span>
                  </Link>
                </div>

                <p className="text-gray-400 text-sm md:text-base mb-4">
                  {project.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#0d2a2c] text-[#269ca1] border border-[#1a4d50] group-hover:bg-[#269ca1]/20 group-hover:text-[#a0e0dd] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0d2a2c] flex items-center justify-center text-[#269ca1] group-hover:bg-[#269ca1] group-hover:text-white transition-all z-20">
                ↗
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-transparent border border-[#269ca1] rounded-xl hover:bg-[#269ca1] transition-colors duration-500 group hover:shadow-[0_0_15px_rgba(38,156,161,0.4)] cursor-pointer"
          >
            <span className="mr-2  group-hover:-translate-x-1 transition-transform duration-300 relative bottom-0.5">
              ←
            </span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
