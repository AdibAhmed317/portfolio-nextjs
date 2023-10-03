'use client';

import Image from 'next/image';
import React from 'react';
import intro from '@/public/assets/intro.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.1);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 md:mb-0 max-w-[50rem] text-center sm:mb-0 scroll-mt-36 h-auto md:h-[41vh] mt-auto md:mt-28'>
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

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-10 mt-4 px-4 text-lg md:text-xl font-normal !leading-[1.5]'>
        Hey there. I'm <span className='font-bold'> Adib Ahmed.</span> I'm a
        <span className='font-bold'> Full-Stack Developer</span> with
        <span className='font-bold'> 2 years</span> of experince. I enjoy
        building
        <span className='font-bold italic'>
          {' '}
          Web Applications & Mobile Applications
        </span>
        . My focus is{' '}
        <span className='font-bold underline'>
          React Js (Next Js) & NodeJs (Express Js & Nest Js).
        </span>
      </motion.h1>

      <div className='flex flex-col md:flex-row gap-3 items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex flex-col md:flex-row gap-3'>
          <Link
            href='#contact'
            className='group bg-gray-950 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}>
            Get in touch
            <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' />
          </Link>
          <a
            href='/CV.pdf'
            download={true}
            className='group bg-white text-black px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition darkSetting'>
            Download CV
            <HiDownload className='opacity-70 group-hover:translate-y-1 transition' />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex justify-center items-center gap-5'>
          <a
            target='_blank'
            href='https://www.facebook.com/Adib.Ahmed317/'
            className='bg-white text-gray-700 px-3 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-125 active:scale-105 transition darkSetting'>
            <BsFacebook />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/adib-ahmed/'
            className='bg-white text-gray-700 px-3 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-125 active:scale-105 transition darkSetting'>
            <BsLinkedin />
          </a>
          <a
            target='_blank'
            href='https://github.com/AdibAhmed317'
            className='bg-white text-gray-700 px-3 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-125 active:scale-105 transition darkSetting'>
            <BsGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
