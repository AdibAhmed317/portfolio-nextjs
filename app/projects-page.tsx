'use client';

import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { projectsData } from '../lib/data';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  return (
    <section className='text-center scroll-mt-28 mb-28'>
      <SectionHeading title='All Projects' />
      <div className='flex flex-col items-center gap-12 mt-8 w-full'>
        {projectsData.map((project, index) => (
          <div key={index} className='w-full max-w-[56rem]'>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
