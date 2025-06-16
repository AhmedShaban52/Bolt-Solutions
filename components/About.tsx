import React from "react";
import { GiCheckMark } from "react-icons/gi";
const About = () => {
  return (
    <section className="w-full  text-gray-900 py-16">
      <div className="text-center">
        <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold mb-2.5">
          About <span className="text-blue-700">Us</span>
        </h1>
        <div className="mx-auto w-56 h-1 bg-gradient-to-r from-blue-700 to-transparent mb-2"></div>
        <p className="text-xl text-gray-400">
          Meet the creative minds behind the code
        </p>

        <div className="relative border border-gray-700  h-full text-start p-5 rounded-3xl mt-10 flex flex-col md:flex-row justify-between gap-10">
          <div className="absolute -top-8 -right-5 w-28 h-40  sm:h-40 rounded-full bg-[oklab(0.69_-0.05_-0.18_/_0.2)] filter blur-xl opacity-50 animate-float" />

          <div>
            <h2 className="text-white text-xl md:text-3xl font-bold mb-2.5">
              Soft-Ware Engineers
            </h2>
            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-blue-700 rounded-full"></div>

            <p className="text-base md:text-lg  text-gray-600 leading-relaxed pt-3">
              We’re a diverse team of developers, designers, and strategists
              united by one goal — building exceptional digital products. Our
              experience and creativity drive us to solve real problems and help
              businesses grow through innovation and technology.
            </p>

            <div className="border border-gray-700 text-start p-5 rounded-3xl mt-10">
              <div>
                <h3 className="text-white text-xl font-bold mb-2.5">
                  Coding Principles
                </h3>

                <p className="flex items-center gap-2 text-base md:text-lg text-gray-600 leading-relaxed pt-3">
                  <GiCheckMark className="text-blue-700" /> Clean, maintainable
                  code as a foundation
                </p>
                <p className="flex items-center gap-2 text-base md:text-lg text-gray-600 leading-relaxed pt-3">
                  <GiCheckMark className="text-blue-700" /> Performance
                  optimization from day one
                </p>
                <p className="flex items-center gap-2 text-base md:text-lg text-gray-600 leading-relaxed pt-3">
                  <GiCheckMark className="text-blue-700" /> Accessibility as a
                  priority, not an afterthought
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="border border-[#112B51] p-6 rounded-3xl bg-[#0F1D31] flex flex-col gap-5 size-fit">
              <h4 className="text-white text-xl  font-bold">Team Info</h4>
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-700/10 flex items-center justify-center text-sm sm:text-base text-blue-700">
                  ✉️
                </div>
                <div>
                  <p className="text-[#8b949e] text-sm">Email</p>
                  <p className="text-white text-sm">mostafaontrack@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-700/10 flex items-center justify-center text-sm sm:text-base text-blue-700">
                  📍
                </div>
                <div>
                  <p className="text-[#8b949e] text-sm">Location</p>
                  <p className="text-white text-sm">Cairo, Egypt</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-700/10 flex items-center justify-center text-sm sm:text-base text-blue-700">
                  🔍
                </div>
                <div>
                  <p className="text-[#8b949e] text-sm">Status</p>
                  <p className="text-white text-sm">Open to opportunities</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-700 p-6 rounded-3xl flex flex-col gap-2 size-fit group hover:border-blue-700 duration-500">
              <h4 className="text-white text-lg font-bold group-hover:text-blue-700 duration-500">
                Current Focus
              </h4>
              <div className="flex items-center gap-3">
                <p className="text-[#8b949e] text-sm">
                  Building scalable digital experiences through collaborative
                  software engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
