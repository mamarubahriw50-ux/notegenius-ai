import { useState, useEffect, useRef } from 'react';

const Icon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  const icons: Record<string, JSX.Element> = {
    dashboard: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    fire: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    )
  };
  return icons[name] || icons.fire;
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen flex flex-col font-sans ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-black text-white text-lg">
            N
          </div>
          <span className="font-extrabold text-base bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            NoteGenius AI Pro
          </span>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-xl border border-slate-800 bg-slate-900 text-xs">
          Toggle Theme
        </button>
      </header>

      <main className="flex-1 max-w-7xl mx-auto p-6 space-y-6">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 border border-indigo-500/20 text-white space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold">
            <Icon name="fire" className="w-4 h-4 text-amber-400" />
            <span>Vite + React 18 Production Build</span>
          </div>
          <h1 className="text-3xl font-black">NoteGenius AI - Ready for Local Execution</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
            This Vite project contains all source code, types, and asset configurations. Run <code className="text-emerald-400 bg-slate-950 px-2 py-1 rounded font-mono">npm install && npm run dev</code> in your terminal to launch!
          </p>
        </div>
      </main>
    </div>
  );
}
