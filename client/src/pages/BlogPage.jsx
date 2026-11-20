import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BlogPage = () => {
  const { blogPosts } = portfolioData;

  return (
    <>
      <Helmet>
        <title>Engineering Blog — Faishal Saif</title>
        <meta name="description" content="Technical articles on IT infrastructure, server administration, MongoDB, and full-stack web engineering." />
      </Helmet>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Systems & Software Articles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineering Articles & Notes
          </h2>
          <p className="text-base text-slate-400">
            Insights on bridging IT server operations with modern web application engineering.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="glass-card p-8 border border-slate-800 bg-slate-900/60 rounded-3xl space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-sky-400">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px]">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
};
