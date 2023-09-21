'use client';

import Image from 'next/image';
import React from 'react';
import intro from '@/public/assets/intro.jpg';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section>
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
              className='rounded-full h-52 w-52 border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>
        </div>
      </div>

      <p>
        Hey there. I'm <span className='font-bold'> Adib Ahmed.</span> I'm a
        <span className='font-bold'> Full-Stack Developer</span> with
        <span className='font-bold'> 2 years</span> of experince. I enjoy
        building
        <span className='font-bold'>
          {' '}
          Web Applications & Mobile Applications
        </span>
        . My focus is{' '}
        <span className='font-bold'>
          React Js (Next Js) & NodeJs (Express Js & Nest Js)
        </span>
        .
      </p>
    </section>
  );
};

export default Intro;
