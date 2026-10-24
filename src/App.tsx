import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { CinematicWelcomeIntro } from './components/CinematicWelcomeIntro';
import { stopAllAudio } from './utils/netflixSound';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [showWelcomeIntro, setShowWelcomeIntro] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080808] text-white selection:bg-[#FF4D12]/30 selection:text-[#FF6B35]">
      {/* Opening Cinematic Welcome Screen inspired by the opening of the reference video */}
      <AnimatePresence>
        {showWelcomeIntro && (
          <CinematicWelcomeIntro
            onComplete={() => {
              stopAllAudio();
              setShowWelcomeIntro(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Interactive Background - Only active after intro to ensure 0 lag during welcome screen */}
      {!showWelcomeIntro && <AnimatedBackground />}

      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onReplayIntro={() => setShowWelcomeIntro(true)} />

      {/* Main Content Regions (All original portfolio sections intact) */}
      <main id="main-content" className="relative z-10">
        <HeroSection onReplayIntro={() => setShowWelcomeIntro(true)} />
        <AboutSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />
        <CertificatesSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Résumé Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
