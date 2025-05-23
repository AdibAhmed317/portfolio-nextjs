'use client';

import { useSectionInView } from '@/lib/hooks';
import React, { LegacyRef, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { ref } = useSectionInView('Contact', 0.35);
  const formRef: LegacyRef<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_y8i4avx',
          'template_m02y3bh',
          formRef.current,
          'JXEzyORxZ75-xbeXN'
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage('Your message has been sent successfully!');
            formRef.current?.reset();
          },
          (error) => {
            console.log(error.text);
            setMessage(
              'There was an error sending your message. Please try again.'
            );
          }
        );
    }
  };

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,39rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading title='Contact' />
      <p className='text-gray-700 dark:text-white/80'>
        You can contact me directly at{' '}
        <a href='mailto:ahmedadib31@gmail.com' className='underline'>
          adib.ah.official069@gmail.com
        </a>{' '}
        or use the form below.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          name='user_name'
          className='h-14 rounded-lg border border-black/10 px-4 my-2 darkModeForm'
          placeholder='Name'
          required
          maxLength={500}
        />
        <input
          name='user_subject'
          className='h-14 rounded-lg border border-black/10 px-4 my-2 darkModeForm'
          placeholder='Subject'
          required
          maxLength={500}
        />
        <input
          name='user_email'
          className='h-14 rounded-lg border border-black/10 px-4 my-2 darkModeForm'
          placeholder='Email'
          type='email'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          className='h-52 my-3 rounded-lg border border-black/10 p-4 darkModeForm'
          placeholder='Message'
          required
          maxLength={500}
        />
        <button
          type='submit'
          className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] dark:bg-white/20 bg-gray-900 text-white rounded-full outline-none transition-all group 
          focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
      {message && (
        <p className='mt-4 text-green-500 dark:text-green-400'>{message}</p>
      )}
    </motion.section>
  );
};

export default Contact;
