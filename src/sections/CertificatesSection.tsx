import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Eye, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, type CertificateItem } from '../data/portfolioData';

interface CertificatesSectionProps {
  onOpenResumeModal: () => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="certificates" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="06. CREDENTIALS & DOCUMENTS"
          title="Verified Documents &"
          highlight="Achievements"
          subtitle="Official academic credentials, verified curriculum vitae, and foundational achievements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioData.certificates.map((cert: CertificateItem, idx: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-[#111111] border border-[#292929] hover:border-[#FF4D12]/50 p-6 sm:p-7 shadow-card-dark transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#FF4D12]/15 text-[#FF6B35] border border-[#292929] group-hover:border-[#FF4D12]/30 transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#B8B8B8]">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-[#FF4D12] mb-4 flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Preview Image if available */}
                {cert.imageUrl && (
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black border border-[#292929] mb-4 group/img">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain p-2 group-hover/img:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={onOpenResumeModal}
                        className="p-2.5 rounded-full bg-[#FF4D12] text-white shadow-glow-orange hover:scale-110 transition-transform"
                        title="View Full Resolution"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-zinc-300 border border-[#292929]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-[#292929] flex items-center justify-between">
                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF4D12] hover:text-[#FF6B35] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Document</span>
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B8B8B8] hover:text-white transition-colors"
                  >
                    <span>Direct Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
