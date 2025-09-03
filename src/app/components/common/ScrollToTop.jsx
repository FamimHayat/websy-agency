"use client"; // ensures this component is only rendered on the client

import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200); // show after 200px scroll
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed text-lg rotate-90 text-light bottom-15 -right-8 font-textFont bg-dark cursor-pointer py-1 px-3 hover:bg-brand hover:text-black shadow-lg hover:bg-lightBrand text-shadow-light transition duration-300 z-50"
        aria-label="Back to top"
      >
        scroll to top
      </button>
    )
  );
};

export default ScrollToTop;