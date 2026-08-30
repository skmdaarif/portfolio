import React from 'react';
import { personalInfo } from '../data/resumeData';

export default function Stats() {
  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="glass-panel p-6 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-extrabold font-display gradient-text flex items-center justify-center">
              9.80
            </div>
            <div className="text-xs sm:text-sm font-mono text-slate-400 mt-1">B.Tech CSE CGPA (LPU)</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-extrabold font-display gradient-text-emerald flex items-center justify-center">
              #15
            </div>
            <div className="text-xs sm:text-sm font-mono text-slate-400 mt-1">Hackathon (50+ Teams)</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-extrabold font-display gradient-text-amber flex items-center justify-center">
              20+
            </div>
            <div className="text-xs sm:text-sm font-mono text-slate-400 mt-1">LeetCode Complex Algos</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-indigo-400 flex items-center justify-center">
              <span>IIT</span><span className="text-cyan-400 ml-1">Delhi</span>
            </div>
            <div className="text-xs sm:text-sm font-mono text-slate-400 mt-1">Research Internship Alum</div>
          </div>

        </div>
      </div>
    </section>
  );
}
