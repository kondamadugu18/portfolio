import React from 'react';
import { Award, CheckCircle, Trophy, ExternalLink, ShieldCheck, Star } from 'lucide-react';
import { certificationsList, achievementsList } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Verified Credentials
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Industry & academic certifications validating algorithmic rigor, programming, and data analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificationsList.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {cert.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                  {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-500 hover:underline"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements & Leadership */}
        <div className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Key Achievements & Extra-Curriculars
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Demonstrated discipline, competitive problem solving, and community leadership
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievementsList.map((ach, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-amber-500 mb-2">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider">{ach.platform}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
