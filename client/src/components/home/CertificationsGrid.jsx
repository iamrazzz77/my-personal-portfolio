import React from 'react';
import { Award, Code2, Server, Database, Cloud, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';

export const CertificationsGrid = () => {
  const { certifications } = portfolioData;

  const iconMap = {
    Code2: Code2,
    Server: Server,
    Database: Database,
    Cloud: Cloud
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Knowledge & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-base text-slate-400">
            Formal technical certifications spanning web development, server administration, and database design.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;

            return (
              <Card3D key={cert.id} maxTilt={10} scaleOnHover={1.03} className="h-full">
                <div className="glass-card p-6 border border-slate-800 bg-slate-900/50 rounded-2xl space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between group h-full preserve-3d">
                  <div className="space-y-4 preserve-3d">
                    <div className="flex items-center justify-between translate-z-20">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                        {cert.date}
                      </span>
                    </div>

                    <div className="translate-z-20">
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="text-xs font-mono text-sky-400 mt-1">
                        {cert.issuer}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed translate-z-10">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 translate-z-20">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" /> ID: {cert.credentialId}
                    </span>
                  </div>

                </div>
              </Card3D>
            );
          })}
        </div>

      </div>
    </section>
  );
};
