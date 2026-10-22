import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          
          {/* Logo / Monogram (Left side: black when over gray hero, white when scrolled) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="NAUMAN NASEER Home"
          >
            {/* Geometric NN Monogram matching the reference style */}
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className={`w-9 h-9 sm:w-10 sm:h-10 transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'text-black'
                }`}
                fill="currentColor"
              >
                {/* Modern geometric monogram NN */}
                <path d="M12 85V15h18l32 46V15h16v70H60L28 39v46H12z" />
                <path d="M78 15h10v70H78z" opacity="0.4" />
              </svg>
            </div>
            <span
              className={`font-black tracking-tighter text-lg sm:text-xl uppercase transition-colors duration-300 hidden sm:inline ${
                scrolled ? 'text-white' : 'text-black'
              }`}
            >
              NN
            </span>
          </a>

          {/* Desktop Nav Links & CTA on right side */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav className="flex items-center gap-7 lg:gap-9">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#about');
                }}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  activeSection === 'about'
                    ? 'text-white font-bold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                About me
              </a>

              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#skills');
                }}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  activeSection === 'skills'
                    ? 'text-white font-bold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#projects');
                }}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  activeSection === 'projects'
                    ? 'text-white font-bold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                Portfolio
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#services');
                }}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  activeSection === 'services'
                    ? 'text-white font-bold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                Services
              </a>
            </nav>

            {/* "CONTACT ME" White Pill Button from Reference */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="bg-white hover:bg-zinc-200 text-black font-extrabold text-xs tracking-wider uppercase px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              CONTACT ME
            </a>
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
