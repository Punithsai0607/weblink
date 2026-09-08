import React, { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl bg-[#0D1322] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 bg-[#090D16] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300">
          
          {/* Tagline & Stats */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-slate-200 leading-relaxed">
              {project.tagline}
            </p>

            {project.stats && project.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400 font-mono">{stat.label}</div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">{stat.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
              {project.fullOverview}
            </p>
          </div>

          {/* Architecture */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Architecture & Tech Stack
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80 font-mono text-xs sm:text-sm">
              {project.architecture}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Verified Features
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges & Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Implementation & Challenges
            </h4>
            <div className="space-y-2">
              {project.challengesAndImplementation.map((challenge, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-xl border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#090D16] flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-10">
          <div className="text-xs text-slate-400 font-mono">
            Full-Stack Project Inspection
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View Repository
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md shadow-indigo-600/30"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
