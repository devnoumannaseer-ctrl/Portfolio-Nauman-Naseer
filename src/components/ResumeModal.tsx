import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#111111] border border-[#292929] shadow-2xl overflow-hidden z-10"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-[#292929]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#FF4D12]/15 text-[#FF6B35]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  Curriculum Vitae — {portfolioData.personal.fullName}
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" /> Verified Document
                  </span>
                </h3>
                <p className="text-xs font-mono text-[#B8B8B8]">
                  Academic Credentials & Technical Profile
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.resumeUrl}
                download="NAUMAN_NASEER_Resume.png"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF4D12] hover:bg-[#FF6B35] shadow-glow-orange-sm transition-all"
                title="Download Document"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-[#B8B8B8] hover:text-white hover:bg-white/10 transition-colors"
                title="Open Raw Image in New Tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[#B8B8B8] hover:text-white hover:bg-white/10 transition-colors ml-1"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body: Document Preview */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#080808] flex items-center justify-center">
            <div className="relative max-w-full rounded-xl overflow-hidden shadow-2xl border border-[#292929] bg-black">
              <img
                src={portfolioData.personal.resumeUrl}
                alt={`${portfolioData.personal.fullName} Résumé`}
                className="max-h-[75vh] w-auto object-contain mx-auto"
                loading="eager"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3 bg-[#111111] border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#B8B8B8]">
            <span>Click outside or press Esc to close</span>
            <span className="text-[#FF4D12]">
              Email: {portfolioData.personal.email}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
