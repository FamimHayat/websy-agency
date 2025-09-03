import Image from 'next/image';
import React from 'react';

const About = () => {
return (
<section className='h-fit md:h-dvh py-10'>
  <div className=' w-full grid grid-cols-1 md:grid-cols-2 '>
    <div className=" w-full h-50 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/about-me.jpg')" }}>
  
</div>
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta quas expedita? Quibusdam dignissimos totam qui animi. Consequatur unde, repudiandae mollitia quisquam laborum, fuga omnis soluta quo optio porro minus?</div>
  </div>
</section>
);
};

export default About;