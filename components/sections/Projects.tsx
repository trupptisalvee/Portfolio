'use client';

import { motion } from 'framer-motion';
import { Github, Code2, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Rehearse360',
    subtitle: 'AI-Powered Interview Simulation Platform',
    description: 'Simulates realistic interview scenarios across 4 roles (Software Developer, Data Analyst, Product Manager, Marketing Specialist) with skill-level selection, contextual questions, and automatic scoring with detailed feedback.',
    highlights: [
      'Role- and skill-level-based question sets with real-time typing animations and progress tracking',
      'Intelligent feedback engine scoring responses and surfacing strengths/improvement areas per question',
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
    github: 'https://github.com/trupptisalvee/Rehearse360',
    demo: 'https://v0-ai-interview-module.vercel.app',
    featured: true,
  },
  {
    title: 'URL Health Monitor',
    subtitle: 'Go',
    description: 'Concurrent URL health monitoring using Go goroutines for parallel endpoint checks. Collects HTTP status codes and latency.',
    highlights: [
      'Uses channels and WaitGroups for synchronization',
      'Reduced endpoint check time by 80% vs. sequential processing',
    ],
    tech: ['Go', 'Goroutines', 'net/http', 'Concurrency'],
    github: 'https://github.com/trupptisalvee/Current-Url_Monitor',
    demo: 'https://curlsc.vercel.app/',
    featured: true,
  },

  {
    title: 'Sarthi-AI',
    subtitle: 'Python',
    description: 'AI-powered utility application built with Python, showcasing skills in machine learning workflows and data processing.',
    highlights: ['Python-based solution', 'ML-powered functionality'],
    tech: ['Python', 'AI/ML'],
    github: 'https://github.com/trupptisalvee/Sarthi-AI',
    featured: false,
  },
  {
    title: 'Codefloww',
    subtitle: 'HTML',
    description: 'A clean, functional web project demonstrating frontend development fundamentals and structured HTML/CSS implementation.',
    highlights: ['HTML/CSS', 'Frontend fundamentals'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/trupptisalvee/codefloww',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium tracking-widest uppercase mb-4">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured{' '}
            <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-glow relative rounded-2xl p-6 border transition-all duration-300 ${
                project.featured
                  ? 'bg-slate-900/50 border-slate-800/50 hover:border-primary-500/30'
                  : 'bg-slate-900/30 border-slate-800/30 hover:border-primary-500/20'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Code2 size={16} className="text-primary-400" />
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{project.subtitle}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200">{project.title}</h3>
                </div>
                {/* relative z-10 keeps these clickable above the card-glow hover overlay */}
                <div className="relative z-10 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-primary-500/10 border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300"
                    >
                      <Github size={16} className="text-slate-400" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-accent-500/10 border border-slate-700/50 hover:border-accent-500/30 transition-all duration-300"
                    >
                      <Globe size={16} className="text-slate-400" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-4">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-500 text-sm">
                    <span className="w-1 h-1 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}