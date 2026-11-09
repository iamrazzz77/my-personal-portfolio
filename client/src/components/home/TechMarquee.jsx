import React from 'react';
import { motion } from 'framer-motion';

export const TechMarquee = () => {
  const techItems = [
    { name: 'React.js', icon: '⚡' },
    { name: 'Node.js & Express', icon: '🟢' },
    { name: 'SQL Databases', icon: '🛢️' },
    { name: 'IT Infrastructure', icon: '🖥️' },
    { name: 'Logistics Technology', icon: '📦' },
    { name: 'RVM Hardware Telemetry', icon: '♻️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Framer Motion', icon: '✨' },
    { name: 'REST APIs & Endpoints', icon: '🔗' },
    { name: 'Linux & Windows Server', icon: '🐧' },
    { name: 'Hardware Diagnostics', icon: '🛠️' },
    { name: 'JavaScript ES6+', icon: '🟡' },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...techItems, ...techItems, ...techItems];

  return (
    <div className="w-full py-6 bg-slate-950/80 border-y border-slate-800/80 overflow-hidden relative select-none">
      
      {/* Side Fade Gradients */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0e17] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0e17] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Ticker */}
      <div className="flex items-center gap-6 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
          className="flex items-center gap-6 whitespace-nowrap"
        >
          {marqueeList.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono font-semibold text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-all shadow-sm"
            >
              <span className="text-sm">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};
