import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = portfolioData.blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-20 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-100">Article Not Found</h1>
        <p className="text-slate-400">The requested article slug "<span className="text-sky-400">{slug}</span>" does not exist.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-white font-mono text-xs">
          <ArrowLeft className="w-4 h-4" /> Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} — Faishal Saif</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-mono text-slate-300 hover:text-sky-400 border border-slate-800 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-12 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
              <User className="w-3.5 h-3.5" /> {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
            {post.tags.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-md bg-slate-800 text-sky-300 border border-slate-700">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Article Body */}
        <div className="glass-card p-8 sm:p-10 border border-slate-800 bg-slate-900/60 rounded-3xl space-y-6 text-slate-200 text-sm leading-relaxed font-sans">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold text-slate-100 font-mono pt-4 text-sky-400">{paragraph.replace('### ', '')}</h3>;
            }
            return <p key={index} className="text-slate-300 leading-relaxed">{paragraph}</p>;
          })}
        </div>

      </article>
    </>
  );
};
