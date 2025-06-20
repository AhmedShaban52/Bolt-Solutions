"use client";
import React, { useState } from "react";
import { teamMembers } from "../data/data";

const Team = () => {

  return (
    <section id="team" className="scroll-mt-28">
      <div className="text-center">
        <h1 className="text-white text-2xl md:text-5xl font-bold mb-2.5">
          Team <span className="text-blue-700">Members</span>
        </h1>
        <div className="mx-auto w-48 md:w-80 h-1 bg-gradient-to-r from-blue-700 to-transparent mb-2"></div>
        <p className="text-lg md:text-xl text-gray-400">
          Group of Engineers, Developers, And Designers Dedicated to Delivering
          Excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {teamMembers.map((item, index) => (
          <div
            key={index}
            className="relative group p-6 bg-[#0D141D] border border-gray-700 rounded-3xl space-y-4 overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
          >
            <span className="pointer-events-none absolute w-32 h-32 right-0 bottom-1 rounded-full bg-blue-700 opacity-30 blur-2xl transform  transition-all duration-200"></span>

            <p className="text-center text-blue-700 font-medium text-sm">
              {item.experince}
            </p>

            <div className="flex items-start gap-4 z-10 relative">
              <span className="text-blue-700 text-2xl mt-1">{item.icon}</span>
              <div>
                <h1 className="text-lg font-semibold text-white">
                  {item.name}
                </h1>
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
