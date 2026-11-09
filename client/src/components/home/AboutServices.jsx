import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, ShieldAlert, Code2, Cpu, Workflow, CheckCircle, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';

export const AboutServices = () => {
  const { profile, services } = portfolioData;

  const iconMap = {
    Server: Server,
    Database: Database,
    ShieldAlert: ShieldAlert,
    Code2: Code2,
    Cpu: Cpu,
    Workflow: Workflow
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Professional Profile & Engineering Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            What I Actually Do
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Real-world systems administration, software engineering standards, and logistics technology operations.
          </p>
        </div>

        {/* Bio Overview Card */}
        <Card3D maxTilt={6} scaleOnHover={1.01} className="mb-16">
          <div className="glass-card p-8 border border-slate-700/80 bg-[#0f172a]/60 preserve-3d">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              <div className="lg:col-span-2 space-y-4 translate-z-10">
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-sky-400"></span>
                  IT Infrastructure Meets Software Engineering
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {profile.bio}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Enterprise Server & Active Directory Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>MongoDB / MySQL / SQL Server Admin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>React.js & Node.js Full-Stack Applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>Hardware IoT to Cloud REST API Integrations</span>
                  </div>
                </div>
              </div>

              {/* Quick Stat Highlights */}
              <div className="glass-card p-6 border border-slate-800 bg-slate-950/80 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <img 
                    src={profile.profileImage || "/images/faishal-saif-profile.jpg"} 
                    alt={profile.name}
                    className="w-12 h-12 rounded-xl object-cover object-top border border-sky-500/30"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-100">{profile.name}</div>
                    <div className="text-[11px] font-mono text-sky-400">Riyadh, Saudi Arabia</div>
                  </div>
                </div>

                <div className="border-b border-slate-800 pb-3">
                  <div className="text-xl font-bold text-slate-100">B.Tech CSE</div>
                  <div className="text-xs text-slate-400">Computer Science & Engineering</div>
                </div>


                <div className="border-b border-slate-800 pb-3">
                  <div className="text-xl font-bold text-emerald-400">IT Engineer</div>
                  <div className="text-xs text-slate-400">Current Role in Riyadh, KSA</div>
                </div>

                <div>
                  <div className="text-xl font-bold text-indigo-400">Hardware + Web API</div>
                  <div className="text-xs text-slate-400">Reverse Vending Machine Case Study</div>
                </div>
              </div>

            </div>
          </div>
        </Card3D>

        {/* What I Do — 6 Cards (IT Infrastructure Leading) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-100">What I Do</h3>
            <span className="text-xs font-mono text-slate-400">6 Core Engineering Capacities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Server;
              const isITLead = index < 3; // Top 3 are IT Infrastructure / Admin / Support

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card3D maxTilt={10} scaleOnHover={1.03} className="h-full">
                    <div className={`glass-card p-6 border transition-all duration-300 relative group h-full preserve-3d ${
                      isITLead 
                        ? 'border-slate-700/90 bg-slate-900/80 hover:border-emerald-500/60' 
                        : 'border-slate-800 bg-slate-900/50 hover:border-sky-500/60'
                    }`}>
                      {/* Service Number Badge */}
                      <div className="absolute top-4 right-4 text-xs font-mono text-slate-400 font-bold translate-z-20">
                        0{service.order}
                      </div>

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 translate-z-20 ${
                        isITLead 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Card Title */}
                      <h4 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors translate-z-20">
                        {service.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed mb-6 translate-z-10">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 translate-z-20">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                              isITLead 
                                ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/50' 
                                : 'bg-slate-800/80 text-sky-300 border-slate-700/60'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
