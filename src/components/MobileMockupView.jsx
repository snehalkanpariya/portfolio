import React from 'react';
import { motion } from 'framer-motion';
import IntroSection from './IntroSection';
import LoreSection from './LoreSection';
import PortfolioSection from './PortfolioSection';
import LettersSection from './LettersSection';

export default function MobileMockupView({ onNavigate }) {
  const screens = [
    { title: 'INTRO', component: <IntroSection onNavigate={onNavigate} /> },
    { title: 'THE LORE', component: <LoreSection /> },
    { title: 'PORTFOLIO', component: <PortfolioSection /> },
    { title: 'LETTERS', component: <LettersSection /> }
  ];

  return (
    <div className="w-full py-10 px-4 flex flex-col items-center">
      <div className="text-center mb-8 max-w-xl">
        <span className="text-xs uppercase tracking-[0.3em] text-matcha font-mono-code block mb-1">
          Interactive Reference View
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-sand">
          4-Screen Mobile Device Grid
        </h2>
        <p className="text-xs text-gray-400 mt-2 font-light">
          Experience all four distinct screens (Intro, The Lore, Portfolio, Letters) framed inside interactive mobile device viewports matching your reference design.
        </p>
      </div>

      {/* Horizontal Scrollable or Grid of 4 iPhones */}
      <div className="w-full overflow-x-auto pb-8 flex items-start justify-center gap-6 sm:gap-8 px-4 scrollbar-thin">
        {screens.map((sc, idx) => (
          <motion.div
            key={sc.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col items-center gap-3 shrink-0"
          >
            {/* Phone Hardware Mockup Frame (Sleek dark Titanium frame with dynamic island) */}
            <div className="relative w-[320px] h-[640px] rounded-[48px] bg-[#1A1A1E] border-[6px] border-[#2C2C32] shadow-[0_25px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col ring-1 ring-sand-subtle/30">
              {/* iPhone Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 rounded-full bg-black z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111114] border border-[#222]" />
                <div className="w-2 h-2 rounded-full bg-[#091526]" />
              </div>

              {/* Status Bar */}
              <div className="w-full pt-3 px-6 flex items-center justify-between text-[10px] text-sand-muted z-20 font-mono-code font-medium">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2 bg-sand-muted rounded-xs" />
                  <div className="w-2 h-2 bg-sand-muted rounded-full" />
                </div>
              </div>

              {/* Scrollable Screen Content */}
              <div className="w-full h-full overflow-y-auto pt-2 pb-8 px-2 scrollbar-none bg-[#111114]">
                {sc.component}
              </div>

              {/* Home Indicator Line */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-sand-subtle/50 z-30" />
            </div>

            {/* Screen Caption Title under Frame */}
            <span className="text-xs font-serif font-medium tracking-[0.2em] text-sand uppercase">
              {sc.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
