import React from "react";
import Navbar from "../../components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#12171e] text-white min-h-screen">
      <Navbar />

      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
