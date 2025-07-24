"use client";
import React, { useState } from "react";
import Image from "next/image";
import { graphicDesigns } from "../../data/data";
import Link from "next/link";

const Page = () => {
  // فئات التصميم الجرافيكي
  const categories = [
    "All",
    "Logo Design",
    "Brand Identity",
    "Print Design",
    "Social Media",
    "Packaging",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // تصفية الأعمال حسب الفئة
  const filteredDesigns =
    activeCategory === "All"
      ? graphicDesigns
      : graphicDesigns.filter((design) => design.category === activeCategory);

  // Function to get initials from client name
  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0f1a] to-[#0d1117] text-white min-h-screen">
      <div className="w-11/12 mx-auto px-2 max-w-7xl">
        <div className="text-center mb-14">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-[#269ca1] to-[#5de2e6] text-transparent bg-clip-text">
              Graphic
            </span>
            <span> Design</span>
          </h1>
          <div className="mx-auto w-44 md:w-96 h-1 bg-gradient-to-r from-[#269ca1] to-transparent mb-6"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            A showcase of creative visual solutions, from brand identities to
            marketing materials and digital assets.
          </p>
        </div>

        {/* فئات التصميم */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-sm md:text-base transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#269ca1] to-[#1a6d70] text-white shadow-[#269ca1]/40"
                  : "bg-[#0d2a2c] text-[#269ca1] border border-[#1a4d50] hover:bg-[#269ca1]/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* معرض التصاميم */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="group border border-[#1a3a5f] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#269ca1] hover:shadow-[0_0_30px_rgba(38,156,161,0.3)]"
            >
              {/* صورة التصميم */}
              <div className="relative h-80 bg-gradient-to-br from-[#0d1117] to-[#0a1825] flex items-center justify-center p-0.5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,15,26,0.4)_0%,rgba(10,15,26,0.8)_70%)]"></div>

                <Image
                  src={design.image}
                  alt={design.title}
                  className="object-center size-full transition-all duration-700 group-hover:scale-105"
                />

                {/* شريحة المعلومات العلوية */}
                <div className="absolute top-4 left-4 bg-[#0d2a2c]/90 backdrop-blur-sm px-3 py-1.5 rounded-xl text-sm text-[#5de2e6] border border-[#1a4d50] z-20 shadow-lg">
                  {design.category}
                </div>
              </div>

              {/* تفاصيل التصميم */}
              <div className="p-5 bg-[#0d1117] relative">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5de2e6] transition-colors">
                  {design.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 min-h-[60px]">
                  {design.description}
                </p>

                {/* Improved client info section */}
                <div className="flex justify-between items-center pt-3 border-t border-[#1a3a5f]">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      {/* Client avatar with gradient border */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a4d50] to-[#0d2a2c] flex items-center justify-center relative">
                        <div className="absolute inset-0.5 bg-[#0d1117] rounded-xl"></div>
                        <span className="text-[#5de2e6] font-bold relative z-10">
                          {getInitials(design.client)}
                        </span>
                      </div>

                      {/* Verification badge */}
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#269ca1] to-[#1a6d70] flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Client</p>
                      <p className="text-sm text-[#5de2e6] font-medium">
                        {design.client}
                      </p>
                      <div className="flex items-center mt-1">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                        <span className="text-[10px] text-gray-400">
                          Verified Partner
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">Year</span>
                    <span className="text-sm text-[#5de2e6]">
                      {design.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="text-center mt-16 ">
          <Link href="/" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-transparent border border-[#269ca1] rounded-xl hover:bg-[#269ca1] transition-colors duration-500 group hover:shadow-[0_0_15px_rgba(38,156,161,0.4)] cursor-pointer">
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
