import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import alraya from '@/public/assets/Projects/alraya.png';
import carhub from '@/public/assets/Projects/carhub.png';
import roadsaints from '@/public/assets/Projects/expense.png';
import kajseeker from '@/public/assets/Projects/kajseeker.png';
import iiucwebsite from '@/public/assets/Projects/iiucwebsite.png';
import zasp from '@/public/assets/Projects/zasp.png';
import albasmart from '@/public/assets/Projects/albasmart.png';
import cogmatt from '@/public/assets/Projects/cogmatt.png';
import realestate from '@/public/assets/Projects/real-estate.png';
import uftbd from '@/public/assets/Projects/uftbd.png';

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
    imageUrl: kajseeker,
    type: 'full-stack',
    github: null,
    live: null,
  },
  {
    title: 'IIUC Website',
    description:
      'I worked on the IIUC website, building modern and responsive user interfaces and integrating them with the university’s existing backend APIs. The goal was to deliver a smooth, accessible, and reliable experience for students, faculty, and visitors.',
    tags: ['React Router V7', 'SSR', 'Husky', 'Github actions'],
    imageUrl: iiucwebsite,
    type: 'frontend',
    github: null,
    live: 'https://www.iiuc.ac.bd/',
  },
  {
    title: 'Zaitoon Academy (Student Panel)',
    description:
      'I developed the Zaitoon Academy Student Panel using React Native (Expo). The app features a colorful, child-friendly UI and integrates seamlessly with the existing backend APIs. It provides students with easy access to learning materials, results, attendance, and other essential school information.',
    tags: ['React Native', 'Expo', 'Mobile App', 'API Integration', 'UI/UX'],
    imageUrl: zasp,
    type: 'mobile',
    github: null,
    live: 'https://play.google.com/store/apps/details?id=com.adib317.zaitoonacademy&pcampaignid=web_share',
  },
  {
    title: 'Albas Mart (e-commerce)',
    description:
      'This is a website for a company named Albas Mart. This is a e-commerce website for groceries. The focus is to find daily groceries and needs for customers with a resonable price.',
    tags: ['React', 'NodeJs', 'ExpressJs', 'Tailwind', 'MongoDB'],
    imageUrl: albasmart,
    type: 'full-stack',
    github: 'https://github.com/example/alraya',
    live: 'https://albasmart.vercel.app',
  },
  {
    title: 'Cogmatt',
    description:
      'Cogmatt is a full-stack content generation and management platform built with TanStack Start and Hono. I implemented clean architecture principles across the frontend and backend, with PostgreSQL powering the database layer.',
    tags: [
      'Tanstack Start',
      'Clean Architecture',
      'Hono',
      'PostgreSQL',
      'Tailwind',
    ],
    imageUrl: cogmatt,
    type: 'full-stack',
    github: null,
    live: null,
  },
  {
    title: 'Real Estate',
    description:
      'Real Estate Matcher is a full-stack property investment analysis platform built with Next.js, React, and TypeScript. I implemented personalized financial algorithms and dynamic reporting, using authentic property data and client profiles to deliver ranked recommendations, break-even analysis, and exportable investment reports.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    imageUrl: realestate,
    type: 'full-stack',
    github: null,
    live: 'https://real-estate-zeta-blue-64.vercel.app',
  },
  {
    title: 'Unique Façade',
    description:
      'Unique Façade is a modern landing page designed for a glass company. I built a clean, responsive, and visually appealing interface to showcase their products and services effectively.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    imageUrl: uftbd,
    type: 'frontend',
    github: null,
    live: 'https://uftbd.com',
  },
  {
    title: 'Newsdeck',
    description:
      'Newsdeck is a React Native app that lists all major Bangladeshi newspapers in one place. I built a simple, fast interface and used WebView to load each newspaper’s website directly inside the app for a smooth reading experience.',
    tags: ['React Native', 'WebView', 'CLI'],
    imageUrl: carhub,
    type: 'mobile',
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
  'React',
  'Next.js',
  'React Router V7',
  'Tanstack Start',
  'Node.js',
  'Nest.js',
  'Express.js',
  'Git',
  'Tailwind',
  'TypeORM',
  'MongoDB',
  'PostgreSQL',
  'Framer Motion',
  'ASP.Net MVC',
] as const;
