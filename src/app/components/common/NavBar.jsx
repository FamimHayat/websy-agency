"use client";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToAboutEnd = ({ offset = 100 }) => {
    const section = document.getElementById("about");
    if (section) {
      const targetPosition =
        section.offsetTop + section.offsetHeight - window.innerHeight + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between  py-4 ">
          <div>
            <h2 className="flex text-[20px] md:text-[22px] lg:text-[26px] font-bold text-black   font-headerFont text-shadow-light">
              <span className="flex justify-center items-end text-light bg-black h-10 w-10 rounded-full">w</span>ebsy
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center md:gap-3 lg:gap-4 xl:gap-6">
              <li className="w-fit overflow-hidden navLinkHover">
                <a
                  href="/"
                  className="nav-li-css text-[20px] px-1  h-fit navHover duration-150 text-shadow-light text-black/60 z-50 hover:text-light  font-headerFont md:text-[22px]  lg:text-[26px] button-shadow-hover"
                >
                  home
                </a>
              </li>
              <li className="w-fit overflow-hidden navLinkHover">
                <button
                  onClick={scrollToAboutEnd}
                  className="nav-li-css text-[20px] px-1  h-fit navHover duration-150 text-shadow-light text-black/60 z-50 hover:text-light  font-headerFont md:text-[22px]  lg:text-[26px] button-shadow-hover cursor-pointer"
                >
                  about
                </button>
              </li>
              <li className="w-fit overflow-hidden navLinkHover">
                <a
                  href="/services"
                  className="nav-li-css text-[20px] px-1  h-fit navHover  duration-150 text-shadow-light text-black/60 z-50 hover:text-light font-headerFont md:text-[22px]  lg:text-[26px] button-shadow-hover"
                >
                  services
                </a>
              </li>
              <li className="w-fit overflow-hidden navLinkHover">
                <a
                  href="/projects"
                  className="nav-li-css text-[20px] px-1  h-fit navHover duration-150 text-shadow-light text-black/60 z-50 hover:text-light font-headerFont md:text-[22px]  lg:text-[26px] button-shadow-hover"
                >
                  demo
                </a>
              </li>
              <li className="w-fit overflow-hidden ">
                <a
                  href="/contact"
                  className="nav-li-css text-[20px] px-1  h-fit navHover  duration-150 bg-brand text-dark font-headerFont md:text-[22px] lg:text-[26px] text-shadow-light button-shadow-hover"
                >
                  contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="cursor-pointer outline-none mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <BsThreeDots className="text-[35px] text-dark" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "" : "hidden"} md:hidden`}>
          <ul className="my-4 space-y-4">
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-[30px] w-full duration-150 bg-dark  text-light font-headerFont rounded nav-custom-shadow text-shadow-light"
              >
                home
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToAboutEnd({ offset: 100 });
                  setMenuOpen(false);
                }}
                className="block text-left px-4 py-2 text-[30px] w-full text-light font-headerFont duration-150 bg-dark  rounded nav-custom-shadow text-shadow-light"
              >
                about
              </button>
            </li>
            <li>
              <a
                href="/services"
                className="block px-4 py-2 text-[30px] w-full text-light font-headerFont duration-150 bg-dark  rounded nav-custom-shadow text-shadow-light"
              >
                services
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="block px-4 py-2 text-[30px] w-full text-light font-headerFont duration-150 bg-dark  rounded nav-custom-shadow text-shadow-light"
              >
                demo
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block w-full px-2 py-2 nav-custom-shadow text-[30px] font-headerFont bg-brand text-dark rounded active:bg-primaryColor"
              >
                <div className="bg-lightBrand text-shadow-light px-2">
                  contact
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;