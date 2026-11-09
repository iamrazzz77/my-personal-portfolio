import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, MapPin, GraduationCap, Mail, ArrowRight, Download, Server, Cpu, ShieldCheck, Activity } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';
import { ResumeModal } from '../common/ResumeModal';
import { downloadResume } from '../../utils/downloadResume';
import { Hero3DBackground } from '../common/Hero3DBackground';
import { Card3D } from '../common/Card3D';
import { IdBadgeCard } from './IdBadgeCard';

export const Hero = () => {
  const { profile } = portfolioData;
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    downloadResume();
    setResumeModalOpen(true);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#F8FAFC] dark:bg-transparent transition-colors duration-200">
      {/* Interactive 3D Background Canvas */}
      <Hero3DBackground />

      {/* Refined Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[120px] pointer-events-none opacity-20 dark:opacity-100"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none opacity-20 dark:opacity-100"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Availability Badge */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for work</span>
              </a>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                {profile.location}
              </span>
            </div>

            {/* Main Name & Headline matching Lightswind portfolio01 */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 dark:from-purple-400 dark:via-indigo-300 dark:to-sky-400">
                  {profile.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-bold font-mono text-slate-700 dark:text-slate-300 pt-1">
                {profile.title}
              </p>
            </div>

            {/* Description matching Lightswind portfolio01 */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-sans">
              I build exceptional and accessible digital experiences. Specialized in crafting premium web applications, IT infrastructure, and logistics technology platforms with elegant design systems.
            </p>

            {/* CTA Buttons matching Lightswind portfolio01 */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 group"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <Link
                to="/resume"
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 font-semibold text-sm transition-all flex items-center gap-2 shadow-xs hover:scale-105"
                title="View & Download Dynamic Resume"
              >
                <Download className="w-4 h-4 text-sky-500 group-hover:animate-bounce" />
                <span>Resume</span>
              </Link>

              <a
                href="#contact"
                className="px-5 py-3 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Icons Strip matching Lightswind portfolio01 */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full text-slate-500 hover:text-sky-500 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                className="p-2.5 rounded-full text-slate-500 hover:text-indigo-500 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column Interactive Hanging ID Badge Card (Slightly higher vertical position & compact scale) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center -mt-4 lg:-mt-8 relative z-20"
          >
            <IdBadgeCard />
          </motion.div>

        </div>
      </div>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </section>
  );
};
