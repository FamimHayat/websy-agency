import React from 'react';
import { PiSealCheckFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";



const Banner = () => {
return (
<section className="py-15 px-3 sm:px-0 overflow-hidden sm:h-[calc(100vh-75px)] 
    ">

  <div>
    <h2
      className="relative hidden sm:flex text-brand leading-80 md:leading-100 lg:leading-150 text-center text-[calc(20px+25vw)] sm:text-[calc(20px+30vw)] lg:text-[calc(20px+32vw)] text-shadow-extraLight font-headerFont ">
      <span data-aos="fade-right">we</span> b<span data-aos="fade-left">sy</span>
      <span className='leading-10 sm:leading-15 lg:leading-20 inline-block absolute  text-[calc(15px+5vw)] md:text-[calc(10px+5vw)] text-dark left-[20%]
        top-[40%] sm:left-[25%]  sm:top-[40%]   md:left-[30%]  md:top-[50%] text-center '>
        <span data-aos="fade-in" data-aos-duration={800}>we are creative</span><br /><span data-aos="fade-in"
          data-aos-duration={1500}>web agency</span>
      </span>
    </h2>
    <div className='relative flex flex-col gap-10'>

      <h2
        className=' sm:hidden text-[calc(50px+30vw)] font-headerFont text-center text-brand text-shadow-light leading-20 pb-10'>
        <span>web</span><br /><span>sy</span> </h2>
      <p className='sm:hidden pt-5 text-5xl font-textFont text-dark/90 font-semibold text-center text-shadow-light'> we
        are creative <br />web agency</p>
    </div>
    <div className=' sm:flex gap-3 justify-center  pt-12 md:pt-20 lg:pt-40'>
      <p className='flex gap-2 justify-center items-center text-md md:text-lg text-dark md:font-semibold font-textFont'>
        <PiSealCheckFill /> FullStack web agency</p>
      <span className='tracking-tighter hidden md:flex'>-------------------</span>
      <span className='tracking-tighter hidden md:hidden sm:flex'>---------</span>
      <p className='flex gap-2 justify-center items-center text-md md:text-lg text-dark md:font-semibold font-textFont'>
        <FaLocationDot /> Located at london</p>
      <span className='tracking-tighter hidden md:flex'>-------------------</span>
      <span className='tracking-tighter hidden md:hidden sm:flex'>---------</span>
      <p className='flex gap-2 justify-center items-center text-md md:text-lg text-dark md:font-semibold font-textFont'>
        <FaHeart /> Trusted agency</p>
    </div>
  </div>
</section>
);
};

export default Banner;