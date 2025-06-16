import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[95vh] flex flex-col items-center justify-center text-center">
      {/* Left blurred circle */}
      <div className="absolute top-1/4 left-4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-[oklab(0.69_-0.05_-0.18_/_0.2)] filter blur-3xl opacity-70 animate-float" />

      {/* Right blurred circle */}
      <div className="absolute top-1/4 right-4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-[oklab(0.69_-0.05_-0.18_/_0.2)] filter blur-3xl opacity-70 animate-float" />
     
      <h1 className="relative z-10 text-xl md:text-5xl w-full md:w-3/4 font-bold text-white break-words ">
        Design, Development, and Identity For Your Product
      </h1>

      <p className="relative z-10 mt-4 max-w-xl text-xs sm:text-lg text-gray-600">
        We craft stunning digital experiences that blend beautiful design with robust functionality—tailored to elevate your brand and engage your audience.
      </p>
    </div>
  );
};

export default Hero;
