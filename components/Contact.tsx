'use client';

import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';

const Contact = () => {
  const { ref } = useSectionInView('Contact', 0.35);

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,39rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}>
      <SectionHeading title='Contact' />
      <p className='text-gray-700'>
        You can contact me directly at{' '}
        <a href='mailto:ahmedadib31@gmail.com' className='underline'>
          ahmedadib317@gmail.com{' '}
        </a>
        or use the form below.
      </p>

      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className='mt-10 flex flex-col'>
        <input
          name='senderEmail'
          className='h-14 rounded-lg border border-black/10 px-4'
          placeholder='Email'
          type='email'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          className='h-52 my-3 rounded-lg border border-black/10 p-4'
          placeholder='Message'
          required
          maxLength={500}
        />
        <button
          type='submit'
          className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all group 
          focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'>
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
