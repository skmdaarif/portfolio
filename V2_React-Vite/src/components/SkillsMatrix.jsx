import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, Brain, Globe, Wrench, Layers } from 'lucide-react';
import { skillsData } from '../data/resumeData';

export default function SkillsMatrix() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'ml', label: 'Machine Learning & AI' },
    { id: 'embedded', label: 'Embedded & IoT' },
    { id: 'web', label: 'Web & Backend' },
    { id: 'tools', label: 'Tools & CAD' }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
          <Layers size={14} />
          <span>TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Skills & Technical Matrix
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Categorized overview of programming languages, machine learning frameworks, embedded microcontrollers, and developer tools.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeFilter === f.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg font-mono font-bold">
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{skill.name}</h4>
                  <p className="text-xs font-mono text-slate-400">{skill.desc}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
                <span className="text-cyan-400">{skill.badge}</span>
                <span className="text-slate-400">{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
