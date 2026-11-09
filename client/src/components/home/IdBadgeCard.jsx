import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card3D } from '../common/Card3D';
import { portfolioData } from '../../data/portfolioData';
import { RotateCw, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';

export const IdBadgeCard = () => {
  const { profile } = portfolioData;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e) => {
    // Don't flip if clicking an external link button
    if (e.target.closest('a')) return;
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div 
      animate={{ rotate: [-2.5, 2.5, -2.5] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ transformOrigin: 'top center' }}
      className="relative flex flex-col items-center justify-center py-1 w-full select-none"
    >
      
      {/* Top Lanyard Strap & Metallic Clip Holder */}
      <div className="flex flex-col items-center z-30 relative -mb-2.5 pointer-events-none">
        {/* Lanyard Strap */}
        <div className="w-3.5 h-8 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 dark:from-slate-700 dark:via-slate-800 dark:to-slate-950 rounded-t-sm shadow-md border-x border-slate-600/40" />
        
        {/* Metallic Clip Mechanism */}
        <div className="w-8 h-3.5 bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 rounded-sm shadow-md border border-slate-300 flex items-center justify-center relative">
          <div className="w-4 h-1 bg-slate-800 rounded-full" />
        </div>
        
        {/* Metal Ring Latch */}
        <div className="w-4 h-4 rounded-full border-2 border-slate-400 bg-slate-200/80 shadow-inner -mt-0.5" />
      </div>

      {/* Hanging Interactive 3D Card Wrapper (Sleek Compact Height) */}
      <Card3D maxTilt={isFlipped ? -12 : 12} scaleOnHover={1.02} className="w-full max-w-[250px] sm:max-w-[265px] preserve-3d">
        <div 
          onClick={handleCardClick}
          className="relative w-full cursor-pointer perspective-1000"
          title="Click to flip card"
        >
          {/* Card Container with Framer Motion 3D Flip */}
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative w-full rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-2xl transition-all duration-300"
          >

            {/* ======================================================== */}
            {/* FRONT SIDE OF ID BADGE                                  */}
            {/* ======================================================== */}
            <div 
              style={{ backfaceVisibility: 'hidden' }}
              className="w-full rounded-2xl overflow-hidden"
            >
              {/* Subtle Ambient Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-sky-500/5 pointer-events-none" />

              {/* Top Iridescent Banner (Slot Punch Hole inside) */}
              <div className="h-24 bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 dark:from-purple-700 dark:via-indigo-600 dark:to-sky-500 relative flex flex-col items-center pt-2">
                {/* Holographic Sheen Layer */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none" />
                <div className="absolute -right-8 -top-8 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />

                {/* Slot Punch Hole for Clip */}
                <div className="w-7 h-2 rounded-full bg-slate-950/50 border border-white/30 shadow-inner relative z-10" />

                {/* Flip Badge Prompt Button */}
                <button 
                  type="button"
                  className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/20 text-[9px] font-mono text-white flex items-center gap-1 transition-all z-20"
                >
                  <RotateCw className="w-2.5 h-2.5 animate-spin-slow" />
                  <span>Flip</span>
                </button>
              </div>

              {/* UNCLIPPED Avatar Photo Section */}
              <div className="-mt-12 flex justify-center relative z-20">
                <div className="relative group">
                  <div className="w-24 h-24 sm:w-25 sm:h-25 rounded-full p-1 bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 shadow-2xl border-3 border-white dark:border-[#0c1322] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={profile.profileImage || "/images/faishal-saif-profile.jpg"}
                      alt={profile.name}
                      className="w-full h-full object-cover object-center rounded-full"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://ui-avatars.com/api/?name=Faishal+Saif&background=6366f1&color=fff&size=200";
                      }}
                    />
                  </div>
                  {/* Active Online Status Badge */}
                  <div className="absolute bottom-0.5 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0c1322] shadow-md flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-white animate-ping opacity-75" />
                  </div>
                </div>
              </div>

              {/* Main Card Content */}
              <div className="pt-2 pb-4 px-4.5 flex flex-col items-center text-center relative z-10">
                
                {/* Name */}
                <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white font-sans">
                  {profile.name}
                </h2>

                {/* Role / Title */}
                <p className="text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400 tracking-wide mt-0.5">
                  IT Engineer & Full-Stack Developer
                </p>
                <p className="text-[9px] font-sans text-slate-500 dark:text-slate-400 mt-0.5">
                  First Saudi Company • Riyadh, SA
                </p>

                {/* Subtle Divider Line */}
                <div className="w-full h-px bg-slate-200 dark:bg-slate-800/80 my-2" />

                {/* Metadata 2x2 Grid */}
                <div className="w-full bg-slate-50 dark:bg-slate-900/90 rounded-xl p-2.5 border border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 gap-2 text-left shadow-xs">
                  <div>
                    <span className="block text-[8.5px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                      Specialty
                    </span>
                    <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5">
                      Full-Stack & IT
                    </span>
                  </div>

                  <div>
                    <span className="block text-[8.5px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                      Location
                    </span>
                    <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5">
                      Riyadh, SA
                    </span>
                  </div>

                  <div>
                    <span className="block text-[8.5px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                      Experience
                    </span>
                    <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5">
                      3+ Years
                    </span>
                  </div>

                  <div>
                    <span className="block text-[8.5px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                      Status
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>

                {/* Card Footer Barcode & Serial Strip */}
                <div className="w-full mt-2 pt-2 border-t border-dashed border-slate-200 dark:border-slate-800/80 flex flex-col items-center">
                  {/* Barcode Graphic */}
                  <div className="flex items-center justify-center gap-[2px] h-4 my-0.5 opacity-70 dark:opacity-80">
                    <span className="w-[2px] h-3.5 bg-slate-800 dark:bg-slate-300 rounded-full" />
                    <span className="w-[1px] h-2 bg-slate-800 dark:bg-slate-300" />
                    <span className="w-[2px] h-4 bg-slate-800 dark:bg-slate-300 rounded-full" />
                    <span className="w-[1px] h-2.5 bg-slate-800 dark:bg-slate-300" />
                    <span className="w-[2px] h-3.5 bg-slate-800 dark:bg-slate-300 rounded-full" />
                    <span className="w-[2.5px] h-4 bg-slate-800 dark:bg-slate-300 rounded-full" />
                    <span className="w-[1px] h-2 bg-slate-800 dark:bg-slate-300" />
                    <span className="w-[1.5px] h-3 bg-slate-800 dark:bg-slate-300" />
                    <span className="w-[2px] h-4 bg-slate-800 dark:bg-slate-300 rounded-full" />
                    <span className="w-[1px] h-3 bg-slate-800 dark:bg-slate-300" />
                    <span className="w-[1.5px] h-2 bg-slate-800 dark:bg-slate-300" />
                    <span className="w-[2.5px] h-3.5 bg-slate-800 dark:bg-slate-300 rounded-full" />
                    <span className="w-[1px] h-4 bg-slate-800 dark:bg-slate-300" />
                    <span className="w-[1.5px] h-2.5 bg-slate-800 dark:bg-slate-300" />
                    <span className="w-[2px] h-3.5 bg-slate-800 dark:bg-slate-300 rounded-full" />
                  </div>

                  <div className="w-full flex items-center justify-between text-[8.5px] font-mono text-slate-400 dark:text-slate-500 font-bold px-0.5">
                    <span>FSK-89240-PRO</span>
                    <span>LIGHTWIND UI</span>
                  </div>
                </div>

              </div>
            </div>


            {/* ======================================================== */}
            {/* BACK SIDE OF ID BADGE                                   */}
            {/* ======================================================== */}
            <div 
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
              className="absolute inset-0 w-full h-full rounded-2xl bg-slate-900 dark:bg-[#070d19] text-white border border-slate-800 p-4 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Magnetic Strip Header */}
              <div>
                <div className="-mx-4 -mt-4 h-9 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4">
                  {/* Slot Punch */}
                  <div className="w-7 h-1.5 rounded-full bg-slate-800 border border-slate-700 mx-auto" />
                  <button 
                    type="button"
                    className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[8.5px] font-mono text-white flex items-center gap-1 transition-all"
                  >
                    <RotateCw className="w-2.5 h-2.5" />
                    <span>Front</span>
                  </button>
                </div>

                {/* EMV Gold Chip & Hologram */}
                <div className="flex items-center justify-between mt-2.5">
                  {/* EMV Microchip */}
                  <div className="w-8 h-6 rounded-md bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 border border-amber-600/80 p-0.5 flex flex-col justify-between shadow-md">
                    <div className="w-full h-px bg-amber-700/60" />
                    <div className="w-full h-px bg-amber-700/60" />
                    <div className="w-full h-px bg-amber-700/60" />
                  </div>

                  {/* Security Hologram Shield */}
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[8.5px] font-mono font-bold">
                    <ShieldCheck className="w-3 h-3 text-sky-400" />
                    <span>VERIFIED ID</span>
                  </div>
                </div>

                {/* Credentials Data List */}
                <div className="mt-2.5 space-y-1.5 text-left font-mono">
                  <div className="p-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-[8.5px] text-slate-400 uppercase font-bold">ID Number</span>
                    <span className="text-[10px] font-bold text-sky-300">FSK-2026-SA</span>
                  </div>

                  <div className="p-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-[8.5px] text-slate-400 uppercase font-bold">Role</span>
                    <span className="text-[10px] font-bold text-emerald-400">IT & Systems Eng.</span>
                  </div>

                  <div className="p-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-[8.5px] text-slate-400 uppercase font-bold">Clearance</span>
                    <span className="text-[10px] font-bold text-purple-300">Level 5 (Full-Stack)</span>
                  </div>

                  <div className="p-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-[8.5px] text-slate-400 uppercase font-bold">Issuer</span>
                    <span className="text-[10px] font-bold text-slate-200">First Saudi Co.</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons on Back */}
              <div className="space-y-1 pt-1">
                <div className="flex gap-1.5">
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-semibold flex items-center justify-center gap-1 transition-all shadow-sm"
                  >
                    <Linkedin className="w-2.5 h-2.5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2 h-2 opacity-80" />
                  </a>

                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-[10px] font-semibold flex items-center justify-center gap-1 transition-all shadow-sm"
                  >
                    <Github className="w-2.5 h-2.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-2 h-2 opacity-80" />
                  </a>
                </div>

                {/* Back Footer Watermark */}
                <div className="text-[8.5px] font-mono text-slate-500 text-center flex items-center justify-center gap-1 pt-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                  <span>Authorized Engineering Badge</span>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </Card3D>

      {/* Subtle Interactive Instruction */}
      <p className="text-[9.5px] font-mono text-slate-400 dark:text-slate-500 mt-1.5 flex items-center gap-1 opacity-80">
        <RotateCw className="w-2.5 h-2.5 text-sky-500 animate-spin-slow" />
        Click card to flip 360° | Move mouse to tilt 3D
      </p>

    </motion.div>
  );
};
