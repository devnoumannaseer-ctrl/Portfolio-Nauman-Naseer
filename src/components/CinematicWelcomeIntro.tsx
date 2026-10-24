import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { stopAllAudio } from '../utils/netflixSound';

interface CinematicWelcomeIntroProps {
  onComplete: () => void;
}

export const CinematicWelcomeIntro: React.FC<CinematicWelcomeIntroProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Keyboard accessibility: Space, Enter, or Escape completes the intro instantly
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault();
        handleEnter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      stopAllAudio();
    };
  }, []);

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    stopAllAudio();
    setTimeout(() => {
      onComplete();
    }, 350);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070707] text-white px-4 py-8 overflow-hidden select-none will-change-transform"
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Cinematic Ambient Backdrop Lighting - Zero blur filter for buttery smooth 60fps */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 77, 18, 0.12) 0%, rgba(20, 6, 2, 0.5) 40%, rgba(7, 7, 7, 0.95) 75%, #070707 100%)',
        }}
      />

      {/* Top Bar: Skip button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={handleEnter}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white text-xs font-mono transition-colors tracking-wide focus:outline-none cursor-pointer"
        >
          <span>Skip Intro</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center Cinematic Stage Container */}
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center my-auto">
        
        {/* PHASE 1: Prominent Name Reveal (Matches beginning of reference video) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-5 sm:mb-6"
        >
          {/* Subtle Series / Production Label */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D12] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#FF4D12] uppercase">
              PORTFOLIO SHOWCASE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D12] animate-pulse" />
          </div>

          {/* Primary Name: NAUMAN NASEER */}
          <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-white tracking-wider leading-[0.92] text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            {portfolioData.personal.fullName}
          </h1>
        </motion.div>

        {/* PHASE 2: Portrait Picture Reveal (Follows smoothly with zero stutter) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-6"
        >
          {/* Rounded Portrait Frame with Clean Lighting */}
          <div className="relative mb-4">
            <div
              className="absolute -inset-2 rounded-full opacity-60 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255, 77, 18, 0.35) 0%, transparent 70%)',
              }}
            />
            
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.9)] bg-zinc-900">
              <img
                src={portfolioData.personal.profileImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/my-pic.jpg';
                }}
                alt={portfolioData.personal.fullName}
                className="w-full h-full object-cover select-none filter contrast-[1.04] brightness-[1.02]"
                style={{
                  objectPosition: 'center 62%',
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
              {/* Subtle rim overlay */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15 pointer-events-none" />
            </div>
          </div>

          {/* Professional Title */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 font-semibold tracking-wide uppercase px-4 py-1 rounded-full bg-white/5 border border-white/10">
            <span>{portfolioData.personal.primaryRole}</span>
          </div>
        </motion.div>

        {/* PHASE 3: "▶ PLAY PORTFOLIO" Interactive CTA - Smooth entrance without lag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3"
        >
          <motion.button
            onClick={handleEnter}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 77, 18, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="px-8 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-black font-extrabold text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-2xl transition-all group focus:outline-none focus:ring-2 focus:ring-[#FF4D12] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
            </div>
            <span>Play Portfolio</span>
          </motion.button>

          <span className="text-[11px] font-mono text-zinc-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Enter</kbd> or click to explore
          </span>
        </motion.div>

      </div>
    </motion.div>
  );
};
