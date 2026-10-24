import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  FolderGit2,
  ArrowUpRight,
  Layers,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, type Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Computer Science', 'Systems & OOP', 'Automation & Python', 'Web Development'];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase());
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="03. FEATURED WORKS"
          title="Curated Projects &"
          highlight="Implementations"
          subtitle="A selection of hands-on algorithmic simulations, object-oriented systems, and modern software experiments."
        />

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#FF4D12] text-white shadow-glow-orange-sm'
                  : 'bg-[#111111] text-[#B8B8B8] hover:text-white border border-[#292929]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project: Project, idx: number) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-[#111111] border border-[#292929] hover:border-[#FF4D12]/50 shadow-card-dark overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Project Image banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#161616]">
                  <img
                    src={project.image}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80';
                    }}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

                  {/* Badge & Links atop image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium text-white bg-[#080808]/85 backdrop-blur-md border border-[#292929]">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-[#080808]/85 text-zinc-300 hover:text-white hover:bg-[#FF4D12] border border-[#292929] transition-all"
                        title="View GitHub Repository"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-[#080808]/85 text-zinc-300 hover:text-white hover:bg-[#FF4D12] border border-[#292929] transition-all"
                          title="View Live Demo"
                          aria-label={`View live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Subtitle tag */}
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-mono text-[#FF6B35] tracking-wide font-medium">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white mb-2.5 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[#B8B8B8] text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Problem Solved Callout */}
                    <div className="p-3.5 rounded-xl bg-[#0b0b0b] border border-[#292929] mb-5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#B8B8B8] mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D12]" />
                        Problem Solved:
                      </div>
                      <p className="text-xs text-zinc-300 italic">
                        "{project.problemSolved}"
                      </p>
                    </div>

                    {/* Key features bullets */}
                    <div className="space-y-1.5 mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#B8B8B8] mb-2">
                        Key Architecture & Features:
                      </div>
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D12] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies tags and CTA */}
                  <div className="pt-4 border-t border-[#292929]">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-[#292929]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-[#FF4D12] hover:text-[#FF6B35] transition-colors flex items-center gap-1"
                      >
                        <span>Inspect Full Specs</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B8B8B8] hover:text-white transition-colors"
                      >
                        <FolderGit2 className="w-3.5 h-3.5 text-[#FF4D12]" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111111] border border-[#292929] p-6 sm:p-8 shadow-2xl text-left"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-[#FF4D12] text-zinc-300 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <div className="inline-block px-3 py-1 rounded-full text-xs font-mono text-[#FF4D12] bg-[#FF4D12]/10 border border-[#FF4D12]/30 mb-3">
                  {selectedProject.category}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-[#B8B8B8] mb-6">
                  {selectedProject.subtitle}
                </p>

                <div className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                  <p>{selectedProject.description}</p>
                  <div className="p-4 rounded-xl bg-[#0b0b0b] border border-[#292929]">
                    <strong className="text-white block mb-1">Problem Addressed:</strong>
                    <span className="text-[#B8B8B8]">{selectedProject.problemSolved}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#B8B8B8] mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#FF4D12]" />
                    Complete Feature Breakdown:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF4D12] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#B8B8B8] mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-zinc-200 border border-[#292929]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#292929]">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-[#FF4D12] hover:bg-[#FF6B35] shadow-glow-orange transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-3 rounded-xl text-xs font-medium text-[#B8B8B8] hover:text-white bg-white/5 hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
