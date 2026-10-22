import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-between">
      {/* DIAGONAL SPLIT BACKGROUND
          Desktop: Crisp polygon separating light gray (#D6D6D6) on the left from black (#000000) on the right.
          Mobile: Responsive angled background.
      */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-[#D6D6D6]"
        style={{
          clipPath:
            'polygon(0 0, 54% 0, 43% 100%, 0 100%)',
        }}
      />
      {/* Mobile adaptive background fallback for small screens where split stacks */}
      <div
        className="block md:hidden absolute inset-0 pointer-events-none z-0 bg-[#D6D6D6]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 65%)',
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full min-h-screen max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between pt-24 sm:pt-28 pb-10">
        
        {/* Middle Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-1 my-auto">
          
          {/* LEFT SIDE: Name & Intro Typography on Light Gray */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-5 flex flex-col items-start text-left pt-6 sm:pt-0"
          >
            {/* "Hi, I am" */}
            <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-black tracking-tight mb-2 sm:mb-3">
              Hi, I am
            </span>

            {/* "NAUMAN NASEER" - Large Bold Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black tracking-tight leading-[1.02] mb-3 sm:mb-4">
              NAUMAN <br className="hidden sm:inline" />
              NASEER
            </h1>

            {/* Professional Identity */}
            <h2 className="text-sm sm:text-base font-bold text-[#606060] tracking-wide mb-3 uppercase">
              {portfolioData.personal.primaryRole || "Computer Science Student / Python & C++ Programmer"}
            </h2>

            {/* Supporting Line */}
            <p className="text-xs sm:text-sm text-[#444444] font-medium max-w-md leading-relaxed mb-8 sm:mb-12">
              {portfolioData.personal.tagline}
            </p>

            {/* Tactile Social Icon Buttons matching reference */}
            <div className="flex items-center gap-3">
              {/* Email */}
              <a
                href={portfolioData.socials.email}
                className="w-11 h-11 rounded-lg bg-[#C4C4C4] hover:bg-[#B5B5B5] active:scale-95 text-black shadow-[2px_3px_6px_rgba(0,0,0,0.18)] hover:shadow-[1px_2px_4px_rgba(0,0,0,0.22)] border border-black/5 flex items-center justify-center transition-all"
                title="Send Email"
                aria-label="Email Nauman Naseer"
              >
                <Mail className="w-5 h-5 stroke-[2.2]" />
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-lg bg-[#C4C4C4] hover:bg-[#B5B5B5] active:scale-95 text-black shadow-[2px_3px_6px_rgba(0,0,0,0.18)] hover:shadow-[1px_2px_4px_rgba(0,0,0,0.22)] border border-black/5 flex items-center justify-center transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 stroke-[2.2]" />
              </a>

              {/* LinkedIn */}
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-lg bg-[#C4C4C4] hover:bg-[#B5B5B5] active:scale-95 text-black shadow-[2px_3px_6px_rgba(0,0,0,0.18)] hover:shadow-[1px_2px_4px_rgba(0,0,0,0.22)] border border-black/5 flex items-center justify-center transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 stroke-[2.2]" />
              </a>

              {/* WhatsApp */}
              <a
                href={portfolioData.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-lg bg-[#C4C4C4] hover:bg-[#B5B5B5] active:scale-95 text-black shadow-[2px_3px_6px_rgba(0,0,0,0.18)] hover:shadow-[1px_2px_4px_rgba(0,0,0,0.22)] border border-black/5 flex items-center justify-center transition-all"
                title="Connect on WhatsApp"
                aria-label="WhatsApp Web Contact"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href={portfolioData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-lg bg-[#C4C4C4] hover:bg-[#B5B5B5] active:scale-95 text-black shadow-[2px_3px_6px_rgba(0,0,0,0.18)] hover:shadow-[1px_2px_4px_rgba(0,0,0,0.22)] border border-black/5 flex items-center justify-center transition-all"
                title="Instagram Profile"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5 stroke-[2.2]" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Portrait Photograph on Solid Black Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-7 flex justify-center md:justify-end items-end relative h-full pt-6 md:pt-0"
          >
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg w-full flex justify-center md:justify-end">
              {/* Portrait image seamlessly blended into the solid black right side */}
              <img
                src={portfolioData.personal.profileImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://i.postimg.cc/52mqL580/pic.jpg';
                }}
                alt="NAUMAN NASEER"
                className="w-full max-h-[72vh] sm:max-h-[82vh] object-contain object-bottom select-none filter contrast-105 drop-shadow-2xl"
                loading="eager"
              />
              {/* Subtle bottom fade to blend with any bottom edge */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
