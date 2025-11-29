'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import ProjectCard from './ProjectCard';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.25);

  // Pagination logic
  const [currentPage, setCurrentPage] = React.useState(1);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const paginatedProjects = projectsData.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <section ref={ref} id='projects' className='text-center scroll-mt-28 mb-28'>
      <SectionHeading title='Projects I’ve Worked On' />
      <div className='flex flex-wrap justify-center gap-8 mt-8'>
        {paginatedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 w-full px-2'>
        <div className='flex flex-row sm:flex-row gap-2 w-full sm:w-auto'>
          <button
            className='w-full sm:w-auto px-4 py-2 bg-gray-200 dark:bg-white/20 rounded hover:bg-gray-300 dark:hover:bg-white/30 transition text-base sm:text-sm'
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className='w-full sm:w-auto px-4 py-2 bg-gray-200 dark:bg-white/20 rounded hover:bg-gray-300 dark:hover:bg-white/30 transition text-base sm:text-sm'
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <span className='text-lg font-semibold mt-2 sm:mt-0'>
          Page {currentPage} of {totalPages}
        </span>
        <a
          href='/projects-page'
          className='w-full sm:w-auto mt-2 sm:mt-0 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200 text-center'
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default Projects;
