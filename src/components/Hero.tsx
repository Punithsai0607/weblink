import React, { useState } from 'react';
import {
  ArrowRight,
  Github,
  Mail,
  CheckCircle2,
  Terminal as TerminalIcon,
  Play,
  Sparkles,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'tests' | 'ai'>('architecture');

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Target Role & Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Full-Stack Portfolio • Prepared for <strong className="text-white">Hubwise AI</strong></span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 tracking-tight">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.subtext}
            </p>

            {/* Key Value Pill Highlights */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                React 19 & Vite
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Python & FastAPI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                OpenAI & LangChain RAG
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% Test Coverage
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-slate-400" />
                GitHub Profile
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                Contact Me
              </a>
            </div>

            {/* Quick Stat Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Element: Modern Interactive Developer Terminal Component */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl glass-panel p-1 border border-slate-800/80 shadow-2xl shadow-indigo-950/40 glow-subtle overflow-hidden">
              
              {/* Terminal Window Bar */}
              <div className="bg-[#0B0F19] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
                    punith-dev-environment
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-md border border-slate-800">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                      activeTab === 'architecture' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Arch
                  </button>
                  <button
                    onClick={() => setActiveTab('tests')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                      activeTab === 'tests' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Tests
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                      activeTab === 'ai' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    AI Spec
                  </button>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm bg-[#070A12] min-h-[320px] flex flex-col justify-between space-y-4">
                
                {activeTab === 'architecture' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="text-slate-500 flex items-center justify-between text-xs border-b border-slate-800/60 pb-2">
                      <span>PROJECT ARCHITECTURE SNAPSHOT</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <Play className="w-3 h-3 fill-current" /> RUNNING
                      </span>
                    </div>

                    <div className="space-y-2 text-slate-300">
                      <div className="flex items-center justify-between bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800">
                        <span className="text-indigo-400 font-semibold">Frontend Layer</span>
                        <span className="text-slate-400 text-xs">React 19 + Vite + Recharts</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800">
                        <span className="text-purple-400 font-semibold">API Layer</span>
                        <span className="text-slate-400 text-xs">FastAPI (Python 3.11) + Pydantic</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800">
                        <span className="text-cyan-400 font-semibold">AI Advisory</span>
                        <span className="text-slate-400 text-xs">OpenAI GPT-4o-mini API</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800">
                        <span className="text-emerald-400 font-semibold">Database & ORM</span>
                        <span className="text-slate-400 text-xs">SQLAlchemy + PostgreSQL / SQLite</span>
                      </div>
                    </div>

                    <div className="text-slate-400 text-xs pt-2 flex items-center justify-between">
                      <span>Status: Production Blueprint</span>
                      <span className="text-indigo-400 font-semibold">Render / Vercel Ready</span>
                    </div>
                  </div>
                )}

                {activeTab === 'tests' && (
                  <div className="space-y-2.5 animate-in fade-in duration-200 text-xs">
                    <div className="text-slate-400 border-b border-slate-800/60 pb-2 flex items-center justify-between">
                      <span>$ pytest backend/tests -v --cov</span>
                      <span className="text-emerald-400 font-semibold">PASSED</span>
                    </div>
                    <div className="text-emerald-400 space-y-1">
                      <div>test_auth.py::test_jwt_auth_login <span className="text-slate-400">PASSED</span></div>
                      <div>test_transactions.py::test_create_transaction <span className="text-slate-400">PASSED</span></div>
                      <div>test_health_score.py::test_deterministic_score <span className="text-slate-400">PASSED</span></div>
                      <div>test_chatbot.py::test_context_injection <span className="text-slate-400">PASSED</span></div>
                      <div>test_user_isolation.py::test_strict_user_scope <span className="text-slate-400">PASSED</span></div>
                    </div>
                    <div className="bg-emerald-950/40 border border-emerald-500/30 p-2.5 rounded-lg text-emerald-300 font-semibold flex items-center justify-between">
                      <span>TOTAL: 34 passed in 1.42s</span>
                      <span className="text-xs bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-400/40">100% COVERAGE</span>
                    </div>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div className="space-y-3 animate-in fade-in duration-200 text-xs">
                    <div className="text-slate-400 border-b border-slate-800/60 pb-2">
                      // AI Advisory Prompt & Context Engineering
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 font-mono text-[11px] leading-relaxed">
                      <span className="text-purple-400">const</span> prompt = <span className="text-emerald-300">{`"Analyze: Savings Rate: 34%, Expense Ratio: 61%. Give 3 actionable tips."`}</span>;
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-900/80 p-2 rounded border border-slate-800 text-slate-300 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Data Sanitized</span>
                      </div>
                      <div className="bg-slate-900/80 p-2 rounded border border-slate-800 text-slate-300 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-indigo-400" />
                        <span>GPT-4o Streaming</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Command Input bar */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">$</span>
                    <span className="animate-pulse text-indigo-300">git status</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">branch: main (clean)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
