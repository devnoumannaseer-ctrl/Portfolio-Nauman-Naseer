import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#060608] border-t border-[#292929] pt-16 pb-12 overflow-hidden">
      {/* Decorative top orange glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#FF4D12]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#292929] items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#111111] border border-[#292929]">
                <Terminal className="w-4 h-4 text-[#FF4D12]" />
              </div>
              <span className="font-bold tracking-tight text-white text-lg">
                NAUMAN <span className="text-[#FF4D12]">NASEER</span>
              </span>
            </div>

            <p className="text-[#B8B8B8] text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-normal">
              Computer Science student building foundational depth in C++, Python, and Java, exploring algorithms, and crafting modern interactive web experiences.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-[#FF4D12]/15 text-zinc-300 hover:text-white border border-[#292929] hover:border-[#FF4D12]/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-[#FF4D12]/15 text-zinc-300 hover:text-white border border-[#292929] hover:border-[#FF4D12]/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-emerald-950/40 text-emerald-400 hover:text-white border border-[#292929] hover:border-emerald-500/40 transition-all"
                aria-label="WhatsApp"
                title="WhatsApp Web"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-[#FF4D12]/15 text-zinc-300 hover:text-white border border-[#292929] hover:border-[#FF4D12]/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.socials.email}
                className="p-2 rounded-xl bg-white/5 hover:bg-[#FF4D12]/15 text-zinc-300 hover:text-white border border-[#292929] hover:border-[#FF4D12]/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B8B8B8] font-semibold mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {portfolioData.navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className="text-[#B8B8B8] hover:text-[#FF6B35] transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B8B8B8] font-semibold mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#B8B8B8]">
              <a
                href={portfolioData.socials.email}
                className="block text-zinc-300 hover:text-white transition-colors truncate"
              >
                {portfolioData.personal.email}
              </a>
              <p className="text-zinc-500">
                Location: {portfolioData.personal.location}
              </p>
              <p className="text-[#FF4D12] pt-2 font-medium">
                • {portfolioData.personal.statusBadge}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#B8B8B8]">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} NAUMAN NASEER. All rights reserved</span>
            <Heart className="w-3.5 h-3.5 text-[#FF4D12] inline fill-current" />
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#FF4D12]/50 text-[#B8B8B8] hover:text-white transition-all group"
            aria-label="Back to top"
          >
            <span className="text-[11px] uppercase tracking-wider">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF4D12] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
