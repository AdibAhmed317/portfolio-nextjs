'use client';

import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import ProjectCard from './ProjectCard';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Projects');
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id='projects' className='text-center scroll-mt-28'>
      <SectionHeading title='My Projects' />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
