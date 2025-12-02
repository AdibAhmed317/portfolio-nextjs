'use client';

import React, { useState } from 'react';
import SectionHeading from '../../components/SectionHeading';
import { projectsData } from '../../lib/data';
import ProjectCard from '../../components/ProjectCard';
import { useRouter } from 'next/navigation';

const TABS = [
  { label: 'Full-Stack', value: 'full-stack' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
];

const ProjectsPage = () => {
  const router = useRouter();
  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const [selectedTab, setSelectedTab] = useState('full-stack');
  const filteredProjects = projectsData.filter(
    (project) => project.type === selectedTab
  );

  return (
    <section className='text-center scroll-mt-28 mb-28'>
      <button
        onClick={handleBack}
        className='fixed top-4 left-4 z-[1000] inline-flex items-center gap-2 rounded-md border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm backdrop-blur transition hover:bg-black hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
        aria-label='Go back'
      >
        ← Back
      </button>
      <SectionHeading title='Projects I’ve Worked On' />
      <div className='flex justify-center gap-2 mt-6 mb-10 flex-wrap'>
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelectedTab(tab.value)}
            className={`px-4 py-2 rounded-full font-semibold border transition-all duration-200 text-sm
              ${
                selectedTab === tab.value
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                  : 'bg-gray-200 text-black dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='flex flex-col items-center gap-6 mt-8 w-full'>
        {filteredProjects.length === 0 ? (
          <div className='text-lg text-gray-500 dark:text-gray-400'>
            No projects found for this category.
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className='w-full max-w-[56rem] px-2 sm:px-4 lg:px-8'
            >
              <ProjectCard variant='wide' {...project} />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
