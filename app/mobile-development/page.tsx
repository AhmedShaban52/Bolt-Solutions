import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { mobileProjects } from "../../data/data";

const page = () => {
  return (
    <section className="py-16  bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-2.5">
            Mobile <span className="text-blue-700">Projects</span>
          </h1>
          <div className="mx-auto w-44  md:w-96 h-1 bg-gradient-to-r from-blue-700 to-transparent mb-2"></div>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            A selection of recent work showcasing responsive dashboards,
            e-commerce platforms, and more — all built with modern tech stacks.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {mobileProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group border border-gray-700 rounded-xl overflow-hidden transition-all duration-500 hover:border-blue-700 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105 object-contain"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-sm lg:text-base text-blue-500">
                      <FiExternalLink />
                      <span className="hidden md:block">Live Demo</span>
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm lg:text-base pt-2">
                  {project.description}
                </p>

                <div className="pt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-blue-700/10 text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-start mt-8">
          <Link
            href="/"
            className="inline-block px-6 py-2 text-sm font-semibold text-white border border-blue-600 rounded-lg hover:bg-blue-600 transition-colors"
          >
            ← <span className="ml-2">Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
