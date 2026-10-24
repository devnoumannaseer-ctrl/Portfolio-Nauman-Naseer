import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'services', 'experience', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800 py-3.5 shadow-xl'
            : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 flex items-center justify-between">
          
          {/* Logo / Monogram (Left side: 'NN' logo) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-1.5 group focus:outline-none select-none"
            aria-label="NAUMAN NASEER Home"
          >
            <span
              className={`font-black text-2xl sm:text-3xl tracking-tighter uppercase transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-black'
              }`}
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              NN
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D12]" />
          </a>

          {/* Desktop Nav Links & CTA on the MOST RIGHT SIDE (Inside black section) */}
          <div className="hidden md:flex items-center justify-end gap-5 lg:gap-7 xl:gap-8 ml-auto">
            <nav className="flex items-center gap-5 lg:gap-7 xl:gap-8">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Portfolio', href: '#projects' },
                { name: 'Services', href: '#services' },
              ].map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    className={`relative py-1 text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 group ${
                      isActive ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {/* Animated dynamic underline indicator */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#FF4D12] transition-all duration-300 rounded-full ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </motion.a>
                );
              })}
            </nav>

            {/* "CONTACT ME" White Pill Button with Interactive Hover Glow & Shimmer */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 24px rgba(255, 255, 255, 0.4), 0 4px 16px rgba(0,0,0,0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 450, damping: 22 }}
              className="relative overflow-hidden group bg-white text-black font-extrabold text-[11px] lg:text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-md transition-all duration-200 flex items-center gap-1.5 shrink-0"
            >
              {/* Shimmer sweep effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 pointer-events-none" />
              <span className="relative z-10">CONTACT ME</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D12] group-hover:scale-150 transition-transform duration-200" />
            </motion.a>

            {/* Optional Replay Welcome Screen */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="p-2 rounded-full transition-colors text-zinc-400 hover:text-white hover:bg-white/10"
                title="Replay Opening Welcome Screen"
                aria-label="Replay Opening Welcome Screen"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                scrolled
                  ? 'bg-zinc-900 text-white border border-zinc-800'
                  : 'bg-black/10 text-black border border-black/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {[
                { name: 'About me', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Portfolio', href: '#projects' },
                { name: 'Services', href: '#services' },
                { name: 'Timeline', href: '#experience' },
                { name: 'Certificates', href: '#certificates' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-zinc-900 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-zinc-800 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#contact');
                  }}
                  className="w-full py-3 rounded-full text-center text-xs font-black uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all shadow-md"
                >
                  CONTACT ME
                </a>

                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full text-center text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/60 transition-all flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp Web</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
