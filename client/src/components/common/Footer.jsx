import React from 'react';
import { Mail, MapPin, ArrowUp, PhoneCall } from 'lucide-react';
import { Github, Linkedin, Whatsapp } from './Icons';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { profile } = portfolioData;

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a10] pt-12 pb-8 text-slate-400 text-sm font-sans transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive 2-Column Grid: Left Brand Info, Right Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-8 border-b border-slate-800/80 items-start justify-between text-center md:text-left">
          
          {/* LEFT: Brand & Executive Info */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md">
                FS
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-100">{profile.name}</h3>
                <p className="text-xs text-sky-400 font-mono font-semibold">
                  Software Engineer | IT Engineer | Logistics Technology
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Building and managing technology solutions across software, IT and logistics operations.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
              <span>Riyadh, Saudi Arabia</span>
            </div>
          </div>

          {/* RIGHT: Connect & Social Icons */}
          <div className="space-y-3 flex flex-col items-center md:items-end">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Connect
            </h4>
            <p className="text-xs text-slate-400 max-w-sm md:text-right">
              Get in touch for technical inquiries, engineering projects, or logistics technology operations.
            </p>
            
            {/* Small Consistent Circular Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Phone */}
              <a
                href={`tel:${profile.socials.phoneRaw}`}
                className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 flex items-center justify-center transition-all hover:scale-105"
                title={`Phone: ${profile.socials.phoneCall}`}
                aria-label={`Phone Call ${profile.socials.phoneCall}`}
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={profile.socials.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 flex items-center justify-center transition-all hover:scale-105"
                title={`WhatsApp: ${profile.socials.whatsapp}`}
                aria-label={`WhatsApp ${profile.socials.whatsapp}`}
              >
                <Whatsapp className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 flex items-center justify-center transition-all hover:scale-105"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 flex items-center justify-center transition-all hover:scale-105"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${profile.socials.email}`}
                className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 flex items-center justify-center transition-all hover:scale-105"
                title={`Email: ${profile.socials.email}`}
                aria-label={`Email ${profile.socials.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 hover:border-sky-500/40 transition-all flex items-center gap-1.5 text-xs"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
