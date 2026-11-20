import React, { forwardRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLiveWork } from '../../context/LiveWorkContext';

export const Detailed2PageResume = forwardRef((props, ref) => {
  const { profile, experience, projects, education, certifications, achievements, techStackCategories, logisticsTechnology } = portfolioData;
  const { currentWork } = useLiveWork();

  const currentRole = experience[0];
  const previousRoles = experience.slice(1);
  const rvmProject = projects[0];
  const cryptoProject = projects[1];
  const placementProject = projects[2];

  return (
    <div
      ref={ref}
      id="detailed-2page-resume"
      className="w-full max-w-[210mm] bg-white text-slate-800 p-8 sm:p-10 mx-auto shadow-2xl rounded-sm font-sans text-xs leading-relaxed relative print:shadow-none print:p-6 print:max-w-none print:w-full border border-slate-200 space-y-8"
      style={{ boxSizing: 'border-box' }}
    >
      {/* ==================== PAGE 1 ==================== */}
      <div className="min-h-[280mm] flex flex-col justify-between print:min-h-[297mm] print:page-break-after-always">
        <div className="space-y-4">
          
          {/* Executive Header Banner */}
          <header className="border-b-2 border-slate-900 pb-4 mb-4 flex flex-col sm:flex-row justify-between items-start gap-3">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">{profile.name}</h1>
              <div className="text-sky-700 font-mono text-sm font-bold mt-0.5">{profile.title}</div>
            </div>
            <div className="text-[11px] font-mono text-slate-600 space-y-0.5 text-left sm:text-right">
              <div>📍 {profile.location} | 🎓 {profile.education}</div>
              <div>📧 <a href={`mailto:${profile.socials.email}`} className="text-sky-700 font-semibold">{profile.socials.email}</a> | 📞 {profile.socials.phoneCall}</div>
              <div>🌐 <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-sky-700">github.com/iamrazzz77</a> | 💼 <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-sky-700">linkedin.com/in/faishal-saif</a></div>
            </div>
          </header>

          {/* Professional Summary */}
          <section>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 text-sky-800 flex items-center gap-1.5">
              <span>■ Professional Summary</span>
            </h2>
            <p className="text-[11.5px] text-slate-700 leading-relaxed bg-slate-50 p-3 rounded border-l-2 border-sky-700 italic">
              {profile.summary}
            </p>
          </section>

          {/* Logistics Technology & Systems */}
          <section>
            <div className="p-3 rounded-lg bg-sky-50 border border-sky-200 text-[11px]">
              <div className="flex justify-between items-center font-mono font-bold text-sky-900 mb-1">
                <span>{logisticsTechnology.title}</span>
                <span className="text-[10px] bg-sky-200 px-2 py-0.5 rounded text-sky-900">{logisticsTechnology.subtitle}</span>
              </div>
              <p className="text-slate-700 mb-1.5">{logisticsTechnology.summary}</p>
              <ul className="list-disc pl-4 text-slate-600 text-[10.5px] space-y-0.5">
                {logisticsTechnology.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Prominent Current Role */}
          <section>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 text-sky-800 flex items-center gap-1.5">
              <span>■ Present Technical Role & Ownership</span>
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-bold text-slate-900 text-sm">
                <span>{currentRole.role} <span className="text-sky-700">@ {currentRole.company}</span></span>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">{currentRole.period}</span>
              </div>
              <div className="text-[10px] font-mono text-slate-500 mb-1">{currentRole.location} | {currentRole.type}</div>
              <p className="text-[11px] text-slate-600 mb-1">{currentRole.description}</p>
              <ul className="list-disc pl-4 text-[11px] text-slate-700 space-y-1">
                {currentRole.responsibilities.map((r, idx) => (
                  <li key={idx}>{r.replace(/\*\*/g, '')}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Featured Logistics Project (RVM) */}
          <section>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 text-sky-800 flex items-center gap-1.5">
              <span>■ Featured Logistics Technology Project</span>
            </h2>
            <div className="p-3 rounded bg-slate-50 border border-slate-200">
              <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
                <span>{rvmProject.title}</span>
                <span className="text-[10px] font-mono text-slate-500">{rvmProject.period}</span>
              </div>
              <div className="text-[10.5px] font-mono text-sky-700 font-semibold">{rvmProject.category} | Role: {rvmProject.details?.role}</div>
              <p className="text-[11px] text-slate-600 mt-1">{rvmProject.summary}</p>
              <ul className="list-disc pl-4 text-[10.5px] text-slate-600 space-y-0.5 mt-1">
                {(rvmProject.details?.highlights || []).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1 mt-2">
                {rvmProject.tags.map((t, idx) => (
                  <span key={idx} className="text-[9.5px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* Page 1 Footer */}
        <footer className="pt-2 border-t border-slate-200 flex justify-between items-center text-[10px] font-mono text-slate-400">
          <span>Faishal Saif — Software Engineer | IT Engineer | Logistics Technology</span>
          <span>Page 1 of 2</span>
        </footer>
      </div>

      {/* ==================== PAGE 2 ==================== */}
      <div className="min-h-[280mm] flex flex-col justify-between pt-6 print:pt-0 print:min-h-[297mm]">
        <div className="space-y-4">
          
          {/* Page 2 Top Header */}
          <div className="border-b border-slate-300 pb-2 flex justify-between items-center text-xs font-mono text-slate-500">
            <span className="font-bold text-slate-800">{profile.name} — Detailed Resume</span>
            <span>Software Engineer | IT Engineer | Logistics Tech</span>
          </div>

          {/* Additional Engineering Projects */}
          <section>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 text-sky-800 flex items-center gap-1.5">
              <span>■ Additional Software Engineering Projects</span>
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {[cryptoProject, placementProject].map((p) => (
                <div key={p.id} className="p-3 rounded bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
                    <span>{p.title}</span>
                    <span className="text-[10px] font-mono text-slate-500">{p.period}</span>
                  </div>
                  <div className="text-[10.5px] font-mono text-sky-700 font-semibold">{p.category} | Role: {p.details?.role}</div>
                  <p className="text-[11px] text-slate-600 mt-1">{p.summary}</p>
                  <ul className="list-disc pl-4 text-[10.5px] text-slate-600 space-y-0.5 mt-1">
                    {(p.details?.highlights || []).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="text-[9.5px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Previous Work Experience */}
          <section>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 text-sky-800 flex items-center gap-1.5">
              <span>■ Previous Career Timeline</span>
            </h2>
            <div className="space-y-3">
              {previousRoles.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
                    <span>{exp.role} <span className="text-sky-700">@ {exp.company}</span></span>
                    <span className="text-[10px] font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">{exp.location} | {exp.type}</div>
                  <p className="text-[11px] text-slate-600">{exp.description}</p>
                  <ul className="list-disc pl-4 text-[10.5px] text-slate-600 space-y-0.5">
                    {exp.responsibilities.slice(0, 4).map((r, idx) => (
                      <li key={idx}>{r.replace(/\*\*/g, '')}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Categorized Technical Skills */}
          <section>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 text-sky-800 flex items-center gap-1.5">
              <span>■ Categorized Technical Competencies</span>
            </h2>
            <div className="grid grid-cols-2 gap-3 text-[10.5px]">
              {techStackCategories.map((cat, idx) => (
                <div key={idx} className="p-2 rounded bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 font-mono">{cat.name}:</div>
                  <div className="text-slate-600 font-mono mt-0.5">
                    {cat.skills.map(s => typeof s === 'string' ? s : (s.name || '')).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Official Certifications & Education */}
          <div className="grid grid-cols-2 gap-4">
            <section>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 text-sky-800 flex items-center gap-1.5">
                <span>■ Official Certifications</span>
              </h2>
              <div className="space-y-1.5 text-[10.5px]">
                {certifications.map((c) => (
                  <div key={c.id}>
                    <div className="font-bold text-slate-900">{c.title}</div>
                    <div className="text-sky-700 font-mono text-[9.5px]">{c.issuer} ({c.date})</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <div>
                <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 text-sky-800 flex items-center gap-1.5">
                  <span>■ Education</span>
                </h2>
                {education.map((edu) => (
                  <div key={edu.id} className="text-[11px]">
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-sky-700 font-mono">{edu.institution}</div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 text-sky-800 flex items-center gap-1.5">
                  <span>■ Hackathons & Awards</span>
                </h2>
                <div className="space-y-1 text-[10.5px]">
                  {achievements.map((ach) => (
                    <div key={ach.id}>
                      <div className="font-bold text-slate-900">{ach.title}</div>
                      <div className="text-slate-500 font-mono text-[9.5px]">{ach.organization} ({ach.date})</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

        </div>

        {/* Page 2 Footer */}
        <footer className="pt-2 border-t border-slate-200 flex justify-between items-center text-[10px] font-mono text-slate-400">
          <span>Faishal Saif — Executive 2-Page Resume</span>
          <span>Page 2 of 2</span>
        </footer>
      </div>

    </div>
  );
});

Detailed2PageResume.displayName = 'Detailed2PageResume';
