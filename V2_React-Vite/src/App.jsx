import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ResearchSpotlight from './components/ResearchSpotlight';
import ProjectsSlider from './components/ProjectsSlider';
import ProjectModal from './components/ProjectModal';
import InteractivePlayground from './components/InteractivePlayground';
import SkillsMatrix from './components/SkillsMatrix';
import EducationTimeline from './components/EducationTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Background Particle Mesh Canvas */}
      <ParticleBackground />

      {/* Toast Notice */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-slate-900/95 text-cyan-300 border border-cyan-500/40 px-5 py-3 rounded-xl shadow-2xl backdrop-blur-md text-sm font-mono flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero onCopyEmail={() => showToast('Copied email to clipboard!')} />
        <Stats />
        <ResearchSpotlight />
        <ProjectsSlider onOpenModal={(proj) => setSelectedProject(proj)} />
        <InteractivePlayground onShowToast={showToast} />
        <SkillsMatrix />
        <EducationTimeline />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
