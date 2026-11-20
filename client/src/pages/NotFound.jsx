import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found</title>
      </Helmet>

      <div className="min-h-screen pt-40 pb-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full glass-card p-8 border border-slate-800 bg-[#0d1424] rounded-3xl text-center space-y-6 shadow-2xl">
          
          <div className="w-16 h-16 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center mx-auto">
            <Terminal className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold text-slate-100 font-mono tracking-wider">404</h1>
            <h2 className="text-lg font-bold text-sky-400 font-mono">Segment Fault / Route Not Found</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              The path you attempted to reach does not exist or has been relocated within the system hierarchy.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <Link
              to="/"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs font-mono shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Return to Portfolio Home</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
