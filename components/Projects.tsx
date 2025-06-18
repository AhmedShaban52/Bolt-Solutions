import React from "react"
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <section className="pt-14">
      <div className="text-center">
        <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold mb-2.5">
          Our <span className="text-blue-700">Projects</span>
        </h1>
        <div className="mx-auto w-80 h-1 bg-gradient-to-r from-blue-700 to-transparent mb-2"></div>
        <p className="text-xl text-gray-400">
          Real results. Real impact. A glimpse into our development journey.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10">
        {projects.map((project, index) => (
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
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-text-primary">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-base text-blue-700">
                    <FiExternalLink /> Live Demo
                  </span>
                </div>
              </div>
              <p className="text-[#8b949e] text-sm pt-1.5">
                {project.description}
              </p>

              <div className="pt-3 flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-blue-700/10 text-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
