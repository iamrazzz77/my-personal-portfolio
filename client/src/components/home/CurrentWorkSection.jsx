import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, GitCommit, ArrowUpRight, CheckCircle2, Clock, Cpu, RefreshCw, Sparkles, Terminal, Edit3 } from 'lucide-react';
import { useLiveWork } from '../../context/LiveWorkContext';
import { Card3D } from '../common/Card3D';

export const CurrentWorkSection = () => {
  const { currentWork, githubCommits, githubLoading, refreshGithub } = useLiveWork();

  return (
    <section id="currently-working" className="py-16 relative overflow-hidden bg-[#070b14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>LIVE WORK STATUS & REAL-TIME ACTIVITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
              Currently Working On
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl font-sans">
              Real-time snapshot of the project I am actively engineering right now. Automatically synced with my GitHub repository activity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={refreshGithub}
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-sky-400 border border-slate-800 transition-all flex items-center gap-1.5 text-xs font-mono transform hover:-translate-y-0.5"
              title="Refresh GitHub Commits Feed"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${githubLoading ? 'animate-spin text-sky-400' : ''}`} />
              <span>Sync GitHub</span>
            </button>
            <Link
              to="/admin/dashboard"
              className="px-3.5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 text-xs font-mono transition-all flex items-center gap-1.5 transform hover:-translate-y-0.5"
            >
              <Edit3 className="w-3.5 h-3.5 text-sky-400" />
              <span>Admin Live Update</span>
            </Link>
          </div>
        </div>

        {/* Main Grid: Active Project Card + GitHub Live Activity Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Project Main Card (8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <Card3D maxTilt={8} scaleOnHover={1.01} className="h-full">
              <div className="glass-card p-6 sm:p-8 border border-slate-800 bg-[#0d1527]/90 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-2xl h-full preserve-3d">
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-sky-500 to-indigo-500"></div>

                <div className="space-y-6 preserve-3d">
                  
                  {/* Badge & Progress Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 translate-z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400 tracking-wide">
                      {currentWork.statusTag}
                    </span>

                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Last Updated: {new Date(currentWork.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2 translate-z-20">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                      {currentWork.title}
                    </h3>
                    <p className="text-sm font-mono text-sky-400">
                      {currentWork.subtitle}
                    </p>
                  </div>

                  {/* Progress Bar Component */}
                  <div className="space-y-2 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 translate-z-10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300 font-semibold flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Milestone Completion Stage
                      </span>
                      <span className="text-emerald-400 font-extrabold text-sm">{currentWork.progressPercent}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${currentWork.progressPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-emerald-500 via-sky-400 to-indigo-500 rounded-full shadow-lg shadow-sky-500/30"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Current Active Tasks List */}
                  <div className="space-y-3 translate-z-10">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-sky-400" />
                      Active Sprint Deliverables & Tasks:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-sans">
                      {currentWork.milestoneTasks.map((task, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 translate-z-20">
                    <span className="text-xs font-mono text-slate-500">Tech Stack:</span>
                    {currentWork.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-sky-300 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 translate-z-20">
                  <Link
                    to="/projects/reverse-vending-machine"
                    className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-medium text-xs shadow-lg shadow-sky-500/20 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <span>View Full Architecture Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  
                  <a
                    href={currentWork.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors"
                  >
                    <GitCommit className="w-4 h-4 text-sky-400" />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>
            </Card3D>
          </motion.div>

          {/* GitHub Real-time Activity Feed (4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <Card3D maxTilt={10} scaleOnHover={1.02} className="h-full">
              <div className="glass-card p-6 border border-slate-800 bg-[#0a1120] rounded-3xl flex flex-col justify-between space-y-6 shadow-xl h-full preserve-3d">
                <div className="space-y-4 preserve-3d">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 translate-z-20">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-200 uppercase">
                      <Terminal className="w-4 h-4 text-sky-400" />
                      <span>GitHub Live Activity</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans translate-z-10">
                    Real-time public commit log synced automatically from <a href="https://github.com/iamrazzz77" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">@iamrazzz77</a>:
                  </p>

                  {/* Commit Items List */}
                  <div className="space-y-3 font-mono text-xs translate-z-20">
                    {githubCommits.map((commit) => (
                      <a
                        key={commit.id}
                        href={commit.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all space-y-1.5 group"
                      >
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span className="text-sky-400 font-semibold truncate max-w-[140px]">📦 {commit.repo}</span>
                          <span>{commit.date}</span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans line-clamp-2 group-hover:text-sky-300 transition-colors">
                          {commit.message}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-center translate-z-20">
                  <a
                    href="https://github.com/iamrazzz77"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-sky-400 hover:underline flex items-center justify-center gap-1"
                  >
                    <span>View Full GitHub Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Card3D>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
