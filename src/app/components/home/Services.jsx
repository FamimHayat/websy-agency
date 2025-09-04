import React from 'react';
import ServiceTag from '../service component/ServiceTag';

const Services = () => {
  return (
    <section className='px-3 py-10 md:py-15 lg:py-20 xl:py-25'>
        <div className="container ">
            <div className='grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-10'>
            <ServiceTag num={'01'} head={"Web design"} descript={'We create compelling web designs, which are the right-fit for your target groups.'} />
            <ServiceTag num={'02'} head={'Web development'} descript={'We create compelling web designs, which are the right-fit for your target groups.'} />
            <ServiceTag num={'03'} head={'eCommerce solutions'} descript={'We create compelling web designs, which are the right-fit for your target groups.'} /></div>
        </div>
    </section>
  );
};

export default Services;