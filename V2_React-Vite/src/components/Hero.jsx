import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Hero({ onCopyEmail }) {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  const words = [
    'Computer Science Engineer',
    'IIT Delhi Research Intern',
    'AI / ML & Neural Networks Explorer',
    'Embedded Systems & IoT Architect',
    'C++ & Python Developer'
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypedText(currentWord.substring(0, isDeleting ? typedText.length - 1 : typedText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative cyber-grid">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>B.Tech CSE • CGPA 9.80 • Open to Opportunities</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-widest text-slate-400 font-mono">Hi there, I am</h2>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Sheikh Md Aarif <br />
              <span className="gradient-text">Al Zubair</span>
            </h1>
            <div className="text-xl sm:text-2xl font-mono text-slate-300 flex items-center gap-2 pt-2">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span className="text-cyan-300 font-medium border-r-2 border-cyan-400 pr-1 animate-pulse">
                {typedText}
              </span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            {personalInfo.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href="#research" 
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 font-medium text-sm transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <Brain size={18} className="text-indigo-400" />
              <span>IIT Delhi Research</span>
            </a>

            <button 
              onClick={handleCopy} 
              className="px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-slate-700 text-sm transition-all flex items-center gap-2 font-mono text-xs"
              title="Copy Email"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Interactive Terminal Preview */}
        <div className="lg:col-span-5">
          <div className="terminal-window border border-slate-800/80 rounded-2xl shadow-2xl p-0 overflow-hidden">
            <div className="terminal-header flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
                <span className="text-xs font-mono text-slate-400 ml-2">aarif@dev-workstation: ~/profile</span>
              </div>
              <Terminal size={14} className="text-slate-500 mr-1" />
            </div>

            <div className="p-6 font-mono text-xs sm:text-sm space-y-4 text-slate-300 bg-slate-950/90">
              <div>
                <span className="text-emerald-400">aarif@archlinux</span>:<span className="text-cyan-400">~</span>$ cat profile.json
              </div>
              <div className="text-slate-400 pl-2 space-y-1">
                <div>{'{'}</div>
                <div className="pl-4"><span className="text-indigo-400">"name"</span>: <span className="text-amber-300">"Sheikh Md Aarif Al Zubair"</span>,</div>
                <div className="pl-4"><span className="text-indigo-400">"university"</span>: <span className="text-amber-300">"Lovely Professional University"</span>,</div>
                <div className="pl-4"><span className="text-indigo-400">"degree"</span>: <span className="text-amber-300">"B.Tech CSE"</span>,</div>
                <div className="pl-4"><span className="text-indigo-400">"cgpa"</span>: <span className="text-cyan-300 font-bold">9.80</span>,</div>
                <div className="pl-4"><span className="text-indigo-400">"research"</span>: <span className="text-amber-300">"IIT Delhi (Neural Nets & RL)"</span>,</div>
                <div className="pl-4"><span className="text-indigo-400">"core_stack"</span>: [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"C++"</span>, <span className="text-emerald-300">"ESP32"</span>]</div>
                <div>{'}'}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5">
                <div className="flex justify-between text-slate-400">
                  <span>Hardware & Embedded:</span>
                  <span className="text-cyan-400 font-bold">ONLINE (ESP32/PMS7003)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Neural Net Engine:</span>
                  <span className="text-emerald-400 font-bold">MLP 1st-Principles Online</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Algorithm Mastery:</span>
                  <span className="text-purple-400 font-bold">20+ LeetCode Verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
