'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Software Engineer</span> with 3+
        years of professional experience and a Master’s degree in Computer
        Science from <span className="font-medium">Virginia Tech</span>. My
        expertise lies in{' '}
        <span className="font-medium">
          full-stack development, cloud infrastructure, and Generative AI
        </span>
        . I've delivered impactful software in the fintech, education, and
        environmental sectors using technologies like{' '}
        <span className="font-medium">
          React, Next.js, Django, Node.js, and AWS
        </span>
        .
      </p>

      <p>
        <span className="italic">What drives me</span> is creating intelligent,
        scalable software that improves productivity and user experience. I
        thrive in solving complex problems, optimizing systems, and deploying
        end-to-end solutions. I'm currently seeking{' '}
        <span className="font-medium">full-time opportunities</span> in software
        engineering and AI-driven development.
      </p>
    </motion.section>
  )
}
