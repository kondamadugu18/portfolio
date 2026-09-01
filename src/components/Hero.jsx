import React from 'react';
import { 
  Mail, 
  Phone, 
  ArrowRight, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Database, 
  LineChart, 
  GraduationCap,
  MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Two-Column Hero Grid: Left Content, Right Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-time Software & Data Engineering Roles</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle / Roles */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-4 tracking-tight">
              Software Developer <span className="text-cyan-500">|</span> Python Developer <span className="text-cyan-500">|</span> Data Analyst
            </p>

            {/* Education & Location Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 font-semibold text-slate-800 dark:text-slate-200">
                <GraduationCap className="w-4 h-4 text-cyan-500" />
                {personalInfo.degree}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 font-medium">
                <MapPin className="w-4 h-4 text-rose-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Professional Narrative Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              An <strong>Information Technology</strong> graduate passionate about engineering high-impact software, writing clean <span className="text-cyan-600 dark:text-cyan-400 font-medium">Python</span> backend architectures, executing deep <span className="text-indigo-600 dark:text-indigo-400 font-medium">SQL & Data Analytics</span>, and crafting responsive web applications.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Kondamadugu_Narsimulu_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Dock & View GitHub Profile Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-xl justify-center lg:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-900 text-white dark:bg-slate-800 dark:text-cyan-400 border border-slate-700 hover:border-cyan-400 hover:shadow-md transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-cyan-500 hover:border-cyan-500 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-cyan-500 hover:border-cyan-500 transition-all shadow-sm"
                  aria-label="Send Email"
                  title={`Email: ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-cyan-500 hover:border-cyan-500 transition-all shadow-sm"
                  aria-label="Phone Call"
                  title={`Call: ${personalInfo.phoneDisplay}`}
                >
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-amber-500 hover:border-amber-500 transition-all shadow-sm"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4 text-amber-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Profile Portrait Card with Directly Imported Image */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-violet-500/20 rounded-[2.5rem] blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer Container */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/10 to-white/5 dark:from-slate-800/90 dark:to-slate-900/90 border border-slate-200 dark:border-slate-700/80 shadow-2xl backdrop-blur-xl">
                
                {/* Photo Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/50 dark:border-slate-700/50">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-5">
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl leading-tight drop-shadow">
                        {personalInfo.name}
                      </h3>
                      <p className="text-cyan-400 text-xs sm:text-sm font-semibold mt-0.5">
                        B.Tech – Information Technology
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Top-Left: Active Status */}
                <div className="absolute -top-3.5 -left-3 sm:-left-4 bg-slate-900/95 dark:bg-[#0c1220]/95 border border-slate-700/80 px-4 py-1.5 rounded-2xl shadow-xl flex items-center gap-2 backdrop-blur-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 -ml-4.5" />
                  <span className="text-xs font-bold text-white tracking-wide">Open to Work (2026)</span>
                </div>

                {/* Floating Badge Bottom-Right: LeetCode & CGPA */}
                <div className="absolute -bottom-3.5 -right-3 sm:-right-4 bg-slate-900/95 dark:bg-[#0c1220]/95 border border-slate-700/80 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-xs border border-cyan-500/30">
                    8.12
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">B.Tech CGPA</div>
                    <div className="text-[10px] text-slate-400">100+ LeetCode Solved</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Quick Technical Pillars Bottom Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 w-full">
          <div className="glass-card p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Software Dev</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Python, Java, OOP</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Databases</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">SQL, MySQL, SQLite</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
              <LineChart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Data Analytics</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Power BI, Pandas, EDA</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Web & AI Apps</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Streamlit, React, Flask</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
