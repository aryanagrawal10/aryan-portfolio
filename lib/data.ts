import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import remediwaveImg from '@/public/remediwaveImg.png'
import biblobazarImg from '@/public/biblobazarImg.png'
import coverkraftImg from '@/public/coverkraftImg.png'
import diversemindImg from '@/public/diversemindImg.png'
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
] as const

export const experiencesData = [
  {
    title: 'Graduated Jaypee University of Information Technology',
    location: 'Solan, India',
    description:
      "Earned my Bachelor's in Information Technology with foundational training in software engineering and computer science.",
    icon: React.createElement(LuGraduationCap),
    date: 'July 2017 – June 2021',
  },
  {
    title: 'Software Engineer – Vikreed Solutions',
    location: 'Pune, India',
    description:
      'Worked across backend, frontend, and integration for fintech, water management, and LMS platforms using Django, React, and APIs.',
    icon: React.createElement(CgWorkAlt),
    date: 'July 2021 – July 2023',
  },
  {
    title: 'Software Engineer Intern – Iris Software (LifeScan)',
    location: 'Edison, NJ',
    description:
      'Developed a GenAI-powered chatbot app and deployed scalable cloud infrastructure using AWS and Azure.',
    icon: React.createElement(FaReact),
    date: 'Summer 2024',
  },
  {
    title: 'Graduated Virginia Tech',
    location: 'Alexandria, VA',
    description:
      "Completed my Master's in Computer Science with a focus on full-stack development, cloud computing, and AI integration.",
    icon: React.createElement(LuGraduationCap),
    date: 'May 2025',
  },
] as const

export const projectsData = [
  {
    title: 'Remediwave',
    description:
      'Full-stack e-commerce site with Azure-powered AI features for user assistance and order automation.',
    tags: ['Django', 'PostgreSQL', 'Azure', 'JavaScript', 'Python', 'Ajax'],
    imageUrl: remediwaveImg,
  },
  {
    title: 'Biblobazar',
    description:
      'Online bookstore with custom UI, REST APIs, and MySQL backend for secure content handling.',
    tags: ['React', 'MySQL', 'Node.js', 'REST APIs', 'JAVA'],
    imageUrl: biblobazarImg,
  },
  {
    title: 'MyCoverKraft',
    description:
      'NLP-based tool to generate personalized cover letters using NLTK and Streamlit.',
    tags: ['Python', 'Streamlit', 'NLP', 'OpenAPI'],
    imageUrl: coverkraftImg,
  },
  {
    title: 'DiverseMind AI',
    description:
      'AI-powered platform to help K–12 educators personalize STEM instruction for neurodiverse learners using real-time lesson modifications and teaching feedback.',
    tags: ['React', 'FastAPI', 'LLMs', 'AI Agents'],
    imageUrl: diversemindImg,
  },
] as const

export const skillsData = [
  // Core Languages & Programming
  'Python',
  'Java',
  'JavaScript',
  'TypeScript',
  'C++',

  // Frontend
  'React',
  'Next.js',
  'Tailwind CSS',
  'HTML',
  'CSS',

  // Backend & APIs
  'Node.js',
  'Django',
  'Express',
  'FastAPI',
  'REST APIs',

  // Databases
  'PostgreSQL',
  'MySQL',
  'MongoDB',

  // Cloud & DevOps
  'AWS',
  'Azure',
  'Docker',
  'CI/CD',

  // Tools & Libraries
  'Git',
  'Redux',

  // AI/ML
  'NLP',
  'Prompt Engineering',
  'Machine learning',
] as const
