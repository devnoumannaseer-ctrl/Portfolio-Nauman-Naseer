import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  FileText,
  Code2,
  CheckCircle2,
  Lightbulb,
  ExternalLink,
  Target,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface AboutSectionProps {
  onOpenResumeModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResumeModal }) => {
  const handleResumeClick = () => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.8 },
      colors: ['#FF4D12', '#FFFFFF', '#FF6B35', '#FFA07A', '#D93800'],
    });
    onOpenResumeModal();
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="01. ABOUT ME"
          title="Building Strong Foundations in"
          highlight="Computer Science"
          subtitle="A passionate Computer Science student dedicated to mastering core programming logic, algorithms, and modern software systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Profile Card with Neon Orange Glow & Verified Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FF4D12] to-[#FF6B35] rounded-3xl blur-xl opacity-35 group-hover:opacity-70 transition duration-500 pointer-events-none" />
              
              <div className="relative rounded-3xl bg-[#111111] border border-[#292929] p-5 shadow-2xl overflow-hidden">
                {/* Profile Image with subtle zoom on hover */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-5 bg-[#161616] border border-[#292929]">
                  <img
                    src={portfolioData.personal.profileImage}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/my-pic.jpg';
                    }}
                    alt={portfolioData.personal.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                    style={{
                      objectPosition: 'center 62%',
                      imageRendering: '-webkit-optimize-contrast',
                    }}
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay at the bottom so badge contrasts nicely */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                  
                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
                    <span className="text-xs font-mono font-medium text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF4D12]" />
                      NAUMAN NASEER
                    </span>
                    <span className="text-[10px] font-mono text-[#FF4D12] uppercase font-bold">
                      BS CS
                    </span>
                  </div>
                </div>

                {/* Profile Snapshot details */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between py-2 border-b border-white/5 text-zinc-300">
                    <span className="text-[#B8B8B8]">Current Role:</span>
                    <span className="text-white font-medium">CS Student</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5 text-zinc-300">
                    <span className="text-[#B8B8B8]">Core Focus:</span>
                    <span className="text-[#FF6B35] font-medium">C++, Python, Java</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5 text-zinc-300">
                    <span className="text-[#B8B8B8]">Status:</span>
                    <span className="text-[#FF4D12] font-medium">Open to Internships</span>
                  </div>
                </div>

                {/* Résumé Action Button */}
                <button
                  onClick={handleResumeClick}
                  className="mt-5 w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-white/10 hover:bg-[#FF4D12] border border-[#292929] hover:border-[#FF4D12] shadow-sm hover:shadow-glow-orange transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <FileText className="w-4 h-4 text-[#FF4D12] group-hover:text-white transition-colors" />
                  <span>View Résumé Document</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography & Focus Cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111]/90 border border-[#292929] backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-[#FF4D12]" />
                Academic Background & Passion
              </h3>
              
              <div className="space-y-4 text-[#B8B8B8] text-sm sm:text-base leading-relaxed">
                {portfolioData.personal.detailedBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Core Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-[#292929]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D12] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">
                    Strong grasp of Object-Oriented Principles
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D12] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">
                    Active algorithmic problem solving
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D12] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">
                    Clean, documented & maintainable code
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4D12] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">
                    Keen to learn and adapt to modern tech
                  </span>
                </div>
              </div>
            </div>

            {/* Three thematic mini-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#FF4D12]/50 transition-colors">
                <div className="p-2 w-fit rounded-lg bg-[#FF4D12]/10 text-[#FF4D12] mb-3">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Core Logic</h4>
                <p className="text-xs text-[#B8B8B8]">
                  Focusing on low-level memory, pointers, and data structures in C++ & Java.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#FF4D12]/50 transition-colors">
                <div className="p-2 w-fit rounded-lg bg-[#FF4D12]/10 text-[#FF4D12] mb-3">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Problem Solving</h4>
                <p className="text-xs text-[#B8B8B8]">
                  Breaking down complex computational tasks into clean algorithmic steps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#FF4D12]/50 transition-colors">
                <div className="p-2 w-fit rounded-lg bg-[#FF4D12]/10 text-[#FF4D12] mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Long-term Vision</h4>
                <p className="text-xs text-[#B8B8B8]">
                  Aspiring to engineer high-throughput, dependable software architectures.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
