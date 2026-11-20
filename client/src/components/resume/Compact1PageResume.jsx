import React, { forwardRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLiveWork } from '../../context/LiveWorkContext';

export const Compact1PageResume = forwardRef((props, ref) => {
  const { profile, experience, projects, education, certifications, techStackCategories, logisticsTechnology } = portfolioData;
  const { currentWork } = useLiveWork();

  const currentRole = experience.find(exp => exp.current) || experience[0];
  const featuredProject = projects[0]; // RVM Project

  return (
    <div
      ref={ref}
      id="compact-1page-resume"
      className="w-full max-w-[210mm] min-h-[297mm] h-[297mm] bg-white text-slate-800 p-7 sm:p-9 mx-auto shadow-2xl rounded-sm font-sans text-[11px] leading-snug relative print:shadow-none print:p-6 print:max-w-none print:w-full print:h-[297mm] print:overflow-hidden border border-slate-200 flex flex-col justify-between"
      style={{ boxSizing: 'border-box' }}
    >
      <div>
        {/* Executive Compact Header */}
        <header className="border-b-2 border-slate-900 pb-3 mb-3 flex flex-col sm:flex-row justify-between items-start gap-2">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">{profile.name}</h1>
            <div className="text-sky-700 font-mono text-[12px] font-bold mt-0.5">{profile.title}</div>
          </div>
          <div className="text-[10px] font-mono text-slate-600 space-y-0.5 text-left sm:text-right">
            <div>📍 {profile.location} | 🎓 {profile.education}</div>
            <div>📧 <a href={`mailto:${profile.socials.email}`} className="text-sky-700 font-semibold">{profile.socials.email}</a> | 📞 {profile.socials.phoneCall}</div>
            <div>🌐 <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-sky-700">github.com/iamrazzz77</a> | 💼 <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-sky-700">linkedin.com/in/faishal-saif</a></div>
          </div>
        </header>

        {/* Professional Summary (4-5 lines) */}
        <section className="mb-3">
          <h2 className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 text-sky-800 flex items-center gap-1">
            <span>■ Professional Summary</span>
          </h2>
          <p className="text-[10.5px] text-slate-700 leading-relaxed bg-slate-50 p-2 rounded border-l-2 border-sky-700 italic">
            {profile.summary}
          </p>
        </section>

        {/* Logistics Technology & Systems Section */}
        <section className="mb-3">
          <div className="p-2.5 rounded bg-sky-50/90 border border-sky-200 text-[10.5px]">
            <div className="flex justify-between items-center font-mono font-bold text-sky-900 text-[11px] mb-1">
              <span>{logisticsTechnology.title}</span>
              <span className="text-[9.5px] bg-sky-200 px-1.5 py-0.5 rounded text-sky-900 font-semibold">{logisticsTechnology.subtitle}</span>
            </div>
            <p className="text-slate-700 mb-1">{logisticsTechnology.summary}</p>
          </div>
        </section>

        {/* Current Role (Most Prominent Experience) */}
        <section className="mb-3">
          <h2 className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 text-sky-800 flex items-center gap-1">
            <span>■ Prominent Career Experience</span>
          </h2>
          <div className="space-y-1">
            <div className="flex justify-between items-baseline font-bold text-slate-900 text-[11.5px]">
              <span>{currentRole.role} <span className="text-sky-700">@ {currentRole.company}</span></span>
              <span className="text-[10px] font-mono text-slate-500 font-semibold">{currentRole.period}</span>
            </div>
            <div className="text-[10px] font-mono text-slate-500 mb-1">{currentRole.location} | {currentRole.type}</div>
            <ul className="list-disc pl-4 text-[10.5px] text-slate-700 space-y-0.5">
              {currentRole.responsibilities.map((r, idx) => (
                <li key={idx}>{r.replace(/\*\*/g, '')}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Featured Logistics Project */}
        <section className="mb-3">
          <h2 className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 text-sky-800 flex items-center gap-1">
            <span>■ Key Logistics Technology Project</span>
          </h2>
          <div className="p-2 rounded bg-slate-50 border border-slate-200">
            <div className="flex justify-between items-baseline font-bold text-slate-900 text-[11.5px]">
              <span>{featuredProject.title}</span>
              <span className="text-[9.5px] font-mono text-slate-500">{featuredProject.period}</span>
            </div>
            <div className="text-[10px] font-mono text-sky-700 font-semibold">{featuredProject.category} | Role: {featuredProject.details?.role}</div>
            <p className="text-[10.5px] text-slate-600 mt-0.5">{featuredProject.summary}</p>
            <ul className="list-disc pl-4 text-[10px] text-slate-600 space-y-0.5 mt-1">
              {(featuredProject.details?.highlights || []).slice(0, 3).map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Categorized Technical Skills */}
        <section className="mb-3">
          <h2 className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5 text-sky-800 flex items-center gap-1">
            <span>■ Categorized Technical Competencies</span>
          </h2>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            {techStackCategories.map((cat, idx) => (
              <div key={idx} className="p-1.5 rounded bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 font-mono text-[10px]">{cat.name}:</div>
                <div className="text-slate-600 leading-tight mt-0.5">
                  {cat.skills.map(s => typeof s === 'string' ? s : (s.name ? s.name.split('(')[0] : '')).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Credentials & Page Number */}
      <footer className="pt-2 border-t border-slate-200 flex justify-between items-center text-[9.5px] font-mono text-slate-400">
        <span>Faishal Saif — Compact 1-Page ATS Resume</span>
        <span>Page 1 of 1</span>
      </footer>
    </div>
  );
});

Compact1PageResume.displayName = 'Compact1PageResume';
