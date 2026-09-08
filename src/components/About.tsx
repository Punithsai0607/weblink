import React from 'react';
import { Code, Cpu, ShieldCheck, Zap, UserCheck, Terminal, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Architecture',
      description: 'Building end-to-end web applications with React on the frontend and Python (FastAPI) or Node.js on the backend.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: Cpu,
      title: 'AI & Systems Integration',
      description: 'Integrating LLMs (OpenAI GPT-4o-mini), LangChain RAG pipelines, and vector databases (FAISS) into practical software workflows.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      icon: ShieldCheck,
      title: 'Quality & Test-Driven Code',
      description: 'Emphasizing resilience with Pytest unit testing (100% endpoint test coverage achieved in fintech projects) and JWT security.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Constantly exploring modern web frameworks, cloud deployments (Render/Vercel), and high-efficiency developer tools.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#090D16]/50 border-t border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-wide uppercase">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Practical, Scalable Web Applications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer focused on clean code, software reliability, and practical software design.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl space-y-4 text-slate-300 leading-relaxed">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-400" />
              Developer Profile
            </h3>
            {PERSONAL_INFO.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base text-slate-300">
                {paragraph}
              </p>
            ))}
            
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                Location: {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Open for Engineering Roles
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                Target: {PERSONAL_INFO.targetCompany}
              </div>
            </div>
          </div>

          {/* Quick Philosophy Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl space-y-5 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Engineering Philosophy</h4>
                <p className="text-xs text-slate-400 font-mono">Principles I code by</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold font-mono">01.</span>
                <span><strong>Solve Real Problems:</strong> Code exists to deliver clear user value and functional outcomes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold font-mono">02.</span>
                <span><strong>Test & Verify:</strong> Rely on empirical tests (automated coverage) rather than assumptions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold font-mono">03.</span>
                <span><strong>Clean & Maintainable:</strong> Write clear, modular code with predictable API boundaries.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl space-y-3 border border-slate-800"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bg}`}>
                  <IconComponent className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
