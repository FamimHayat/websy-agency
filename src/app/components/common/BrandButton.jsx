import Link from 'next/link';
import React from 'react';

const BrandButton = ({ text = '', className = '', ...props }) => {
  return (
    <button
      className={`brandButtonHover bg-dark text-light! hover:text-dark!  p-2 ${className}`}
      {...props}
    >
      <Link
        href="/"
        className="relative z-10  text-lg font-semibold font-textFont "
      >
        {text}
      </Link>
    </button>
  );
};

export default BrandButton;
