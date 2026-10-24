import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Play } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  onReplayIntro?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReplayIntro }) => {
  // Staggered entrance animation variants for left column
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const socialButtons = [
    {
      name: 'Send Email',
      href: portfolioData.socials.email,
      icon: <Mail className="w-5 h-5 stroke-[2.2]" />,
      hoverClass: 'hover:bg-[#FF4D12] hover:text-white hover:border-[#FF4D12]',
    },
    {
      name: 'GitHub Profile',
      href: portfolioData.socials.github,
      icon: <Github className="w-5 h-5 stroke-[2.2]" />,
      hoverClass: 'hover:bg-[#181717] hover:text-white hover:border-[#181717]',
    },
    {
      name: 'LinkedIn Profile',
      href: portfolioData.socials.linkedin,
      icon: <Linkedin className="w-5 h-5 stroke-[2.2]" />,
      hoverClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    },
    {
      name: 'WhatsApp Contact',
      href: portfolioData.socials.whatsapp,
      icon: <FaWhatsapp className="w-5 h-5" />,
      hoverClass: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
    },
    {
      name: 'Instagram Profile',
      href: portfolioData.socials.instagram,
      icon: <Instagram className="w-5 h-5 stroke-[2.2]" />,
      hoverClass: 'hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]',
    },
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div className="relative z-10 w-full min-h-screen max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center pt-20 md:pt-24 pb-8 md:pb-10">
        
        {/* Middle Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center w-full my-auto">
          
          {/* LEFT SIDE: Name & Intro Typography on Light Gray */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-6 lg:col-span-6 flex flex-col items-start text-left pt-6 sm:pt-0"
          >
            {/* "Hi, I am" with glowing accent */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
                Hi, I am
              </span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF4D12] animate-pulse" />
            </motion.div>

            {/* "NAUMAN NASEER" - Large Bold Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black tracking-tight leading-[1.02] mb-3 sm:mb-4 select-none"
            >
              NAUMAN <br className="hidden sm:inline" />
              NASEER
            </motion.h1>

            {/* Professional Identity */}
            <motion.h2
              variants={itemVariants}
              className="text-sm sm:text-base font-bold text-[#555555] tracking-wide mb-3 uppercase flex items-center gap-2"
            >
              <span>{portfolioData.personal.primaryRole || "Computer Science Student / Python & C++ Programmer"}</span>
            </motion.h2>

            {/* Supporting Line */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-[#444444] font-medium max-w-md leading-relaxed mb-8 sm:mb-10"
            >
              {portfolioData.personal.tagline}
            </motion.p>

            {/* Interactive Social Icon Buttons & Hero CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.div
                variants={socialContainerVariants}
                className="flex items-center gap-2.5 sm:gap-3"
              >
                {socialButtons.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto') ? undefined : 'noreferrer'}
                    variants={socialItemVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      boxShadow: '0 10px 22px -3px rgba(0, 0, 0, 0.28)',
                    }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 22 }}
                    className={`w-11 h-11 rounded-xl bg-[#C4C4C4] text-black shadow-[2px_3px_6px_rgba(0,0,0,0.18)] border border-black/10 flex items-center justify-center transition-colors duration-200 ${item.hoverClass}`}
                    title={item.name}
                    aria-label={item.name}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* Hero 'CONTACT ME' CTA Button */}
              <motion.a
                href="#contact"
                onClick={scrollToContact}
                variants={socialItemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: '0 10px 25px -4px rgba(0, 0, 0, 0.35)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="relative overflow-hidden group px-5 py-2.5 rounded-xl bg-black hover:bg-zinc-900 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all duration-200"
              >
                <span className="relative z-10">CONTACT ME</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D12] group-hover:scale-150 transition-transform duration-200" />
              </motion.a>

              {/* Optional Replay Opening Intro */}
              {onReplayIntro && (
                <motion.button
                  onClick={onReplayIntro}
                  variants={socialItemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="px-3.5 py-2.5 rounded-xl bg-black/10 hover:bg-black/20 text-black border border-black/10 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                  title="Replay Opening Welcome Screen"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span className="hidden sm:inline">Intro</span>
                </motion.button>
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Portrait Photograph Positioned on the Right in Solid Black Background */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-6 lg:col-span-6 flex items-center justify-center md:justify-end relative pt-6 md:pt-0 md:pr-4 lg:pr-8 xl:pr-14 md:translate-x-6 lg:translate-x-8 xl:translate-x-10 md:-translate-y-4 lg:-translate-y-6"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[390px] xl:max-w-[420px] flex items-center justify-center">
              {/* Subtle atmospheric ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-[#FF4D12]/10 rounded-full blur-2xl pointer-events-none opacity-30" />

              {/* High-definition portrait wrapper with gentle floating breath animation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 w-full flex items-center justify-center overflow-hidden"
              >
                <img
                  src={portfolioData.personal.profileImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/my-pic.jpg';
                  }}
                  alt="NAUMAN NASEER"
                  fetchPriority="high"
                  decoding="async"
                  loading="eager"
                  className="w-auto h-auto max-h-[52vh] sm:max-h-[58vh] md:max-h-[66vh] lg:max-h-[72vh] max-w-full aspect-[9/16] object-contain select-none filter contrast-[1.03] brightness-[1.02] drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                  }}
                />

                {/* Subtle bottom fade: seamlessly dissolves bottom edge and hides watermark without obscuring arms */}
                <div className="absolute inset-x-0 bottom-0 h-6 sm:h-8 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
