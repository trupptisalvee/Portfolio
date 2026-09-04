'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import * as THREE from 'three';

function ParticleField() {
  const count = 200;
  const mesh = useRef<THREE.Points>(null);

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#8b5cf6" transparent opacity={0.6} sizeAttenuation />
      </points>
    </Float>
  );
}

function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={3}>
      <mesh ref={mesh} position={position}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} className="absolute inset-0">
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#14b8a6" />
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      <ParticleField />
      <FloatingShape position={[-2, 1, -1]} color="#8b5cf6" />
      <FloatingShape position={[2, -1, -2]} color="#14b8a6" />
      <FloatingShape position={[0, 2, -3]} color="#a78bfa" />
    </Canvas>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0a0f]/50 via-transparent to-[#0a0a0f]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a0a0f]/30 via-transparent to-[#0a0a0f]/30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Profile Photo */}
          {/* TODO: Add Trupti's photo — replace /public/images/profile.jpg with a square headshot (min 500x500px) */}
          <div className="mx-auto mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-primary-500/30 p-1 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
            <Image
              src="/images/profile.jpg"
              alt="Trupti Salve"
              width={200}
              height={200}
              className="w-full h-full rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-primary-400 text-sm md:text-base font-medium mb-4 tracking-widest uppercase"
        >
          Computer Science Engineering Student
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient">Trupti Salve</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Building data-driven applications, REST APIs, and scalable backend systems with a passion for clean architecture and impactful software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <a href="https://linkedin.com/in/trupptiasalvee" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
          >
            <Linkedin size={20} className="text-slate-400 hover:text-primary-400" />
          </a>
          <a href="https://github.com/trupptisalvee" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
          >
            <Github size={20} className="text-slate-400 hover:text-primary-400" />
          </a>
          <a href="mailto:trupptias90@gmail.com"
            className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
          >
            <Mail size={20} className="text-slate-400 hover:text-primary-400" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-12"
        >
          <MapPin size={14} />
          <span>Pune, Maharashtra, India</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="animate-bounce"
        >
          <a href="#about" className="inline-block text-slate-500 hover:text-primary-400 transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
