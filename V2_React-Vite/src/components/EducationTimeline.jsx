import React from 'react';
import { GraduationCap, Award, Trophy, CheckCircle2 } from 'lucide-react';
import { education, certifications, achievements } from '../data/resumeData';

export default function EducationTimeline() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Education Timeline */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
              <GraduationCap size={14} />
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <h3 className="text-3xl font-bold font-display text-white">Education Milestones</h3>
          </div>

          <div className="relative pl-8 space-y-8 border-l border-slate-800">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-slate-950 ${edu.isPrimary ? 'bg-cyan-500 shadow-[0_0_12px_#38bdf8]' : 'bg-indigo-500'}`} />
                <div className="glass-panel p-6 rounded-2xl space-y-2">
                  <div className="flex flex-wrap justify-between items-start">
                    <h4 className="text-lg font-bold text-white font-display">{edu.institution}</h4>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-300">{edu.degree}</div>
                  <div className="text-xs font-mono text-slate-400">{edu.location}</div>
                  <div className="pt-2">
                    <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Certifications & Achievements */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Certifications */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
              <Award size={14} />
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-6">Certifications</h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">{cert.name}</h5>
                      <p className="text-xs font-mono text-slate-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 mb-3">
              <Trophy size={14} />
              <span>HONORS & RECOGNITION</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-6">Achievements</h3>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl space-y-2 border-l-4 border-l-amber-400">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Trophy size={15} />
                    <span>{ach.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
