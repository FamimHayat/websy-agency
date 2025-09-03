import React from "react";

const GridBack = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 grid grid-cols-8 sm:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`border-r border-[#0e0e0e25] ${i >= 8 ? "hidden sm:flex" : ""}`}
          />
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBack;
