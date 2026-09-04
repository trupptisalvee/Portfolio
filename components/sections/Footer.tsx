'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let&apos;s{' '}
            <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-200 mb-6">
              Let&apos;s work together on something amazing.
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:trupptias90@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-primary-500/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
                <Mail size={20} className="text-primary-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                <p className="text-slate-300 group-hover:text-primary-400 transition-colors">trupptias90@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919975181512"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-primary-500/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-accent-500/10 border border-accent-500/20 group-hover:bg-accent-500/20 transition-colors">
                <Phone size={20} className="text-accent-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Phone</p>
                <p className="text-slate-300 group-hover:text-accent-400 transition-colors">+91 9975181512</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
                <MapPin size={20} className="text-primary-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                <p className="text-slate-300">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <a
              href="https://linkedin.com/in/trupptiasalvee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
            >
              <Linkedin size={20} className="text-slate-400 hover:text-primary-400" />
            </a>
            <a
              href="https://github.com/trupptisalvee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
            >
              <Github size={20} className="text-slate-400 hover:text-primary-400" />
            </a>
          </div>
        </motion.div>

        {/* Footer bottom */}
        <div className="mt-24 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Trupti Salve. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}