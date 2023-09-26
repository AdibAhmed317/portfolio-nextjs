'use client';

import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('About');
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      id='about'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className='mb-28 md:mb-0 max-w-[45rem] text-center leading-8 scroll-mt-28 h-auto md:h-[35vh] justify-center items-center flex flex-col'>
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
