import React from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';

type ProjectInfoProps = (typeof projectsData)[number];

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectInfoProps) => {
  return (
    <>
      <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden pr-0 md:pr-8'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className='flex flex-wrap'>
          {tags.map((tag, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
              key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <Image src={imageUrl} alt='project image' quality={95} />
      </section>
    </>
  );
};

export default ProjectCard;
