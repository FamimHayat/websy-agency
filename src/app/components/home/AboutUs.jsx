import React from 'react';
import Header from '../common/Header';
import Image from 'next/image';
import BrandButton from '../common/BrandButton';

const AboutUs = () => (
<section className='h-dvh overflow-hidden bg-transparent pb-10'>
  <div className='w-full flex justify-center items-center mb-10 md:hidden'>
    <Header headerText={"about"} className='text-6xl'/>
  </div>
  <div className='w-full  h-full md:h-[calc(100dvh-100px)]  grid grid-cols-1 md:grid-cols-2   md:gap-10'>

    <div>
      <Image src={'/about-me.jpg'} height={400} width={500} layout='responsive' alt='model' className=''/>
    </div>



    <div className='flex flex-col justify-center group'>
      <div className='flex flex-col justify-center  items-center lg:items-start gap-8 text-left'>
        <h2 className='leading-10 tracking-tight text-[calc(30px+2vw)] text-center md:text-left text-dark text-shadow-extraLight md:leading-20 max-w-2xl font-semibold font-headerFont
        '>We create unique web experiences.</h2>
        <p className=' text-md sm:text-lg px-3  text-dark/80 max-w-md text-center font-textFont'>We are excited for our
          work and how it positively impacts clients. We have been constantly providing excellent web solutions which is
          best in-class experience for our clients. <span className='text-dark'> We mainly focus on clients and their
            requirements.</span>
        </p>
        <div>
          <BrandButton text='about agency' />
        </div>
      </div>
      <div className='hidden md:flex items-end justify-center p-6 translate-x-[50%] duration-1000 group-hover:translate-x-[0%]'>
        <Header headerText="About" data-aos="fade-left" className='leading-35 text-[calc(50px+19vw)] lg:leading-45 lg:text-[calc(35px+13vw)] xl:leading-60 xl:text-[calc(50px+15vw)]' />
      </div>

    </div>

  </div>
</section>
);

export default AboutUs;
