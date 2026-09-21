import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import LoreSection from './components/LoreSection';
import PortfolioSection from './components/PortfolioSection';
import LettersSection from './components/LettersSection';
import MobileMockupView from './components/MobileMockupView';
import { personalDetails } from './data/portfolioData';
import { ArrowUp, Heart, Feather } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [viewMode, setViewMode] = useState('web'); // 'web' or 'mobile-grid'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sumi text-sand flex flex-col font-sans selection:bg-matcha selection:text-[#111114]">
      {/* Background Zen Grid Texture */}
      <div className="fixed inset-0 bg-zen-texture opacity-30 pointer-events-none z-0" />

      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto py-6 sm:py-10">
        {viewMode === 'mobile-grid' ? (
          <MobileMockupView onNavigate={(sec) => {
            setViewMode('web');
            setActiveSection(sec);
          }} />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              {activeSection === 'intro' && (
                <IntroSection onNavigate={(sec) => setActiveSection(sec)} />
              )}
              {activeSection === 'lore' && <LoreSection />}
              {activeSection === 'portfolio' && <PortfolioSection />}
              {activeSection === 'letters' && <LettersSection />}
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
