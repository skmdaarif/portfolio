import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel w-full max-w-3xl rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{project.period}</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-slate-800/80 border border-slate-700/60 p-3 rounded-xl text-center">
                  <div className="text-xs text-slate-400 font-mono">{m.label}</div>
                  <div className="text-xs sm:text-sm font-bold text-cyan-400 mt-1">{m.val}</div>
                </div>
              ))}
            </div>
          )}

          {/* Summary & Bullet Highlights */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Executive Overview</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.summary}</p>

            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold pt-2">Engineering Accomplishments</h4>
            <ul className="space-y-2.5">
              {project.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-mono text-slate-400">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-cyan-300 border border-cyan-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          {project.github && (
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 transition-all"
              >
                <Github size={15} />
                <span>View Source on GitHub</span>
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
