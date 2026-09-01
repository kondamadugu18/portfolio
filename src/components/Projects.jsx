import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Info, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsList } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI/ML & Python', 'Data & Analytics', 'Web Development', 'Software Development'];

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Systems
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real-world applications spanning AI-based tools, data pipelines, BI dashboards, and web services.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Card Banner Header */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/30 backdrop-blur-md text-white">
                      {project.category}
                    </span>
                    {project.accuracy && (
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold bg-emerald-500/90 text-white shadow">
                        {project.accuracy}
                      </span>
                    )}
                  </div>

                  <div className="z-10 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Deep Dive Details</span>
                    </button>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Key Features summary */}
                  <div className="mt-4 space-y-1.5">
                    {project.highlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="p-6 pt-0 flex flex-wrap items-center gap-2.5">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 transition-all shadow-sm"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-cyan-500" />
                    <span>GitHub Repository</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 cursor-not-allowed">
                    <Clock className="w-3.5 h-3.5 text-amber-500/70" />
                    <span>GitHub Coming Soon</span>
                  </span>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live</span>
                  </a>
                )}

                <button
                  onClick={() => onSelectProject(project)}
                  className="px-2.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 transition-all"
                  aria-label="View Project Details"
                  title="View Details"
                >
                  <Info className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
