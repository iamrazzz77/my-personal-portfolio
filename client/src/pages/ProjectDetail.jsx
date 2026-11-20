import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, Cpu, Server, Database, CheckCircle2, ShieldCheck, Activity, Layers } from 'lucide-react';
import { Github } from '../components/common/Icons';
import { portfolioData } from '../data/portfolioData';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Check if requested slug is the featured case study
  const isFeaturedCaseStudy = slug === portfolioData.featuredCaseStudy.slug;
  const project = isFeaturedCaseStudy
    ? portfolioData.featuredCaseStudy
    : portfolioData.projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-40 pb-20 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-100">Project Not Found</h1>
        <p className="text-slate-400">The requested project slug "<span className="text-sky-400">{slug}</span>" does not exist.</p>
        <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-white font-mono text-xs">
          <ArrowLeft className="w-4 h-4" /> Return to All Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — Faishal Saif Case Study</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-mono text-slate-300 hover:text-sky-400 border border-slate-800 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Previous
          </button>
        </div>

        {/* Hero Title Header */}
        <div className="space-y-4 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/20 text-sky-300 border border-sky-500/40">
              {project.category}
            </span>
            {isFeaturedCaseStudy && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                <Activity className="w-3.5 h-3.5" /> Flagship Case Study
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </div>

        {/* Featured Case Study Detailed Content */}
        {isFeaturedCaseStudy ? (
          <div className="space-y-12">
            
            {/* Image Banner */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-80 sm:h-96">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-slate-700 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" /> Hardware Device → Cloud Software Verified Architecture
                </div>
                <div className="flex items-center gap-3">
                  <a href={portfolioData.profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-300 hover:text-sky-400">
                    <Github className="w-4 h-4" /> Code Repository
                  </a>
                </div>
              </div>
            </div>

            {/* Hardware-to-Cloud Architecture Detailed Breakdown */}
            <div className="glass-card p-8 border border-slate-800 bg-slate-900/60 rounded-3xl space-y-6">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2 font-mono">
                <Layers className="w-6 h-6 text-sky-400" />
                End-to-End System Architecture
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                This project represents a complete hardware-to-cloud engineering lifecycle. Physical Reverse Vending Machines (RVMs) require immediate sensor processing, zero-loss transaction logging, and operational analytics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {project.architectureOverview.map((item) => (
                  <div key={item.step} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="text-xs font-mono font-bold text-sky-400">{item.step}</div>
                    <div className="text-sm text-slate-200 leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((m) => (
                <div key={m.label} className="glass-card p-6 border border-slate-800 bg-slate-900/60 rounded-2xl text-center space-y-2">
                  <div className="text-3xl font-extrabold text-sky-400 font-mono">{m.value}</div>
                  <div className="text-sm font-bold text-slate-200">{m.label}</div>
                  <div className="text-xs text-slate-400 font-mono">{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 border border-rose-500/30 bg-rose-950/10 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold text-rose-300 font-mono">The Challenge</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="glass-card p-6 border border-emerald-500/30 bg-emerald-950/10 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold text-emerald-300 font-mono">The Engineering Solution</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Technical Highlights */}
            <div className="glass-card p-8 border border-slate-800 bg-slate-900/60 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-slate-100 font-mono">Key Highlights & Deliverables</h3>
              <div className="space-y-3 text-xs">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Standard Project Detail Layout */
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden border border-slate-800 max-h-96">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="glass-card p-8 border border-slate-800 bg-slate-900/60 rounded-2xl space-y-6">
              <h2 className="text-2xl font-bold text-slate-100 font-mono">Project Highlights & Role</h2>
              <p className="text-sm text-slate-300">{project.summary}</p>

              {project.details?.highlights && (
                <div className="space-y-3 text-xs">
                  {project.details.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-mono text-xs flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> View Code Repository
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};
