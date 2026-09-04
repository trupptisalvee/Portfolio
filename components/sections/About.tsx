'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Cpu, Wrench, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'Go'],
    color: 'from-primary-500 to-primary-600',
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    skills: ['Data Processing', 'Data Analysis', 'SQL', 'MongoDB', 'Data-Driven Apps'],
    color: 'from-accent-500 to-accent-600',
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    skills: ['ML Fundamentals', 'Applied Data Science', 'Model-Oriented Workflows'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Technologies',
    icon: Cpu,
    skills: ['REST APIs', 'React.js', 'Next.js', 'Node.js', 'Angular.js'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'Linux', 'AWS', 'Google Cloud', 'Azure', 'Vercel', 'Supabase'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Core CS',
    icon: Layers,
    skills: ['DSA', 'DBMS', 'OS', 'Computer Networks', 'Scalable Systems'],
    color: 'from-emerald-500 to-teal-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium tracking-widest uppercase mb-4">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the Future,{' '}
            <span className="text-gradient">One Line at a Time</span>
          </h2>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-12 items-center mb-20"
        >
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl border border-primary-500/20 p-1 bg-gradient-to-br from-primary-500/10 to-accent-500/10">
              {/* TODO: Add Trupti's photo — replace /public/images/profile.jpg with a square headshot (min 500x500px) */}
              <Image
                src="/images/profile.jpg"
                alt="Trupti Salve"
                width={300}
                height={300}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              Computer Science Engineering student with hands-on experience in software development, 
              data-driven applications, REST APIs, and scalable backend systems. Strong foundation in 
              Python, Machine Learning, Applied Data Science, data processing, and analytical problem-solving.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Experienced in backend development, database management, and building scalable application workflows.
              Currently pursuing B.Tech at PCET&apos;s Pimpri Chinchwad University, Pune, with a focus on building 
              impactful software solutions.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card-glow p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                <category.icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-200 mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-slate-800/50 text-slate-400 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
