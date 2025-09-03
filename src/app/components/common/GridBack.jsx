import React from "react";

const GridBack = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
   
      <div className="absolute inset-0  grid grid-cols-8 sm:grid-cols-12 h-full">
        <div className="  border-r border-[#0e0e0e25]"></div>
        <div className="  border-r border-[#0e0e0e25]"></div>
        <div className="  border-r border-[#0e0e0e25]"></div>
        <div className="  border-r border-[#0e0e0e25]"></div>
        <div className="  border-r border-[#0e0e0e25]"></div>
        <div className="  border-r border-[#0e0e0e25]"></div>
        <div className="  border-r border-[#0e0e0e25]"></div>
        <div className="  border-r border-[#0e0e0e25]"></div>
        <div className="  border-r border-[#0e0e0e25] hidden sm:flex"></div>
        <div className="  border-r border-[#0e0e0e25] hidden sm:flex"></div>
        <div className="  border-r border-[#0e0e0e25] hidden sm:flex"></div>
        <div className=""></div>    
      </div>

     
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBack;