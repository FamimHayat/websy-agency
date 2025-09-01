import React from 'react';


const Banner = () => {
  return (
    <section className="py-15 px-3 sm:px-0 overflow-hidden ">
     
      <div>
        <h2 className="relative hidden sm:flex text-brand leading-80 md:leading-100 lg:leading-150 text-center text-[calc(20px+25vw)] sm:text-[calc(20px+30vw)] lg:text-[calc(20px+32vw)] text-shadow-extraLight font-headerFont ">
          websy <span className='leading-10 sm:leading-15 lg:leading-20 inline-block absolute  text-[calc(15px+5vw)] md:text-[calc(10px+5vw)] text-dark left-[20%]
top-[40%] sm:left-[25%]  sm:top-[40%]   md:left-[30%]  md:top-[50%] text-center '>we are creative <br/>web agency</span>
        </h2>

        <h2 className='sm:hidden text-8xl font-headerFont text-center text-brand text-shadow-light'>websy</h2>
        <p className='sm:hidden pt-10 text-7xl font-textFont font-semibold text-center text-shadow-light'> we are creative <br/>web agency</p>
       
      </div>
    </section>
  );
};

export default Banner;
