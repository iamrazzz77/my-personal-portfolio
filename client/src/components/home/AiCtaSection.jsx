import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { useAiAssistant } from '../../context/AiAssistantContext';

export const AiCtaSection = () => {
  const { openAiAssistant } = useAiAssistant();

  return (
    <section className="py-16 relative overflow-hidden bg-[#080d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-8 sm:p-12 border border-slate-800 bg-[#0d1628]/90 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>INTERACTIVE PORTFOLIO ASSISTANT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Curious about my work?
            </h2>

            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Ask my portfolio assistant about my experience, projects, technical skills or logistics technology work in Riyadh.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openAiAssistant}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-mono font-bold text-xs shadow-xl shadow-sky-500/25 flex items-center gap-2.5 transition-all flex-shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Ask AI ✦</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

        </div>
      </div>
    </section>
  );
};
