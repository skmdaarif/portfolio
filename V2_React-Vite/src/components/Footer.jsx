import React from 'react';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 relative z-10 text-center font-mono text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 space-y-3">
        <div className="flex items-center justify-center gap-6 text-slate-400">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400">
            Email
          </a>
        </div>
        <p>© 2026 {personalInfo.name}. Built with React, Vite, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}
