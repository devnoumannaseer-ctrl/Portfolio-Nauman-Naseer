import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Terminal,
  Rocket,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, type TimelineEntry } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-[#FF4D12]" />;
      case 'Rocket':
        return <Rocket className="w-4 h-4 text-[#FF4D12]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#FF4D12]" />;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="05. JOURNEY & MILESTONES"
          title="Education & Technical"
          highlight="Timeline"
          subtitle="A verified record of my academic pursuit in Computer Science and hands-on milestones achieved."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#FF4D12] via-[#FF4D12]/40 to-transparent" />

          <div className="space-y-12">
            {portfolioData.timeline.map((item: TimelineEntry, idx: number) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#111111] border-2 border-[#FF4D12] shadow-glow-orange-sm z-10">
                    {getIcon(item.iconType)}
                  </div>

                  {/* Empty spacer on desktop for alternating alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content Container */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#111111] border border-[#292929] hover:border-[#FF4D12]/40 hover:bg-[#161616] shadow-card-dark transition-all duration-300">
                      
                      {/* Meta dates and location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono text-[#B8B8B8]">
                        <span className="flex items-center gap-1.5 text-[#FF6B35]">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title & Institution */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-zinc-300 mb-3">
                        {item.institution}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-[#292929]">
                        {item.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D12] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
