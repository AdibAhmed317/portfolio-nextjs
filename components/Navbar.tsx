'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed bottom-0 md:top-0 mt-0 mb-5 md:mt-10 left-1/2 h-[4.5rem] w-full rounded-full border
       border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg 
       shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.2rem] sm:w-[36rem] sm:rounded-full'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}></motion.div>
    </header>
  );
};

export default Navbar;
