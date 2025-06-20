import React from "react";
import Navbar from "../../components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0D141D] text-white min-h-screen">
      <Navbar />

      <div className="w-11/12 mx-auto px-2.5  pb-12">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
