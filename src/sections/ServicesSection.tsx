import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TechIcon } from '../components/TechIcon';
import { portfolioData, type ServiceItem } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="04. CAPABILITIES"
          title="What I Bring to the"
          highlight="Table"
          subtitle="Combining academic rigor with hands-on implementation to deliver clean code, solid logic, and modern applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.services.map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-7 sm:p-8 rounded-3xl bg-[#111111] border border-[#292929] hover:border-[#FF4D12]/50 hover:bg-[#161616] shadow-card-dark transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Tagline */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-white/5 group-hover:bg-[#FF4D12]/15 text-[#FF6B35] border border-[#292929] group-hover:border-[#FF4D12]/30 transition-all duration-300">
                    <TechIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-[#B8B8B8] uppercase tracking-wider">
                    {service.tagline}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#B8B8B8] text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2 mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#B8B8B8] mb-2">
                    Key Areas:
                  </div>
                  {service.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF4D12] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#292929] flex items-center justify-between">
                <button
                  onClick={scrollToContact}
                  className="text-xs font-semibold text-zinc-300 group-hover:text-[#FF6B35] flex items-center gap-2 transition-colors"
                >
                  <span>Discuss a Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
