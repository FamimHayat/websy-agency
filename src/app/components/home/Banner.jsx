import React from 'react';


const Banner = () => {
  return (
    <section className="py-15 px-3 sm:px-0 overflow-hidden h-[calc(100vh-75px)] 
    ">
     
      <div>
        <h2 className="relative hidden sm:flex text-brand leading-80 md:leading-100 lg:leading-150 text-center text-[calc(20px+25vw)] sm:text-[calc(20px+30vw)] lg:text-[calc(20px+32vw)] text-shadow-extraLight font-headerFont ">
          <span data-aos="fade-right">we</span> b<span data-aos="fade-left">sy</span> 
          <span className='leading-10 sm:leading-15 lg:leading-20 inline-block absolute  text-[calc(15px+5vw)] md:text-[calc(10px+5vw)] text-dark/90 left-[20%]
        top-[40%] sm:left-[25%]  sm:top-[40%]   md:left-[30%]  md:top-[50%] text-center '>
          <span data-aos="fade-in" data-aos-duration={800}>we are creative</span><br/><span data-aos="fade-in" data-aos-duration={1500}>web agency</span>
          </span>
        </h2>

        <h2 className='relative sm:hidden text-[calc(50px+15vw)] font-headerFont text-center text-brand text-shadow-light'>websy</h2>
        <p className='sm:hidden pt-5 text-7xl font-textFont font-semibold text-center text-shadow-light'> we are creative <br/>web agency</p>
       
      </div>
    </section>
  );
};

export default Banner;
