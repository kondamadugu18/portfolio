import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Strong academic foundation in Information Technology and foundational sciences.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-700" />

          <div className="space-y-8">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Timeline Dot Indicator */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border-2 border-cyan-500 text-cyan-500 dark:text-cyan-400 shadow-lg shadow-cyan-500/10 shrink-0 z-10 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <GraduationCap className="w-7 h-7" />
                </div>

                {/* Card */}
                <div className="w-full glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 group-hover:border-cyan-500/40 transition-all shadow-md">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="sm:hidden p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                          <GraduationCap className="w-4 h-4" />
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <Award className="w-3.5 h-3.5" />
                        <span>{edu.score}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                    {edu.description}
                  </p>

                  {edu.current && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Core Coursework:</span>
                      {["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering", "OOP"].map((course, cIdx) => (
                        <span key={cIdx} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
