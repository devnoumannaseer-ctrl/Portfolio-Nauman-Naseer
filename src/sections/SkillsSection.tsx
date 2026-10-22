import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TechIcon } from '../components/TechIcon';
import { portfolioData, type SkillItem } from '../data/portfolioData';

type SkillCategory = 'all' | 'languages' | 'core_cs' | 'web' | 'tools';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { label: string; value: SkillCategory }[] = [
    { label: 'All Disciplines', value: 'all' },
    { label: 'Languages', value: 'languages' },
    { label: 'Core Computer Science', value: 'core_cs' },
    { label: 'Web Tech', value: 'web' },
    { label: 'Tools & Environments', value: 'tools' },
  ];

  const filteredSkills = portfolioData.skills.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="02. TECHNICAL ARSENAL"
          title="Skills &"
          highlight="Technologies"
          subtitle="A categorized overview of the languages, theoretical foundations, and development tools I actively work with."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-white bg-[#FF4D12] shadow-glow-orange-sm'
                    : 'text-[#B8B8B8] hover:text-white bg-[#111111] hover:bg-[#181818] border border-[#292929]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill: SkillItem, index: number) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group relative p-5 rounded-2xl bg-[#111111] border border-[#292929] hover:border-[#FF4D12]/50 hover:bg-[#161616] hover:shadow-card-dark transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#FF4D12]/15 text-zinc-300 group-hover:text-[#FF6B35] border border-[#292929] group-hover:border-[#FF4D12]/30 transition-all duration-300">
                    <TechIcon name={skill.iconName} className="w-6 h-6" />
                  </div>
                  {skill.level && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#B8B8B8] group-hover:text-zinc-200 border border-white/5">
                      {skill.level}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-white mb-1 transition-colors">
                  {skill.name}
                </h3>

                {skill.description && (
                  <p className="text-xs text-[#B8B8B8] leading-relaxed font-sans">
                    {skill.description}
                  </p>
                )}

                {/* Subtle corner highlight */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Marquee Ticker banner */}
        <div className="mt-16 p-4 rounded-2xl bg-[#0e0e0e] border border-[#292929] overflow-hidden relative group">
          <div className="animate-marquee gap-8 items-center whitespace-nowrap">
            {[...portfolioData.skills, ...portfolioData.skills].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs font-mono text-[#B8B8B8] hover:text-zinc-200 transition-colors shrink-0"
              >
                <TechIcon name={item.iconName} className="w-4 h-4 text-[#FF4D12]" />
                <span className="font-semibold text-zinc-300">{item.name}</span>
                <span className="text-zinc-600">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
