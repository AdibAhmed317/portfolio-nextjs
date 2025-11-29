import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import alraya from '@/public/assets/Projects/alraya.png';
import carhub from '@/public/assets/Projects/carhub.png';
import roadsaints from '@/public/assets/Projects/expense.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'American International University-Bangladesh',
    location: 'Dhaka, Bangladesh',
    description:
      'I graduated after 4 years of studying in Computer Science and Engineering.',
    icon: React.createElement(LuGraduationCap),
    date: '2020',
  },
  {
    title: 'Front-End Developer',
    location: 'Dhaka, Bangladesh',
    description:
      'I worked as a front-end developer for 3 months as an intern. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: 'October 2023 - December 2023',
  },
  {
    title: 'Software Engineer',
    location: 'Chittagong, Bangladesh',
    description:
      "I'm now a full-stack software engineer at International Islamic University Chittagong. My stack includes React, React Native, Next.js, Nest.js, TypeScript, Tailwind, TypeORM, PostgreSQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: 'May 2024 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'KajSeeker',
    description:
      'KajSeeker is a modern freelancing and micro-job platform designed to connect global clients with skilled workers. I worked as the full-stack developer, building a fast, secure, and scalable system that helps users find work, complete tasks, and get paid seamlessly.',
    tags: ['Next.js', 'Nest.js', 'PostgreSQL', 'Tailwind', 'TypeORM'],
    imageUrl: roadsaints,
    type: 'full-stack',
    github: null,
    live: null,
  },
  {
    title: 'IIUC Website',
    description:
      'I worked on the IIUC website, building modern and responsive user interfaces and integrating them with the university’s existing backend APIs. The goal was to deliver a smooth, accessible, and reliable experience for students, faculty, and visitors.',
    tags: ['Next.js', 'Nest.js', 'PostgreSQL', 'Tailwind', 'TypeORM'],
    imageUrl: roadsaints,
    type: 'frontend',
    github: null,
    live: 'https://www.iiuc.ac.bd/',
  },
  {
    title: 'Zaitoon Academy (Student Panel)',
    description:
      'I developed the Zaitoon Academy Student Panel using React Native (Expo). The app features a colorful, child-friendly UI and integrates seamlessly with the existing backend APIs. It provides students with easy access to learning materials, results, attendance, and other essential school information.',
    tags: ['React Native', 'Expo', 'Mobile App', 'API Integration', 'UI/UX'],
    imageUrl: roadsaints,
    type: 'full-stack',
    github: null,
    live: null,
  },
  {
    title: 'RoadSaints (e-commerce)',
    description:
      'I worked as a full-stack developer on this project. This is a e-commerce website for bike accessories. The focus is to find best bike accessories for the bikers with a reasonable price.',
    tags: ['React', 'SQL Server Manager', 'Tailwind', 'ASP.Net Web Api'],
    imageUrl: roadsaints,
    type: 'full-stack',
    github: 'https://github.com/example/roadsaints',
    live: 'https://roadsaints.example.com',
  },
  {
    title: 'Al-Raya (e-commerce)',
    description:
      'This is a website for a company named Al-Raya. This is a e-commerce website for groceries. The focus is to find daily groceries and needs for customers with a resonable price.',
    tags: ['React', 'NodeJs', 'ExpressJs', 'Tailwind', 'Redux'],
    imageUrl: alraya,
    type: 'full-stack',
    github: 'https://github.com/example/alraya',
    live: null,
  },
  {
    title: 'CarHub',
    description:
      'This is a NextJs for getting all the information about your favourite cars. User can login or register. User can see all the details about searched car. User can book cars for rent with a user friendly user interface',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'RestAPI'],
    imageUrl: carhub,
    type: 'frontend',
    github: null,
    live: 'https://carhub.example.com',
  },
  {
    title: 'CarHub',
    description:
      'This is a NextJs for getting all the information about your favourite cars. User can login or register. User can see all the details about searched car. User can book cars for rent with a user friendly user interface',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'RestAPI'],
    imageUrl: carhub,
    type: 'frontend',
    github: null,
    live: null,
  },
] as const;

export const skillsData = [
  'JavaScript',
  'TypeScript',
  'C#',
  'C++',
  'php',
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Nest.js',
  'Node.js',
  'Git',
  'Tailwind',
  'TypeORM',
  'MongoDB',
  'asdf',
  'Redux',
  'Express',
  'PostgreSQL',
  'Framer Motion',
  'ASP.Net MVC',
] as const;
