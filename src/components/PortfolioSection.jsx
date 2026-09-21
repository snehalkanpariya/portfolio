import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsList, projectCategories } from '../data/portfolioData';
import { ExternalLink, Layers, X, Sparkles, Code2, Server, Database, Smartphone } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <section className="relative w-full py-8 px-4 flex flex-col items-center">
      {/* Header matching "SELECTED WORKS" in reference mockup */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-sand-muted block mb-1">
          Featured Engineering
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif text-sand tracking-widest font-normal uppercase">
          SELECTED WORKS
        </h2>
      </motion.div>

      {/* Filter Tabs: All | Full-Stack | Python / Django | Software */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs sm:text-sm px-4 py-1.5 rounded-full transition-all ${
              activeCategory === cat
                ? 'bg-sand text-[#111114] font-medium shadow-md'
                : 'text-gray-400 hover:text-sand bg-sumi-card border border-sand-subtle'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl bg-sumi-card border border-sand-subtle overflow-hidden flex flex-col justify-between shadow-2xl hover:border-sand-muted/50 transition-all"
          >
            {/* Visual Header Mockup Card */}
            <div className="relative w-full h-44 bg-[#141419] p-4 flex items-center justify-center overflow-hidden border-b border-sand-subtle">
              {/* Decorative isometric geometry preview */}
              <div className="absolute inset-0 bg-zen-texture opacity-30 pointer-events-none" />
              
              <div className="relative z-10 w-full h-full rounded-xl bg-[#1A1A22] border border-sand-subtle/40 p-3 flex flex-col justify-between shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center justify-between text-xs text-sand-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-matcha" />
                    <span className="font-mono-code uppercase text-[10px]">{project.category}</span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-sand-muted opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="my-auto py-2">
                  <h4 className="text-base font-serif font-medium text-sand line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 line-clamp-2 font-light">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-[#111114] text-matcha font-mono-code border border-matcha/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#111114] text-sand-muted font-mono-code">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Content & Action Buttons */}
            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs sm:text-sm font-serif text-sand hover:text-matcha font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Read Case Study</span>
                  <span className="text-matcha font-sans">→</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#111114] border border-sand-subtle text-sand-muted hover:text-sand hover:border-sand transition-all"
                    title="View Source"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-sumi-card border border-sand-subtle rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#111114] text-sand-muted hover:text-sand border border-sand-subtle"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-matcha font-mono-code mb-2">
                <Layers className="w-4 h-4" />
                <span>{selectedProject.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-sand font-normal mb-2">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-gray-300 font-light mb-6 leading-relaxed">
                {selectedProject.subtitle}
              </p>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-serif tracking-widest text-sand-muted mb-3">
                  Key Technical Highlights
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-matcha mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-serif tracking-widest text-sand-muted mb-3">
                  Technologies & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-[#111114] text-sand text-xs font-mono-code border border-sand-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-sand-subtle">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-sand text-[#111114] text-xs font-medium hover:bg-white transition-colors flex items-center gap-2 shadow-md"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
