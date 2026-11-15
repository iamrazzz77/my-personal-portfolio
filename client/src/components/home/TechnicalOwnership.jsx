import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, GitMerge, Cpu, Wrench, TrendingUp, CheckCircle2 } from 'lucide-react';

export const TechnicalOwnership = () => {
  const visualFlow = [
    {
      step: "01",
      title: "Plan",
      icon: Compass,
      desc: "Analyze requirements, define technical scope, and evaluate hardware/software integration needs."
    },
    {
      step: "02",
      title: "Coordinate",
      icon: GitMerge,
      desc: "Collaborate with senior management, vendor teams, and operational staff to align expectations."
    },
    {
      step: "03",
      title: "Implement",
      icon: Cpu,
      desc: "Deploy server infrastructure, REST API endpoints, SQL ledgers, and kiosk software configurations."
    },
    {
      step: "04",
      title: "Troubleshoot",
      icon: Wrench,
      desc: "Diagnose hardware optical sensors, network connectivity drops, and SQL transactional queries."
    },
    {
      step: "05",
      title: "Improve",
      icon: TrendingUp,
      desc: "Optimize system uptime, configure automated fill-level alerts, and refine deployment workflows."
    }
  ];

  return (
    <section className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Operational Responsibility & Accountability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Ownership & Execution
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Taking complete technical responsibility for system deployments, hardware-software integration, server environments, and platform reliability.
          </p>
        </div>

        {/* 5-Stage Visual Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {visualFlow.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 p-5 flex flex-col justify-between hover:border-sky-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-sky-400 group-hover:bg-sky-500/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-2 font-mono">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Technical Ownership</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
