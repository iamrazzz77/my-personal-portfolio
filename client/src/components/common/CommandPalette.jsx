import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, Sun, Moon, Mail, FileText, Code2, Server, Terminal, X, Download, Activity } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { useCommandPalette } from '../../context/CommandPaletteContext';
import { useTheme } from '../../context/ThemeContext';
import { portfolioData } from '../../data/portfolioData';
import { downloadResume } from '../../utils/downloadResume';

export const CommandPalette = () => {
  const { isOpen, closePalette } = useCommandPalette();
  const { isDark, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const commands = [
    { id: 'action-resume', title: 'Download Faishal Saif Resume (PDF)', category: 'Actions / Resume', icon: Download, action: () => downloadResume() },
    { id: 'nav-current-work', title: 'Currently Working On (Live Activity)', category: 'Live Status', icon: Activity, action: () => { navigate('/'); setTimeout(() => { const el = document.getElementById('currently-working'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); } },
    { id: 'nav-home', title: 'Go to Home', category: 'Navigation', icon: Terminal, action: () => navigate('/') },
    { id: 'nav-about', title: 'About Faishal Saif', category: 'Navigation', icon: FileText, action: () => { navigate('/'); setTimeout(() => { const el = document.getElementById('about'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); } },
    { id: 'nav-case-study', title: 'View Reverse Vending Machine Case Study', category: 'Case Study', icon: Server, action: () => navigate('/projects/reverse-vending-machine') },
    { id: 'nav-projects', title: 'Explore All Projects', category: 'Navigation', icon: Code2, action: () => navigate('/projects') },
    { id: 'nav-exp', title: 'Experience & IT Career', category: 'Navigation', icon: FileText, action: () => { navigate('/'); setTimeout(() => { const el = document.getElementById('experience'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); } },
    { id: 'nav-contact', title: 'Get in Touch / Contact Form', category: 'Navigation', icon: Mail, action: () => { navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); } },
    { id: 'action-theme', title: `Switch to ${isDark ? 'Light' : 'Dark'} Mode`, category: 'Actions', icon: isDark ? Sun : Moon, action: () => toggleTheme() },
    { id: 'ext-github', title: 'Open GitHub Profile', category: 'External', icon: Github, action: () => window.open(portfolioData.profile.socials.github, '_blank') },
    { id: 'ext-linkedin', title: 'Open LinkedIn Profile', category: 'External', icon: Linkedin, action: () => window.open(portfolioData.profile.socials.linkedin, '_blank') },
    { id: 'ext-email', title: 'Send Email', category: 'External', icon: Mail, action: () => window.location.href = `mailto:${portfolioData.profile.socials.email}` },
  ];

  // Add project search results dynamically
  portfolioData.projects.forEach(p => {
    commands.push({
      id: `proj-${p.id}`,
      title: `Project: ${p.title}`,
      category: 'Projects',
      icon: Code2,
      action: () => navigate(`/projects/${p.slug}`)
    });
  });

  const filteredCommands = query === '' 
    ? commands 
    : commands.filter(c => c.title.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (command) => {
    command.action();
    closePalette();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePalette}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-xl glass-card overflow-hidden border border-slate-700/80 shadow-2xl z-10"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
            <Search className="w-5 h-5 text-sky-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search projects..."
              className="w-full bg-transparent border-none outline-none text-slate-100 placeholder-slate-500 text-sm"
            />
            <button onClick={closePalette} className="p-1 text-slate-400 hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-sm text-slate-400">
                No commands matching "<span className="text-sky-400">{query}</span>"
              </div>
            ) : (
              filteredCommands.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-sky-500/10 hover:border hover:border-sky-500/20 text-slate-200 transition-all group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-800/80 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-200 group-hover:text-sky-400 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700">ESC</kbd> to close
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700">Ctrl+K</kbd> palette toggle
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
