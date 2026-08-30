import React, { useState } from 'react';
import { Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-lg text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            SZ
          </div>
          <div>
            <div className="font-display font-bold text-base tracking-wide text-white group-hover:text-cyan-400 transition-colors">
              Sheikh Md Aarif
            </div>
            <div className="text-xs font-mono text-cyan-400/80">Al Zubair</div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#research" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span>Research</span>
            <span className="px-1.5 py-0.5 text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">IIT Delhi</span>
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#playground" className="hover:text-cyan-400 transition-colors">Playground</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-105"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-105"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-6 py-6 space-y-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-base text-slate-300 hover:text-cyan-400">About</a>
          <a href="#research" onClick={() => setIsOpen(false)} className="block text-base text-slate-300 hover:text-cyan-400">IIT Delhi Research</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-base text-slate-300 hover:text-cyan-400">Projects</a>
          <a href="#playground" onClick={() => setIsOpen(false)} className="block text-base text-slate-300 hover:text-cyan-400">Interactive Playground</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block text-base text-slate-300 hover:text-cyan-400">Skills</a>
          <a href="#education" onClick={() => setIsOpen(false)} className="block text-base text-slate-300 hover:text-cyan-400">Education & Certifications</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-base text-slate-300 hover:text-cyan-400">Contact</a>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-800 text-white"><Github size={18} /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-800 text-white"><Linkedin size={18} /></a>
            </div>
            <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm">Contact Me</a>
          </div>
        </div>
      )}
    </nav>
  );
}
