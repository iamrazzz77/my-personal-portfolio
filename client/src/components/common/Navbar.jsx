import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Terminal, Download, FileText, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAiAssistant } from '../../context/AiAssistantContext';
import { portfolioData } from '../../data/portfolioData';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { openAiAssistant } = useAiAssistant();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      setScrollProgress(scrolledPercent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Case Study', href: '/projects/reverse-vending-machine' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (e, href) => {
    if (href.includes('#')) {
      const parts = href.split('#');
      const hash = parts[1];

      if (location.pathname === '/' || location.pathname === '') {
        e.preventDefault();
        window.history.pushState({}, '', href);
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 3D Top Neon Scroll Progress Indicator Bar */}
      <div className="w-full h-1 bg-slate-900/60 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-500 shadow-[0_0_12px_#38bdf8] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className={`transition-all duration-300 ${scrolled ? 'pt-2 pb-2' : 'pt-3 pb-3'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'max-w-6xl' : ''
          }`}>
          <div className={`flex items-center justify-between gap-2 sm:gap-4 lg:gap-10 transition-all duration-300 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl ${scrolled ? 'glass-card border border-slate-800/90 bg-[#0a0f1d]/90 shadow-2xl backdrop-blur-xl' : 'bg-transparent'
            }`}>

            {/* Profile Area (Left) */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0 sm:shrink-0 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-0.5 bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden shrink-0">
                <img
                  src={portfolioData.profile.profileImage || "/images/faishal-saif-profile.jpg"}
                  alt={portfolioData.profile.name}
                  className="w-full h-full object-cover object-top rounded-[10px]"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-slate-100 text-xs sm:text-sm group-hover:text-sky-400 transition-colors leading-tight truncate">
                  {portfolioData.profile.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-sky-400 font-mono font-medium flex items-center gap-1 leading-tight mt-0.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span className="truncate">IT Engineer | Full-Stack</span>
                </span>
              </div>
            </Link>

            {/* Navigation Links Container (Center) */}
            <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl glass-card border border-slate-800/80 bg-slate-950/60 shadow-inner">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href.startsWith('/#') && location.hash === link.href.substring(1));
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${isActive
                        ? 'bg-slate-800/90 text-sky-400 font-semibold border border-sky-500/20'
                        : 'text-slate-300 hover:text-sky-400 hover:bg-slate-800/40'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Utilities */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">

              {/* Primary Resume CTA Button */}
              <Link
                to="/resume"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sky-400 hover:border-sky-400 hover:text-sky-300 text-xs font-mono font-medium transition-all shadow-sm"
                title="Open Resume Preview & Dynamic PDF Generator"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Resume</span>
              </Link>

              {/* Premium AI Assistant Button ("Ask AI ✦") */}
              <button
                onClick={openAiAssistant}
                className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-mono text-[11px] sm:text-xs font-bold shadow-md shadow-sky-500/20 hover:scale-105 transition-all whitespace-nowrap"
                title="Ask AI Portfolio Assistant"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Ask AI ✦</span>
              </button>

              {/* Theme Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl glass-card text-slate-200 hover:text-sky-400 border border-slate-700/80 shadow-sm transition-all flex items-center justify-center shrink-0"
                aria-label="Toggle dark/light mode"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
              </motion.button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 rounded-xl glass-card text-slate-200 hover:text-sky-400 border border-slate-700/80 shadow-sm transition-all flex items-center justify-center shrink-0"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav border-b border-slate-800 mt-3 px-4 pt-2 pb-6 space-y-2 overflow-hidden bg-[#0a0f1d]/95"
          >
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800/80 text-xs font-mono text-sky-400">
              <Terminal className="w-4 h-4" />
              <span>Navigation Menu</span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-sky-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl glass-card border border-slate-700/80 text-slate-200 font-mono text-xs font-medium transition-all"
              >
                <span className="flex items-center gap-2">
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
                  <span>{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  {isDark ? 'Dark' : 'Light'}
                </span>
              </button>
              <Link
                to="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-sky-500/30 text-sky-400 font-mono text-xs font-medium"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Open Resume Generator</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
