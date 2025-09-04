import Image from 'next/image';
import React from 'react';
import BrandButton from '../common/BrandButton';
import Header from '../common/Header';
import SocialBar from '../common/SocialBar';


const About = () => {
return (
<section className='h-fit md:h-dvh py-10 overflow-hidden  ' >
  <div className='pb-7'><Header headerText={'about'} className='md:hidden text-5xl pb-2 text-dark border-b-4 border-brand'/></div>
  <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-5 group'>
    <div className=" w-full h-[45dvh]  md:h-dvh bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/about-me.jpg')" }}>
        <SocialBar/>
    </div>
    <div className='px-3 md:px-0 flex flex-col gap-5 md:gap-8 justify-center items-center md:items-start'>
      <h2
        className='pt-7  text-center  md:text-left text-[calc(25px+3vw)] md:text-[calc(15px+3vw)] xl:text-[calc(15px+3vw)] text-dark font-headerFont leading-10 md:leading-12 lg:leading-25 xl:leading-20'>
        We create unique web experiences.
      </h2>
      <p className='text-center md:text-left text-md md:text-lg font-textFont text-dark/80 max-w-lg'>We are excited for our work and how it positively
        impacts clients. We have been constantly providing excellent web solutions which is best in-class experience for
        our clients. We mainly focus on clients and their requirements.

      </p>
      <BrandButton text='about agency'/>
      <div className='py-5 group hidden md:flex'>
        <Header headerText={"about"} className='h-fit text-[calc(30px+10vw)] translate-x-[100%] duration-600 group-hover:translate-x-[35%]'/>
      </div>
    </div>
  </div>
</section>
);
};

export default About;