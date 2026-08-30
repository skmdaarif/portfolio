import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function ContactSection({ onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    if (onShowToast) onShowToast('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailto;
    if (onShowToast) onShowToast('Launching email client...');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel p-8 sm:p-14 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Send size={14} />
              <span>LET'S CONNECT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Get in touch for internships & engineering roles.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Feel free to reach out directly via email, phone, or LinkedIn. Open to discussions on AI/ML research, embedded IoT projects, and software engineering positions.
            </p>

            <div className="space-y-4 pt-2 font-mono text-xs sm:text-sm">
              
              {/* Email */}
              <div className="flex items-center justify-between p-4 bg-slate-900/90 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">EMAIL</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-cyan-400">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button onClick={copyEmail} className="p-2 text-slate-400 hover:text-cyan-400" title="Copy Email">
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 bg-slate-900/90 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">MOBILE / WHATSAPP</div>
                    <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-white hover:text-emerald-400">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button onClick={copyPhone} className="p-2 text-slate-400 hover:text-emerald-400" title="Copy Phone">
                  {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-600 text-center flex items-center justify-center gap-2 text-white hover:text-cyan-400 transition-all"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-600 text-center flex items-center justify-center gap-2 text-white hover:text-cyan-400 transition-all"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h4 className="text-xl font-bold font-display text-white mb-6">Send Direct Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Message / Inquiry</label>
                <textarea 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Aarif, I saw your portfolio and would like to connect..." 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
