import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { educationList, skillsList, strengths } from '../data/portfolioData';
import { GraduationCap, Award, Cpu, CheckCircle2 } from 'lucide-react';

export default function LoreSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Front-End', 'Back-End', 'Mobile', 'Database', 'Tools'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsList
    : skillsList.filter(s => s.category === selectedCategory || s.category === 'Language' || s.category === 'Architecture');

  return (
    <section className="relative w-full py-8 px-4 flex flex-col items-center">
      {/* Section Header (Matching "THE JOURNEY" in mockup) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-sand-muted block mb-1">
          Education & History
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif text-sand tracking-widest font-normal uppercase">
          THE JOURNEY
        </h2>
      </motion.div>

      {/* Vertical Connected Matcha Timeline (Matching The Lore screen) */}
      <div className="w-full max-w-lg relative pl-6 sm:pl-8 my-4 border-l border-matcha/30 space-y-8">
        {educationList.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative bg-sumi-card p-5 sm:p-6 rounded-2xl border border-sand-subtle shadow-xl hover:border-sand-muted/40 transition-all group"
          >
            {/* Timeline matcha dot node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-matcha border-2 border-[#111114] shadow-[0_0_12px_rgba(136,167,143,0.8)] group-hover:scale-125 transition-transform" />

            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-mono-code text-matcha font-medium">
                {edu.period}
              </span>
              <span className="text-[11px] text-sand-muted px-2 py-0.5 rounded-full bg-[#111114] border border-sand-subtle">
                {edu.tag}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif text-sand font-medium mb-1">
              {edu.degree}
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-300 font-medium mb-2">
              <GraduationCap className="w-4 h-4 text-matcha" />
              <span>{edu.institution}</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Skills Grid Section (Matching Skills section in mockup) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mt-10 pt-6 border-t border-sand-subtle"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-serif text-sand font-light">Skills</h3>
          <div className="flex items-center gap-1.5 text-xs text-sand-muted font-mono-code">
            <Cpu className="w-3.5 h-3.5 text-matcha" />
            <span>Core Competencies</span>
          </div>
        </div>

        {/* Skill Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1 rounded-full transition-all border ${
                selectedCategory === cat
                  ? 'bg-matcha text-[#111114] font-medium border-matcha shadow-sm'
                  : 'bg-sumi-card text-gray-400 border-sand-subtle hover:text-sand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Glowing Skill Badges (Styled matching pills in mockup) */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="px-3.5 py-1.5 rounded-full bg-sumi-card border border-matcha/40 text-xs text-sand font-medium shadow-md hover:border-matcha hover:shadow-[0_0_15px_rgba(136,167,143,0.3)] transition-all flex items-center gap-2 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-matcha" />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Personal Strengths Banner */}
        <div className="mt-8 p-4 rounded-xl bg-sumi-card/60 border border-sand-subtle">
          <div className="flex items-center gap-2 text-xs uppercase font-serif text-sand font-medium mb-2">
            <Award className="w-4 h-4 text-matcha" />
            <span>Key Strengths & Mindset</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-300">
            {strengths.map((str) => (
              <span key={str} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-matcha" />
                {str}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
