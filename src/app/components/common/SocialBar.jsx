import React from 'react';
import BrandButton from './BrandButton';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';



const SocialBar = () => {
  return (
    <section className=' px-3 flex gap-5 py-40 md:py-5 justify-center   md:justify-start '>
        <Link href={'/'} className='text-2xl lg:text-3xl p-2 text- duration-150 text-dark md:text-light bg-brand md:bg-dark rounded-full hover:text-dark hover:bg-brand  active:bg-transparent'><FaFacebookF/></Link>
        <Link href={'/'} className='text-2xl lg:text-3xl p-2 text- duration-150 text-dark md:text-light bg-brand md:bg-dark rounded-full hover:text-dark hover:bg-brand  active:bg-transparent'><FaLinkedinIn/></Link>
        <Link href={'/'} className='text-2xl lg:text-3xl p-2 text- duration-150 text-dark md:text-light bg-brand md:bg-dark rounded-full hover:text-dark hover:bg-brand  active:bg-transparent'><FaTwitter/></Link>
        <Link href={'/'} className='text-2xl lg:text-3xl p-2 text- duration-150 text-dark md:text-light bg-brand md:bg-dark rounded-full hover:text-dark hover:bg-brand  active:bg-transparent'><FaInstagram/></Link>
        <Link href={'/'} className='text-2xl lg:text-3xl p-2 text- duration-150 text-dark md:text-light bg-brand md:bg-dark rounded-full hover:text-dark hover:bg-brand  active:bg-transparent'><FaFacebookF/></Link>
    </section>
  );
};

export default SocialBar;