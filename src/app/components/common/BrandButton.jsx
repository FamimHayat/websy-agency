import Link from 'next/link';
import React from 'react';

const BrandButton = ({ text = '', className = '', ...props }) => {
  return (
    <button
        className={`relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden text-dark   group ${className}`}
      {...props}
    >
      <span className="absolute w-full h-full lg:w-10 lg:h-10 transition-all duration-500 ease-out bg-brand lg:rounded-full group-hover:w-56 group-hover:h-56" />
      


      <Link href={'/'} className="relative text-lg  font-semibold font-textFont text-dark text-shadow-2xs">{text}</Link>
    </button>
  );
};

export default BrandButton;
