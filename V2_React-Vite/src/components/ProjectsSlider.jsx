import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ChevronLeft, ChevronRight, ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { projects } from '../data/resumeData';

export default function ProjectsSlider({ onOpenModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Code size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Interactive, end-to-end applications spanning cryptography, desktop software, embedded IoT, and multivariate statistical anomaly detection.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-400 transition-all hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-400 transition-all hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Grid of Projects with Animated Focus */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          const isCurrent = idx === currentIndex;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass-panel p-7 rounded-3xl flex flex-col justify-between space-y-6 relative transition-all ${
                isCurrent ? 'border-cyan-500/50 shadow-[0_0_25px_rgba(56,189,248,0.15)]' : 'border-slate-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{project.period}</span>
                </div>

                <h3 className="text-xl font-bold font-display text-white hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.summary}
                </p>

                <ul className="text-xs text-slate-400 space-y-2 font-mono">
                  {project.bullets.slice(0, 3).map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => onOpenModal(project)}
                    className="flex-1 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2"
                  >
                    <span>Deep Dive & Specs</span>
                    <ArrowUpRight size={14} />
                  </button>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
                      title="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
