import React from "react";
import Navbar from "../../components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0D141D] text-white min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-12">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
