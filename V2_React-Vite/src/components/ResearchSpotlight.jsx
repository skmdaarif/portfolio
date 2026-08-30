import React from 'react';
import { Microscope, CheckCircle2, Network, LineChart, Gamepad2, Send } from 'lucide-react';
import { researchExperience } from '../data/resumeData';

export default function ResearchSpotlight() {
  const icons = [Network, LineChart, Gamepad2, Send];

  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-300">
          <Microscope size={14} />
          <span>ACADEMIC & RESEARCH SPOTLIGHT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          {researchExperience.institution}
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          {researchExperience.role} ({researchExperience.period})
        </p>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-indigo-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-indigo-600/30 text-indigo-300 border border-indigo-500/40">
                {researchExperience.certificate}
              </span>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                Neural Networks & RL
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              First-Principles Deep Learning & RL Agent Benchmarking
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {researchExperience.highlights.map((item, idx) => {
                const IconComponent = icons[idx] || CheckCircle2;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent size={15} />
                    </div>
                    <p>
                      <strong className="text-white">{item.title}:</strong> {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Tech Badges */}
            <div className="pt-4 flex flex-wrap gap-2">
              {researchExperience.tech.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 text-cyan-300 border border-cyan-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Research Box Diagram */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 font-mono text-xs">
            <div className="text-slate-400 border-b border-slate-800 pb-3 flex justify-between items-center">
              <span>// Research Equations & Metrics</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 size={13} /> Verified
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <div className="text-cyan-400 font-bold mb-1">01. Backprop Numerical Check</div>
                <div className="text-slate-400">Finite difference checking: (f(x+ε) - f(x-ε)) / (2ε)</div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <div className="text-indigo-400 font-bold mb-1">02. Temporal Difference (TD) RL</div>
                <div className="text-slate-400">Q(s, a) ← Q(s, a) + α [r + γ max Q(s', a') - Q(s, a)]</div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <div className="text-amber-400 font-bold mb-1">03. Autonomous UAV Trajectory</div>
                <div className="text-slate-400">Continuous action space policy gradient optimization.</div>
              </div>
            </div>

            <div className="p-3 bg-indigo-950/40 border border-indigo-800/50 rounded-xl text-center text-indigo-300">
              IIT Delhi Certified Project Intern
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
