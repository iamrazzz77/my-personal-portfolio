import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Database, Server, Code2, Workflow, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';

export const TechStack = () => {
  const { techStackCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Code2: Code2,
    Server: Server,
    Workflow: Workflow,
    Database: Database,
    Terminal: Terminal
  };

  const categoriesList = ['All', ...techStackCategories.map(c => c.name)];

  const displayedCategories = activeCategory === 'All'
    ? techStackCategories
    : techStackCategories.filter(c => c.name === activeCategory);

  return (
    <section id="tech-stack" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Verified Engineering Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Stack & Capabilities
          </h2>
          <p className="text-base text-slate-400">
            Cleanly grouped competencies across software engineering, server administration, logistics technology, and database management.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border transform hover:-translate-y-0.5 ${activeCategory === cat
                  ? 'bg-sky-500 text-white border-sky-400 font-semibold shadow-lg shadow-sky-500/20'
                  : 'glass-card text-slate-300 border-slate-800 hover:border-slate-700 hover:text-slate-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {displayedCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Server;

            return (
              <Card3D key={category.name} maxTilt={6} scaleOnHover={1.01} className="w-full">
                <div className="glass-card p-6 sm:p-8 border border-slate-800/80 bg-slate-900/40 rounded-3xl preserve-3d">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-5 mb-6 border-b border-slate-800/80 translate-z-20">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 font-mono">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {category.skills.length} verified technologies & competencies
                      </p>
                    </div>
                  </div>

                  {/* Clean Technology Tags Grid with 3D Depth */}
                  <div className="flex flex-wrap gap-2.5 translate-z-10">
                    {category.skills.map((skill) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      return (
                        <div
                          key={skillName}
                          className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 hover:border-sky-500/50 hover:text-sky-300 hover:scale-105 transition-all flex items-center gap-2 shadow-sm transform hover:-translate-y-1"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{skillName}</span>
                        </div>
                      );
                    })}
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
