'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'>
      <SectionHeading title={'About me'} />
      <p className=''>
        Welcome to my website my name is{' '}
        <span className='font-bold'> Adib Ahmed.</span> I am a recent Computer
        Science graduate who is highly motivated and pays great attention to
        detail. My passion lies in
        <span className='font-bold'> Software Development,</span> and I am
        excited to utilize my knowledge and skills to design captivating and
        user-friendly websites. I am actively seeking a stimulating role as a
        <span className='font-bold'> Web Developer,</span> where I can
        contribute to the progress and achievements of a forward-thinking
        organization.
      </p>
    </motion.section>
  );
};

export default About;
