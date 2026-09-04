'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: "PCET's Pimpri Chinchwad University",
    location: 'Pune, Maharashtra',
    period: 'Aug 2023 – Present (Class of 2027)',
    highlights: [
      'Pursuing comprehensive curriculum in computer science fundamentals',
      'Focus areas: Software Development, Data Science, Machine Learning',
      'Active involvement in coding projects and technical initiatives',
    ],
  },
];

const achievements = [
  {
    title: 'Hackathon Participation',
    description: 'Participated in multiple hackathons building full-stack solutions under time constraints',
  },
  {
    title: 'Open Source Contributor',
    description: 'Active GitHub portfolio with multiple repositories showcasing diverse technical skills',
  },
  {
    title: 'Technical Blogging',
    description: 'Sharing learnings in Go, Python, and full-stack development through project documentation',
  },
];

export default function Achievements() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium tracking-widest uppercase mb-4">Education & Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Academic{' '}
            <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary-400" />
              Education
            </h3>

            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-primary-500/30 transition-all duration-300 card-glow"
              >
                <h4 className="text-lg font-semibold text-slate-200 mb-2">{edu.degree}</h4>
                <p className="text-primary-400 text-sm font-medium mb-3">{edu.institution}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
              <Trophy size={20} className="text-accent-400" />
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-accent-500/30 transition-all duration-300 card-glow"
                >
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">{achievement.title}</h4>
                  <p className="text-slate-400 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
