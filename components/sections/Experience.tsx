'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Pune Maha Metro Rail Corporation',
    location: 'Pune, Maharashtra',
    period: 'May 2026 – June 2026',
    highlights: [
      'Developed web portal modules using React.js, Node.js, and PostgreSQL for data-driven organizational workflows.',
      'Built department inbox systems, dashboards, and data tables with REST API integration.',
      'Worked with SQL queries and database connectivity to retrieve, process, and present application data.',
      'Collaborated on application development tasks involving structured data handling, debugging, and problem-solving.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium tracking-widest uppercase mb-4">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Where I&apos;ve{' '}
            <span className="text-gradient">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 border-4 border-[#0a0a0f] transform -translate-x-1/2 -translate-y-1/2 z-10" />

              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-primary-500/30 transition-all duration-300 card-glow">
                  <div className="flex items-center gap-2 text-primary-400 mb-2">
                    <Briefcase size={16} />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">{exp.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
