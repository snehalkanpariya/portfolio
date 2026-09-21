import React from 'react';
import { motion } from 'framer-motion';
import OrigamiCraneCanvas from './OrigamiCraneCanvas';
import { personalDetails } from '../data/portfolioData';
import { Compass, Sparkles } from 'lucide-react';

export default function IntroSection({ onNavigate }) {
  return (
    <section className="relative w-full py-6 flex flex-col items-center justify-center text-center">
      {/* Serif Section Header (Matching mock "HELLO") */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-1"
      >
        <h1 className="text-5xl sm:text-7xl font-serif tracking-[0.2em] font-light text-sand uppercase my-2">
          HELLO
        </h1>
      </motion.div>

      {/* 3D Interactive Origami Crane Visual */}
      <OrigamiCraneCanvas />

      {/* Hero Bio Details (Snehal Kanpariya - Front End & Full Stack Developer) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-md px-4 mt-2 flex flex-col items-center gap-3"
      >
        <h2 className="text-2xl sm:text-3xl font-serif font-normal text-sand tracking-wide">
          I'm <span className="text-matcha font-medium">{personalDetails.name}</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-sm">
          {personalDetails.shortTagline}
        </p>

        <div className="flex items-center gap-2 mt-1">
          <span className="inline-block w-2 h-2 rounded-full bg-matcha animate-ping" />
          <span className="text-xs text-matcha font-medium tracking-wide">
            {personalDetails.status}
          </span>
        </div>

        {/* Quick Navigation Pills (Matching [ Lore ] [ Projects ] [ Letters ] in mockup) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(226, 206, 184, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('lore')}
            className="px-4 sm:px-5 py-2 rounded-full bg-sumi-card border border-sand-subtle text-xs sm:text-sm text-sand tracking-widest font-serif hover:text-white transition-all shadow-lg"
          >
            [ Lore ]
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(226, 206, 184, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('portfolio')}
            className="px-4 sm:px-5 py-2 rounded-full bg-sumi-card border border-sand-subtle text-xs sm:text-sm text-sand tracking-widest font-serif hover:text-white transition-all shadow-lg"
          >
            [ Projects ]
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(226, 206, 184, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('letters')}
            className="px-4 sm:px-5 py-2 rounded-full bg-sumi-card border border-sand-subtle text-xs sm:text-sm text-sand tracking-widest font-serif hover:text-white transition-all shadow-lg"
          >
            [ Letters ]
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
