'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';

// Add/remove filenames here as you add certificate images to
// /public/images/certificates
const certificateImages = [
  '/images/certificates/cert1.jpg',
  '/images/certificates/cert2.jpg',
  '/images/certificates/cert3.jpg',
  '/images/certificates/cert4.jpg',
  '/images/certificates/cert5.jpg',
  '/images/certificates/cert6.jpg',
  '/images/certificates/cert7.jpg',
  '/images/certificates/cert8.jpg',
];

function CertificatesModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-5xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 shrink-0">
          <h3 className="text-xl font-bold text-slate-100">My Certifications</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-white transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable image grid */}
        <div className="overflow-y-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificateImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-800/50"
              >
                <Image
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 text-sm font-medium tracking-widest uppercase mb-4">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications
          </h2>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsOpen(true)}
          className="w-full flex flex-col items-center justify-center gap-3 py-12 px-6 rounded-2xl border-2 border-dashed border-primary-500/40 bg-slate-900/30 hover:bg-slate-900/60 hover:border-primary-500/70 transition-all duration-300 group"
        >
          <div className="p-4 rounded-full bg-primary-500/10 border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
            <Award size={28} className="text-primary-400" />
          </div>
          <span className="text-lg font-semibold text-slate-200">View My Certificates</span>
          <span className="text-sm text-slate-500">Click to browse all certifications</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && <CertificatesModal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}