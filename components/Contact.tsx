'use client';

import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const { ref } = useSectionInView('Contact', 0.35);

  return (
    <section id='contact' ref={ref} className=''>
      <SectionHeading title='Contact' />
      <p>
        You can contact me directly at{' '}
        <a href='mailto:ahmedadib31@gmail.com' className='underline'>
          ahmedadib317@gmail.com
        </a>
        or use the form below.
      </p>
    </section>
  );
};

export default Contact;
