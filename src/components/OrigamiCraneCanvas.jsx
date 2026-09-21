import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function OrigamiCraneCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Floating particles (Zen ambient sparks)
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.4 - 0.1,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? '#E2CEB8' : '#88A78F'
    }));

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Draw subtle ambient glow behind the crane
      const glowGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        Math.min(width, height) * 0.45
      );
      glowGradient.addColorStop(0, 'rgba(226, 206, 184, 0.07)');
      glowGradient.addColorStop(0.6, 'rgba(136, 167, 143, 0.03)');
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, width, height);

      // Render floating zen particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y + Math.sin(time + p.x) * 2, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * (0.6 + 0.4 * Math.sin(time * 2 + p.x));
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden my-2">
      {/* Background Canvas for Ambient Particles & Glow */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Floating Zen Stones Left & Right (Matching Mockup Image) */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-4 sm:left-12 top-10 flex flex-col items-center gap-1 opacity-70 pointer-events-none"
      >
        <div className="w-5 h-2.5 rounded-full bg-[#3D3A36] border border-[#E2CEB8]/20 shadow-md"></div>
        <div className="w-7 h-3 rounded-full bg-[#2A2825] border border-[#E2CEB8]/20 shadow-md"></div>
        <div className="w-9 h-3.5 rounded-full bg-[#1E1C1A] border border-[#E2CEB8]/20 shadow-md"></div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute right-4 sm:right-12 bottom-12 flex flex-col items-center gap-1 opacity-70 pointer-events-none"
      >
        <div className="w-4 h-2 rounded-full bg-[#4A453F] border border-[#E2CEB8]/20 shadow-md"></div>
        <div className="w-6 h-2.5 rounded-full bg-[#33302B] border border-[#E2CEB8]/20 shadow-md"></div>
        <div className="w-8 h-3 rounded-full bg-[#22201D] border border-[#E2CEB8]/20 shadow-md"></div>
      </motion.div>

      {/* Central 3D Geometric Origami Crane SVG with hover interaction */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: [0, -12, 0] }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 0.8 },
          opacity: { duration: 0.8 }
        }}
        whileHover={{ scale: 1.06, rotateY: 15, rotateX: -5 }}
        className="relative z-10 cursor-pointer group"
      >
        <svg
          width="240"
          height="240"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 h-48 sm:w-60 sm:h-60 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transition-transform duration-500"
        >
          <defs>
            {/* Origami Paper Gradient Facets */}
            <linearGradient id="facet-sand-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EDE2D3" />
              <stop offset="100%" stopColor="#CBB297" />
            </linearGradient>
            <linearGradient id="facet-sand-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D8C2AA" />
              <stop offset="100%" stopColor="#A88F75" />
            </linearGradient>
            <linearGradient id="facet-sand-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#967D65" />
              <stop offset="100%" stopColor="#635140" />
            </linearGradient>
            <linearGradient id="facet-matcha" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A8C4AC" />
              <stop offset="100%" stopColor="#6B8871" />
            </linearGradient>
          </defs>

          {/* Origami Crane Geometric Poly Facets */}
          {/* Back Left Wing */}
          <polygon points="120,110 30,70 95,145" fill="url(#facet-sand-shadow)" opacity="0.9" />
          <polygon points="30,70 10,95 95,145" fill="url(#facet-sand-2)" opacity="0.75" />

          {/* Main Body Triangular Fold */}
          <polygon points="120,110 95,145 120,195" fill="url(#facet-sand-2)" />
          <polygon points="120,110 145,145 120,195" fill="url(#facet-sand-shadow)" />

          {/* Tail Fold */}
          <polygon points="120,195 145,145 190,205" fill="url(#facet-sand-shadow)" />

          {/* Front Left Wing (Expansive Fold) */}
          <polygon points="120,110 20,40 105,120" fill="url(#facet-sand-1)" />
          <polygon points="20,40 95,145 105,120" fill="url(#facet-sand-2)" />

          {/* Front Right Wing (3D Crease) */}
          <polygon points="120,110 220,50 135,120" fill="url(#facet-sand-1)" />
          <polygon points="220,50 145,145 135,120" fill="url(#facet-sand-2)" />

          {/* Neck & Head Fold */}
          <polygon points="120,110 100,50 120,30" fill="url(#facet-sand-1)" />
          <polygon points="100,50 120,30 85,42" fill="url(#facet-matcha)" />

          {/* Subtle Crease Lines for Origami Authenticity */}
          <line x1="120" y1="110" x2="20" y2="40" stroke="#7A6553" strokeWidth="0.8" opacity="0.4" />
          <line x1="120" y1="110" x2="220" y2="50" stroke="#7A6553" strokeWidth="0.8" opacity="0.4" />
          <line x1="120" y1="110" x2="120" y2="195" stroke="#4A3B2F" strokeWidth="1" opacity="0.5" />
          <line x1="100" y1="50" x2="120" y2="110" stroke="#5A4A3B" strokeWidth="0.8" opacity="0.5" />
        </svg>

        {/* Soft Ground Shadow underneath Crane */}
        <motion.div
          animate={{ scale: [1, 0.85, 1], opacity: [0.4, 0.25, 0.4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-36 h-4 bg-black/60 rounded-[100%] blur-md mx-auto -mt-6"
        />
      </motion.div>
    </div>
  );
}
