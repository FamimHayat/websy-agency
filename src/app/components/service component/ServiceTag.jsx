import React from 'react';

const ServiceTag = ({ num, head, descript }) => {
  return (
    <div className="relative flex flex-col justify-start">
      <p className="sm:absolute sm:top-[-20%] sm:left-[10%] md:top-[-20%] md:left-[10%] lg:top-[-20%] lg:left-[20%] z-0 text-[60px] sm:text-[70px] md:text-[100px] lg:text-[130px] xl:text-[180px] font-headerFont font-semibold textBordered">
        {num}
      </p>

      <div className="relative z-10 sm:pt-12">
        <h3 className="text-2xl lg:text-3xl text-dark/70 font-headerFont text-shadow-extraLight">
          {head}
        </h3>
        <p className="pt-3 text-lg text-dark/80 font-textFont sm:max-w-xs">
          {descript}
        </p>
      </div>
    </div>
  );
};

export default ServiceTag;
