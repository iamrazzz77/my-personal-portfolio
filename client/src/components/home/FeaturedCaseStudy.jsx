import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Server, Database, Layout, ArrowRight, ShieldCheck, Zap, Activity, ChevronRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';

export const FeaturedCaseStudy = () => {
  const { featuredCaseStudy } = portfolioData;
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  const flow = [
    {
      stage: "Hardware",
      icon: Cpu,
      title: "Kiosk Optical & Barcode Sensors",
      desc: "RVM optical sensors & microcontrollers identify deposited plastic/aluminum recyclables and record real-time item weight."
    },
    {
      stage: "Software",
      icon: Activity,
      title: "Kiosk Touchscreen Driver UI",
      desc: "Custom local kiosk interface processes user login, guides item insertion, and validates deposit conditions."
    },
    {
      stage: "API",
      icon: Server,
      title: "Node.js & Express REST Endpoints",
      desc: "Kiosk emits encrypted telemetry JSON payloads over HTTPS to cloud endpoints for instant transaction verification."
    },
    {
      stage: "Database",
      icon: Database,
      title: "SQL Transactional Ledgers",
      desc: "Indexed SQL database procedures perform atomic reward credit updates, ensuring 100% zero double-counting."
    },
    {
      stage: "Dashboard",
      icon: Layout,
      title: "React Real-Time Analytics UI",
      desc: "Operations dashboard renders live bin fill-level gauges, daily deposit charts, and 80% capacity alert webhooks."
    },
    {
      stage: "Operations",
      icon: ShieldCheck,
      title: "On-Site Fleet Management in Riyadh",
      desc: "On-site hardware troubleshooting, sensor calibration, and preventative maintenance across Granada Mall deployment hubs."
    }
  ];

  const activeStageObj = flow[activeStageIdx];

  return (
    <section id="case-study" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Primary Flagship Case Study</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Featured Case Study
            </h2>
            <p className="text-base text-slate-400">
              Reverse Vending Machine & Logistics Technology — Production smart recycling kiosks deployed across Granada Mall, Riyadh.
            </p>
          </div>

          <Link
            to="/projects/reverse-vending-machine"
            className="px-5 py-2.5 rounded-xl glass-card text-sky-400 hover:text-sky-300 font-medium text-xs border border-sky-500/40 hover:border-sky-400 transition-all flex items-center gap-2 self-start md:self-auto group"
          >
            <span>Read Full Technical Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Interactive 6-Stage Visual System Flow Banner */}
        <div className="mb-10 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Interactive Architecture Pipeline (Click any stage to inspect)</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Stage {activeStageIdx + 1} of 6
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {flow.map((item, idx) => {
              const isSelected = idx === activeStageIdx;
              return (
                <button
                  key={item.stage}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all relative ${isSelected
                      ? 'bg-gradient-to-tr from-sky-500/20 to-indigo-600/20 border-2 border-sky-400 shadow-lg shadow-sky-500/20 scale-102'
                      : 'bg-slate-950/80 border border-slate-800/80 hover:border-sky-500/40'
                    }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-sky-300' : 'text-slate-300'}`}>
                      {item.stage}
                    </span>
                    {idx < flow.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-slate-600 hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug font-sans line-clamp-1">
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Expanded Active Stage Detail Box */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-sky-500/30 flex items-center justify-between gap-4 font-sans text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <span className="font-bold text-slate-100 text-sm font-mono">{activeStageObj.title}</span>
                <p className="text-slate-300 text-xs mt-0.5">{activeStageObj.desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Case Study Container with 3D Tilt */}
        <Card3D maxTilt={8} scaleOnHover={1.01} className="w-full">
          <div className="glass-card border border-sky-500/30 bg-[#0c1322]/90 shadow-2xl rounded-3xl p-6 sm:p-10 relative overflow-hidden preserve-3d">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Left Column: Detailed Sections */}
              <div className="lg:col-span-8 space-y-6">

                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/20 text-sky-300 border border-sky-500/40">
                    {featuredCaseStudy.category || "Logistics Technology / IoT"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-2">
                    {featuredCaseStudy.title}
                  </h3>
                </div>

                {/* Section: Overview */}
                <div className="space-y-1">
                  <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold">Overview</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {featuredCaseStudy.overview}
                  </p>
                </div>

                {/* Section: Challenge & My Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">Engineering Challenge</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {featuredCaseStudy.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">My Specific Role</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {featuredCaseStudy.myRole}
                    </p>
                  </div>
                </div>

                {/* Section: Implementation & Operational Contribution */}
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold">Technical Implementation</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {featuredCaseStudy.implementation}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-bold">Operational Contribution</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {featuredCaseStudy.operationalContribution}
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Technology & Verified Results */}
              <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">

                {/* Technology Stack Tags */}
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">Verified Technology Stack</div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {(featuredCaseStudy.technology || featuredCaseStudy.techStack || []).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-800 text-sky-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Results Metrics */}
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Operational Results
                  </div>
                  <div className="space-y-2.5">
                    {(featuredCaseStudy.results || []).map((r) => (
                      <div key={r.label} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">{r.label}</span>
                        <span className="font-bold text-sky-300">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <Link
                  to="/projects/reverse-vending-machine"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-mono text-xs font-bold shadow-lg shadow-sky-500/20 transition-all"
                >
                  <span>View Complete RVM Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

              </div>

            </div>

          </div>
        </Card3D>

      </div>
    </section>
  );
};
