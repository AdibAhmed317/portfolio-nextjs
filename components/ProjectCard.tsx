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
        <section className='text-start bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 border border-black/5 overflow-hidden rounded-xl dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black dark:border-white/10 min-h-[36rem] w-full max-w-screen-xl mx-auto'>
          <Image
            src={imageUrl}
            alt='project image'
            quality={95}
            className='w-full h-64 sm:h-80 md:h-[28rem] object-cover'
            priority={false}
          />
          <div className='p-6 md:p-10'>
            <h3 className='text-2xl font-bold text-black dark:text-white mb-2 tracking-tight'>
              {title}
            </h3>
            <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-200'>
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
        <section className='text-start bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 md:max-w-[47rem] border border-black/5 overflow-hidden pr-0 md:pr-8 relative min-h-[32rem] md:h-[32rem] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-xl dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-900'>
          {/* Mobile stacked layout */}
          <div className='block sm:hidden'>
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className='w-full h-48 object-cover rounded-t-xl'
            />
            <div className='px-5 py-6'>
              <h3 className='text-xl font-bold text-black dark:text-white mb-2 tracking-tight'>
                {title}
              </h3>
              <p className='mt-2 mb-4 leading-relaxed text-gray-700 dark:text-gray-200'>
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
            <div className='pt-4 pb-7 px-5 pl-0 pr-0 sm:pt-0 md:pl-10 md:pr-2 md:pt-10 max-w-[60%] md:max-w-[50%] flex flex-col h-full group-even:ml-[8rem] md:group-even:ml-[22rem]'>
              <h3 className='text-2xl font-bold text-black dark:text-white mb-2 tracking-tight'>
                {title}
              </h3>
              <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-50'>
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
              className='absolute top-[40px] -right-60 md:-right-80 h-full w-auto md:h-full md:w-[40rem] rounded-xl shadow-2xl group-even:right-80 group-even:-left-60 md:group-even:-left-80 transition-all duration-300 group-hover:-translate-x-5 group-hover:translate-y-5 group-hover:-rotate-3 group-even:group-hover:translate-x-5 group-even:group-hover:translate-y-5 group-even:group-hover:rotate-3 group-hover:scale-105'
            />
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default ProjectCard;
