import React from 'react';

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs'>
        &copy; All rights reserved to Adib Ahmed.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> Built with
        NextJs (App Router), TypeScript, TailwindCSS, Framer Motion
      </p>
    </footer>
  );
};

export default Footer;
