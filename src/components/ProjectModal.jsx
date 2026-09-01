import React from 'react';
import { 
  X, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Target, 
  Award,
  Clock
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl my-8 glass-card rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden bg-slate-900 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/30 backdrop-blur-sm text-white mb-2">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          {project.accuracy && (
            <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-lg bg-emerald-500/90 text-white text-xs font-bold shadow">
              <Award className="w-4 h-4" />
              <span>{project.accuracy}</span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Medical Disclaimer Banner if applicable */}
          {project.medicalNotice && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {project.medicalNotice}
              </p>
            </div>
          )}

          {/* Project Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Project Overview & Architecture</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.longDesc}
            </p>
          </div>

          {/* Key Features / Highlights */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Features & Technical Implementations</span>
            </h3>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Technologies & Libraries</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-cyan-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400 transition-all shadow"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 bg-slate-800/60 border border-slate-700/60 cursor-not-allowed">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>GitHub Coming Soon</span>
              </span>
            )}

            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="ml-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
