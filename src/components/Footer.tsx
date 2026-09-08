import React from 'react';
import { Code2, Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060912] border-t border-slate-800/60 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#060912] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Full-Stack Developer building practical, scalable, and user-focused web applications.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                {PERSONAL_INFO.email}
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                github.com/Punithsai0607
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                linkedin.com/in/punithsai
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" /> by{' '}
            <span className="text-slate-300 font-medium">{PERSONAL_INFO.name}</span>
            <span className="text-slate-600 mx-1">·</span>
            React + Vite + Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-400 transition-colors group"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
