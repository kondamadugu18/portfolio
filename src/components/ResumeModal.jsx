import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink,
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  Mail, 
  Phone, 
  MapPin,
  FileCheck2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, educationList, experienceList, skillCategories, certificationsList, achievementsList } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl my-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Control Bar */}
        <div className="p-4 sm:px-8 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-500" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-cyan-500" />
              <span>Professional Resume</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-white transition-colors"
              title="Open raw PDF file"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Kondamadugu_Narsimulu_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors hidden sm:inline-flex"
              title="Print formatted resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-rose-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200 print:p-0 print:text-black">
          
          {/* Header with Photo */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                {personalInfo.degree}
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.email}</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.phoneDisplay}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.location}</span>
                <span className="flex items-center gap-1"><GithubIcon className="w-3.5 h-3.5 text-cyan-500" /> github.com/kondamadugu18</span>
              </div>
            </div>

            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow shrink-0">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{edu.institution}</p>
                  </div>
                  <div className="text-xs sm:text-right">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{edu.period}</span>
                    <span className="block font-bold text-cyan-600 dark:text-cyan-400">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Internships */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Internships & Professional Training</span>
            </h3>
            <div className="space-y-4">
              {experienceList.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{exp.role} – <span className="text-cyan-600 dark:text-cyan-400">{exp.company}</span></h4>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div><strong className="text-slate-900 dark:text-white">Languages:</strong> Python, Java, JavaScript, SQL</div>
              <div><strong className="text-slate-900 dark:text-white">Web & Frameworks:</strong> Streamlit, React, Flask, Django, Tailwind CSS</div>
              <div><strong className="text-slate-900 dark:text-white">Databases:</strong> MySQL, SQLite, MongoDB, SQLAlchemy</div>
              <div><strong className="text-slate-900 dark:text-white">Data & Analytics:</strong> Power BI, Plotly, Excel, Pandas, NumPy, Scikit-learn</div>
              <div><strong className="text-slate-900 dark:text-white">Tools:</strong> Git, GitHub, VS Code, Jupyter, PyMuPDF, Gemini/OpenAI APIs</div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
              {certificationsList.map((c, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-cyan-500">•</span>
                  <span><strong>{c.title}</strong> – {c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:px-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/60 shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Kondamadugu Narsimulu • B.Tech Information Technology
          </span>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Raw PDF</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Kondamadugu_Narsimulu_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
