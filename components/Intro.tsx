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
          <motion.div>
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
    </section>
  );
};

export default Intro;
