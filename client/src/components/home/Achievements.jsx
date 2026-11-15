import React from 'react';
import { Award, Trophy, Medal, Crown, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';

export const Achievements = () => {
  const { achievements } = portfolioData;

  const iconMap = {
    Trophy: Trophy,
    Medal: Medal,
    Crown: Crown,
    Award: Award
  };

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 relative bg-slate-950/40 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Hackathons & Achievements
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            National hackathon awards, strategic competitions, and college-level championship recognitions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            const isGold = item.badge?.includes('1st') || item.title?.includes('1st');

            return (
              <Card3D key={item.id} maxTilt={10} scaleOnHover={1.03} className="h-full">
                <div
                  className={`glass-card p-6 border transition-all group flex flex-col justify-between h-full preserve-3d ${
                    isGold
                      ? 'border-amber-500/40 bg-gradient-to-b from-amber-500/5 to-transparent hover:border-amber-400'
                      : 'border-slate-800 bg-slate-900/60 hover:border-sky-500/50'
                  }`}
                >
                  <div className="space-y-3 preserve-3d">
                    <div className="flex items-center justify-between translate-z-20">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isGold
                          ? 'bg-amber-500/20 text-amber-500 border border-amber-500/40'
                          : 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      {item.badge && (
                        <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${
                          isGold
                            ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30'
                            : 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/30'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors translate-z-20">
                      {item.title}
                    </h3>

                    <div className="text-xs font-mono text-sky-600 dark:text-sky-400 translate-z-10">
                      {item.organization} • {item.date}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans translate-z-10">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center justify-between translate-z-20">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Winner
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
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
