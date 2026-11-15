   import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap, Award, Server } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';

const renderFormattedText = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-slate-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export const ExperienceTimeline = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Career Timeline & Credentials
          </h2>
          <p className="text-base text-slate-400">
            Genuine active role as an IT Engineer in Riyadh, backed by academic computer science engineering credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left 7 Cols: Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 font-mono">
              <Server className="w-5 h-5 text-emerald-400" />
              Work & Engineering Experience
            </h3>

            <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-10">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-[#0a0e17] z-20 ${
                    exp.current ? 'bg-emerald-400 ring-4 ring-emerald-500/20' : 'bg-sky-400'
                  }`}></span>

                  <Card3D maxTilt={8} scaleOnHover={1.02} className="w-full">
                    <div className="glass-card p-6 border border-slate-800 bg-slate-900/60 rounded-2xl space-y-4 hover:border-slate-700 transition-all preserve-3d">
                      
                      {/* Header line */}
                      <div className="flex flex-wrap items-start justify-between gap-2 translate-z-20">
                        <div>
                          <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                            {exp.role}
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold">
                                Present Role
                              </span>
                            )}
                          </h4>
                          <div className="text-sm font-semibold text-sky-400 font-mono">
                            {exp.company}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/80 px-3 py-1 rounded-lg border border-slate-800">
                          <Calendar className="w-3.5 h-3.5 text-sky-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono translate-z-10">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed translate-z-10">
                        {renderFormattedText(exp.description)}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs translate-z-10">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{renderFormattedText(resp)}</span>
                          </div>
                        ))}
                      </div>

                      {/* Real Workplace & RVM Field Evidence Photos */}
                      {exp.workplaceImages && (
                        <div className="pt-3 border-t border-slate-800/80 space-y-2">
                          <div className="text-[10px] font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Active RVM Field Operations & Deployment Gallery</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {exp.workplaceImages.map((img, i) => (
                              <div key={i} className="group/img relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3]">
                                <img
                                  src={img.url}
                                  alt={img.caption}
                                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                                  <p className="text-[9px] font-mono text-slate-200 leading-tight font-semibold">{img.title}</p>
                                  <p className="text-[8px] text-slate-400 truncate">{img.caption}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Skills pills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 font-mono text-[10px] translate-z-20">
                        {exp.skillsUsed.map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right 5 Cols: Education & Degree Card */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 font-mono">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              Academic Foundation
            </h3>

            {education.map((edu) => (
              <Card3D key={edu.id} maxTilt={8} scaleOnHover={1.02} className="w-full">
                <div className="glass-card p-6 border border-slate-800 bg-slate-900/60 rounded-2xl space-y-4 preserve-3d">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 translate-z-20">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {edu.period}
                    </span>
                  </div>

                  <div className="translate-z-20">
                    <h4 className="text-lg font-bold text-slate-100">{edu.degree}</h4>
                    <div className="text-sm font-medium text-sky-400 font-mono mt-0.5">{edu.institution}</div>
                    <div className="text-xs text-slate-400 font-mono mt-1">Computer Science & Engineering</div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs translate-z-10">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-300">
                        <Award className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            ))}

            {/* IT Engineer Credentials Summary Box */}
            <Card3D maxTilt={6} scaleOnHover={1.02} className="w-full">
              <div className="glass-card p-6 border border-emerald-500/30 bg-emerald-950/20 rounded-2xl space-y-3 preserve-3d">
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider translate-z-20">
                  Current Role Credibility Note
                </div>
                <p className="text-xs text-slate-300 leading-relaxed translate-z-10">
                  Faishal's active position as an IT Engineer in Riyadh gives him first-hand experience with real production servers, network operations, database administration, and user ticket SLAs — creating a rare, reliable foundation for software development.
                </p>
              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
};
