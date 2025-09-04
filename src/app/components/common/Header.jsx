import React from 'react';

const Header = ({ headerText, className = '', ...props }) => {
  return (
    <div className=''>
      <div
        className={`sm:pl-5 w-fit mx-auto tracking-tight  text-center sm:text-left font-headerFont text-brand ${className}`}
        {...props}
      >
        {headerText}
      </div>
    </div>
  );
};

export default Header;
