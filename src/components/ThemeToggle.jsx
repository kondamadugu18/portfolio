import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-750 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
