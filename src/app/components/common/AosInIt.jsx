"use client";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return null; 
}
