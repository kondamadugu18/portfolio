import React from 'react';
import { 
  User, 
  Code, 
  Terminal, 
  Database, 
  Brain, 
  Layers, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  Mail, 
  Phone 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Clean Code & Data-Driven Solutions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Passionate Information Technology student with practical software engineering experience.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Profile Card & Quick Bio */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-500 shadow-md shrink-0 bg-slate-800">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    B.Tech – Information Technology
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    St. Martin's Engineering College, Hyderabad
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-5">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/50">
                  <span className="text-slate-500 dark:text-slate-400">Graduation Year:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{personalInfo.batch}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/50">
                  <span className="text-slate-500 dark:text-slate-400">B.Tech CGPA:</span>
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400 font-mono">{personalInfo.cgpa} / 10.0</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/50">
                  <span className="text-slate-500 dark:text-slate-400">Location:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">Primary Focus:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200 text-right">Software Dev & Data Analytics</span>
                </div>
              </div>

              {/* Social icons row */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Connect:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors"
                    aria-label="Phone"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-4 rounded-2xl text-center border border-slate-200/80 dark:border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Who I Am & What I Build
              </h3>
              
              <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.aboutDetailed.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Core Skill Areas Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
                  Core Competencies & Interests
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Software Development & OOP",
                    "Python Backend & Automation",
                    "Data Analytics & KPI Dashboards",
                    "Relational Database Design (SQL, MySQL)",
                    "Modern Web Development (React, HTML/CSS)",
                    "Applied AI & Machine Learning Systems"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Review Full Resume</span>
                </button>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span>See Experience & Training</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
