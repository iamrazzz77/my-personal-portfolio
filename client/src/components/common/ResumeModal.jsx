import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText, CheckCircle2, MapPin, Mail, Phone, ExternalLink, Code2, Server, Award, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { downloadResume, generatePrintableResume } from '../../utils/downloadResume';
import { useNavigate } from 'react-router-dom';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const [resumeVersion, setResumeVersion] = useState('1page'); // '1page' | '2page'
  const { profile, services, experienceTimeline, projects, certifications, achievements } = portfolioData;

  const handleDownload = () => {
    downloadResume();
  };

  const handlePrint = () => {
    generatePrintableResume(true);
  };

  const handleOpenFullPage = () => {
    onClose();
    navigate('/resume');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] glass-card border border-slate-200 dark:border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 bg-white dark:bg-[#0b1120]"
        >
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-100 font-mono">Faishal Saif — Dynamic A4 Resume Generator</h2>
                <p className="text-xs text-sky-400 font-mono">Software Engineer | IT Engineer | Logistics Technology</p>
              </div>
            </div>

            {/* Version Switcher & Action Controls */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Version Switcher Tabs */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setResumeVersion('1page')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    resumeVersion === '1page'
                      ? 'bg-sky-500 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  1-Page Resume
                </button>
                <button
                  onClick={() => setResumeVersion('2page')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    resumeVersion === '2page'
                      ? 'bg-sky-500 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  2-Page Resume
                </button>
              </div>

              <button
                onClick={handleDownload}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-sky-500/20 transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-xl glass-card text-slate-300 hover:text-sky-400 border border-slate-700 text-xs font-medium transition-all flex items-center gap-1"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl glass-card text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-slate-300 leading-relaxed text-sm">
            
            {/* Header Resume Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-sky-950/40 border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-white tracking-tight">{profile.name}</h1>
                  <div className="text-sky-400 font-mono text-sm font-semibold mt-1">{profile.title}</div>
                </div>
                <div className="text-xs font-mono space-y-1 text-slate-400">
                  <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-sky-400" /> {profile.location}</div>
                  <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-sky-400" /> {profile.socials.email}</div>
                  <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {profile.socials.phoneCall}</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 border-t border-slate-800/80 pt-3 italic">
                "{profile.summary}"
              </p>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold flex items-center gap-2 border-b border-slate-800 pb-2">
                <Server className="w-4 h-4 text-sky-400" />
                Professional Experience Timeline
              </h3>

              <div className="space-y-4">
                {(experienceTimeline || []).map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="font-bold text-slate-100 text-sm">{exp.role} — <span className="text-sky-400">{exp.company}</span></div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">{exp.period}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">{exp.location}</div>
                    <p className="text-xs text-slate-300 pt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2 border-b border-slate-800 pb-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                Key Software & Systems Projects
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="font-bold text-slate-100 text-sm">{proj.title}</div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{proj.period}</span>
                    </div>
                    <div className="text-xs font-mono text-sky-400">{proj.category}</div>
                    <p className="text-xs text-slate-300">{proj.overview}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Education */}
            {resumeVersion === '2page' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold border-b border-slate-800 pb-2">
                    Official Certifications
                  </h3>
                  <div className="space-y-2 text-xs font-mono">
                    {(certifications || []).map((c, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-slate-200">
                        {typeof c === 'string' ? c : c.title}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold border-b border-slate-800 pb-2">
                    Education & Credentials
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs font-mono space-y-1">
                    <div className="font-bold text-slate-100">{profile.education}</div>
                    <div className="text-slate-400">Computer Science & Engineering</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer Navigation Link */}
          <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Formatted for A4 ATS Parsing</span>
            <button
              onClick={handleOpenFullPage}
              className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1"
            >
              <span>Open Dedicated Resume Generator Page →</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
