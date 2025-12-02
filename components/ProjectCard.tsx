'use client';

import React, { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';

type ProjectInfoProps = (typeof projectsData)[number];
type ProjectCardProps = ProjectInfoProps & { variant?: 'default' | 'wide' };

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  variant = 'default',
  github,
  live,
}: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 2'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      className='group mb-3 sm:mb-8 last:mb-0'
      style={{
        scale: variant === 'wide' ? 1 : (scaleProgress as unknown as number),
        opacity:
          variant === 'wide' ? 1 : (opacityProgress as unknown as number),
      }}
    >
      {variant === 'wide' ? (
        <section className='text-start bg-white border border-black/[0.1] overflow-hidden rounded-xl dark:bg-white/10 h-[38rem] w-full flex flex-col'>
          <Image
            src={imageUrl}
            alt='project image'
            quality={95}
            className='w-full h-64 sm:h-72 md:h-80 object-cover'
            priority={false}
          />
          <div className='p-8 md:p-5 flex flex-col justify-center flex-1'>
            <h3 className='text-xl font-normal text-black dark:text-white mb-2 tracking-tight'>
              {title}
            </h3>
            <p className='mt-3 leading-relaxed text-sm text-gray-700 dark:text-gray-200'>
              {description}
            </p>
            <div>
              <div className='my-5 flex gap-2'>
                {github && (
                  <a
                    target='_blank'
                    href={github}
                    className='px-3 py-1 text-[0.8rem] font-semibold uppercase tracking-wider rounded-full shadow transition bg-gray-900 text-white hover:bg-gray-700 dark:bg-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black'
                  >
                    Github
                  </a>
                )}
                {live && (
                  <a
                    target='_blank'
                    href={live}
                    className='px-3 py-1 text-[0.8rem] font-semibold uppercase tracking-wider rounded-full shadow transition bg-white text-black hover:bg-gray-900 hover:text-white dark:bg-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black'
                  >
                    Live Link
                  </a>
                )}
              </div>
              <ul className='flex flex-wrap mt-4 gap-2 md:mt-auto'>
                {tags.map((tag, index) => (
                  <li
                    className='bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full shadow'
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <section className='text-start bg-white border border-black/[0.1] md:max-w-[47rem] overflow-hidden pr-0 md:pr-8 relative h-[36rem] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-xl dark:bg-white/10 flex flex-col'>
          {/* Mobile stacked layout */}
          <div className='block sm:hidden'>
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className='w-full h-64 object-cover rounded-t-xl'
            />
            <div className='px-5 py-6 flex flex-col justify-between flex-1'>
              <h3 className='text-lg font-normal text-black dark:text-white mb-2 tracking-tight'>
                {title}
              </h3>
              <p className='mt-3 mb-4 leading-relaxed text-sm text-gray-700 dark:text-gray-200'>
                {description}
              </p>
              <div className='my-3 flex gap-2'>
                {github && (
                  <a
                    target='_blank'
                    href={github}
                    className='bg-white/[0.85] px-3 py-1 text-[0.8rem] font-semibold uppercase tracking-wider text-black rounded-full shadow hover:bg-black hover:text-white transition dark:bg-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black'
                  >
                    Github
                  </a>
                )}
                {live && (
                  <a
                    target='_blank'
                    href={live}
                    className='bg-black/[0.85] px-3 py-1 text-[0.8rem] font-semibold uppercase tracking-wider text-white rounded-full shadow hover:bg-white hover:text-black transition dark:bg-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black'
                  >
                    Live Link
                  </a>
                )}
              </div>
              <ul className='flex flex-wrap mt-4 gap-2 md:mt-auto'>
                {tags.map((tag, index) => (
                  <li
                    className='bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full shadow'
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Desktop layout unchanged */}
          <div className='hidden sm:block'>
            <div className='pt-4 pb-7 px-6 py-8 sm:pt-0 md:pl-12 md:pr-4 max-w-[70%] md:max-w-[60%] flex flex-col justify-between h-full group-even:ml-[8rem] md:group-even:ml-[22rem]'>
              <h3 className='text-xl font-normal text-black dark:text-white mb-2 tracking-tight'>
                {title}
              </h3>
              <p className='mt-3 leading-relaxed text-sm text-gray-700 dark:text-gray-50'>
                {description}
              </p>
              <div>
                <div className='my-5 flex gap-2'>
                  {github && (
                    <a
                      target='_blank'
                      href={github}
                      className='bg-white/[0.85] px-3 py-1 text-[0.8rem] font-semibold uppercase tracking-wider text-black rounded-full shadow hover:bg-black hover:text-white transition dark:bg-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black'
                    >
                      Github
                    </a>
                  )}
                  {live && (
                    <a
                      target='_blank'
                      href={live}
                      className='bg-black/[0.85] px-3 py-1 text-[0.8rem] font-semibold uppercase tracking-wider text-white rounded-full shadow hover:bg-white hover:text-black transition dark:bg-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black'
                    >
                      Live Link
                    </a>
                  )}
                </div>
                <ul className='flex flex-wrap mt-4 gap-2 md:mt-auto'>
                  {tags.map((tag, index) => (
                    <li
                      className='bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full shadow'
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Image
              src={imageUrl}
              alt='project image'
              quality={95}
              className='absolute top-[36px] -right-20 md:-right-32 h-[26rem] w-auto md:h-[28rem] md:w-[40rem] rounded-xl shadow-2xl group-even:right-20 group-even:-left-20 md:group-even:-left-32 transition-all duration-300 group-hover:-translate-x-5 group-hover:translate-y-5 group-hover:-rotate-3 group-even:group-hover:translate-x-5 group-even:group-hover:translate-y-5 group-even:group-hover:rotate-3 group-hover:scale-105'
            />
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default ProjectCard;
