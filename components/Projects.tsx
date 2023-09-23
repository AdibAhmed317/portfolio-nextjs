import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className='text-center'>
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
