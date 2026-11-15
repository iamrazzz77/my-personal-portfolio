import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ExternalLink, ArrowRight, FolderGit2, Code2, Server, Filter } from 'lucide-react';
import { Github } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';
import { Card3D } from '../common/Card3D';

export const ProjectsGrid = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full-Stack', 'IT & Systems', 'Hardware / IoT', 'Backend'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Portfolio Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Projects & Case Studies
          </h2>
          <p className="text-base text-slate-400">
            Filter through full-stack web applications, IT monitoring systems, and API microservices built by Faishal Saif.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${selectedCategory === cat
                    ? 'bg-sky-500 text-white border-sky-400 font-semibold shadow-md shadow-sky-500/20'
                    : 'glass-card text-slate-300 border-slate-800 hover:border-slate-700 hover:text-slate-100'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-xl glass-card text-xs text-slate-100 placeholder-slate-500 border border-slate-800 focus:border-sky-500 focus:outline-none transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-card p-12 text-center text-slate-400 space-y-3">
            <Filter className="w-8 h-8 text-sky-400 mx-auto" />
            <p className="text-base font-semibold">No projects matching your search criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs text-sky-400 underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card3D maxTilt={10} scaleOnHover={1.03} className="h-full">
                  <div className="glass-card border border-slate-800 bg-slate-900/60 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col h-full group preserve-3d">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent"></div>
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-950/80 text-sky-300 border border-slate-800 translate-z-20">
                        {project.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4 preserve-3d">
                      <div className="space-y-2 translate-z-20">
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {project.summary}
                        </p>
                      </div>

                      <div className="space-y-4 pt-2 translate-z-10">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs translate-z-20">
                          <Link
                            to={`/projects/${project.slug}`}
                            className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1 group/link"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </Link>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
                            title="GitHub Code Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
