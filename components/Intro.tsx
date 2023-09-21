'use client';

import Image from 'next/image';
import React from 'react';
import intro from '@/public/assets/intro.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}>
            <Image
              src={intro}
              alt='dp'
              height={200}
              width={300}
              quality={95}
              priority={true}
              className='rounded-full h-48 w-48 border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-10 mt-4 px-4 text-lg md:text-xl font-normal !leading-[1.5]'>
        Hey there. I'm <span className='font-bold'> Adib Ahmed.</span> I'm a
        <span className='font-bold'> Full-Stack Developer</span> with
        <span className='font-bold'> 2 years</span> of experince. I enjoy
        building
        <span className='font-bold'>
          {' '}
          Web Applications & Mobile Applications
        </span>
        . My focus is{' '}
        <span className='font-bold underline'>
          React Js (Next Js) & NodeJs (Express Js & Nest Js).
        </span>
      </motion.p>

      <div className='flex flex-col md:flex-row gap-3 items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex flex-col md:flex-row gap-3'>
          <Link
            href='#contact'
            className='bg-gray-950 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'>
            Get in touch <BsArrowRight />
          </Link>
          <a
            href=''
            className='bg-white text-black px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110'>
            Download CV <HiDownload />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex justify-center items-center gap-5'>
          <a
            target='_blank'
            href='https://www.facebook.com/Adib.Ahmed317/'
            className='bg-white text-gray-700 px-3 py-3 flex items-center justify-center gap-2 rounded-full'>
            <BsFacebook />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/adib-ahmed/'
            className='bg-white text-gray-700 px-3 py-3 flex items-center justify-center gap-2 rounded-full'>
            <BsLinkedin />
          </a>
          <a
            target='_blank'
            href='https://github.com/AdibAhmed317'
            className='bg-white text-gray-700 px-3 py-3 flex items-center justify-center gap-2 rounded-full'>
            <BsGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
