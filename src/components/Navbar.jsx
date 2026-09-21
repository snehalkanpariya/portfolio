import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Feather, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Navbar({ activeSection, setActiveSection, viewMode, setViewMode }) {
  const sections = [
    { id: 'intro', label: 'INTRO' },
    { id: 'lore', label: 'THE LORE' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'letters', label: 'LETTERS' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#111114]/90 border-b border-sand-subtle px-4 sm:px-8 py-3.5 flex items-center justify-between">
      {/* Brand Logo & Name */}
      <div
        onClick={() => setActiveSection('intro')}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-xl bg-sumi-card border border-sand-subtle flex items-center justify-center text-sand group-hover:border-matcha transition-colors shadow-sm">
          <Feather className="w-4 h-4 text-matcha group-hover:rotate-12 transition-transform" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-serif font-medium tracking-wider text-sand uppercase">
            {personalDetails.name}
          </span>
          <span className="text-[10px] font-mono-code text-matcha tracking-widest uppercase">
            Front-End / Full-Stack
          </span>
        </div>
      </div>

      {/* Desktop Section Navigation Links */}
      <nav className="hidden md:flex items-center gap-1 sm:gap-2 bg-sumi-card px-3 py-1.5 rounded-full border border-sand-subtle shadow-inner">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            className={`relative px-4 py-1 rounded-full text-xs font-serif tracking-widest transition-all ${
              activeSection === sec.id
                ? 'text-sand font-medium'
                : 'text-gray-400 hover:text-sand-muted'
            }`}
          >
            {activeSection === sec.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-[#111114] rounded-full border border-sand-subtle shadow-sm -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span>{sec.label}</span>
          </button>
        ))}
      </nav>

      {/* Right Mode Switcher: Full Web View vs 4-Screen Mobile Phone Showcase */}
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-sumi-card p-1 rounded-full border border-sand-subtle">
          <button
            onClick={() => setViewMode('web')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
              viewMode === 'web'
                ? 'bg-sand text-[#111114] font-medium shadow'
                : 'text-gray-400 hover:text-sand'
            }`}
            title="Full Web View"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Web View</span>
          </button>

          <button
            onClick={() => setViewMode('mobile-grid')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
              viewMode === 'mobile-grid'
                ? 'bg-sand text-[#111114] font-medium shadow'
                : 'text-gray-400 hover:text-sand'
            }`}
            title="Interactive 4-Screen Mobile Mockup View (Reference Design)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mockup View</span>
          </button>
        </div>
      </div>
    </header>
  );
}
