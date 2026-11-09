import React, { useState, useEffect } from 'react';
import { MapPin, Zap, CheckCircle2, Clock, Server } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const StatusStrip = () => {
  const { status } = portfolioData.profile;
  const [riyadhTime, setRiyadhTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Riyadh',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setRiyadhTime(timeStr);
      } catch (err) {
        setRiyadhTime('UTC+3');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-5 border border-slate-700/80 dark:border-slate-800 bg-white/95 dark:bg-[#0c1322]/95 shadow-xl relative overflow-hidden transition-colors rounded-2xl">
          
          {/* Top Gradient Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500" />

          {/* 4-Column Grid: Fully Responsive & Zero Text Overflow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            
            {/* Box 1: Primary Engineering Position */}
            <div className="flex items-center gap-3 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 p-3.5 rounded-xl shadow-xs">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                  Active Engineering Position
                </span>
                <span className="text-sm font-extrabold text-slate-900 dark:text-white font-mono leading-tight mt-0.5 truncate">
                  IT Engineer <span className="text-xs font-normal text-slate-500 dark:text-slate-400">• Riyadh</span>
                </span>
              </div>
            </div>

            {/* Box 2: Location & Riyadh Live Time */}
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 shadow-xs">
              <Clock className="w-4 h-4 text-sky-500 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
                  🇸🇦 Riyadh Local Time
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono leading-tight mt-0.5">
                  {riyadhTime ? `${riyadhTime} (UTC+3)` : 'Riyadh, Saudi Arabia'}
                </span>
              </div>
            </div>

            {/* Box 3: Core Technical Focus */}
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 shadow-xs">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
                  Core Focus
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100 font-sans leading-tight mt-0.5">
                  Logistics Tech & Systems
                </span>
              </div>
            </div>

            {/* Box 4: Current Availability */}
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
                  Availability Status
                </span>
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 font-mono leading-tight mt-0.5">
                  Open for Engineering Roles
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
