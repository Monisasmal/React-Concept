import React, { createContext, useContext, useState } from 'react';

// 1. CREATE CONTEXT
const ThemeContext = createContext();

// 2. CHILD COMPONENT (Consumes Context)
const ThemedBox = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`p-6 rounded-2xl text-center transition-all ${
      isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-800'
    }`}>
      <h4 className="text-lg font-bold">I am using Context 🎯</h4>
      <p className="text-sm opacity-70">No props drilling needed!</p>
    </div>
  );
};

// 3. PROJECT: CONTEXT + THEME ENGINE
const UseContextProject = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <div className={`p-8 rounded-3xl transition-all shadow-2xl ${
        isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'
      }`}>
        <label className="text-[10px] font-black uppercase tracking-widest opacity-50">
          Project: Context Lab
        </label>

        <div className="mt-6 text-center">
          <ThemedBox />

          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`mt-8 w-full py-4 rounded-2xl font-black border-2 transition-all ${
              isDarkMode 
                ? 'border-yellow-400 text-yellow-400' 
                : 'border-slate-900 text-slate-900'
            }`}
          >
            {isDarkMode ? "☀️ SWITCH TO LIGHT" : "🌙 SWITCH TO DARK"}
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

const UseContextDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          use<span className="text-indigo-600">Context</span>
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>useContext</strong> is a Hook that lets you access shared data 
            (global state) without passing props manually at every level. It works 
            with <strong>Context API</strong> to allow components to "subscribe" 
            to shared values.
          </p>
        </div>
      </div>

      {/* --- 2. WHY, WHEN, WHERE --- */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">🚀 Why use it?</h3>
          <p className="text-indigo-800 text-sm">
            To avoid <strong>props drilling</strong> — passing data through multiple 
            components unnecessarily.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-xl font-bold text-emerald-900 mb-4">📅 When to use?</h3>
          <p className="text-emerald-800 text-sm">
            When data needs to be <strong>shared globally</strong> (theme, auth, user data).
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">
          <h3 className="text-xl font-bold text-amber-900 mb-4">📍 Where to use?</h3>
          <p className="text-amber-800 text-sm">
            Wrap components with a <strong>Provider</strong> and consume using 
            <code> useContext </code> inside child components.
          </p>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then? (The Real Danger)
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          Without <code>useContext</code>, your app can become a 
          <strong> "props drilling nightmare."</strong> Data has to be passed 
          through layers of components even if they don't need it, making your 
          code messy, hard to maintain, and error-prone.
        </p>
      </div>

      {/* --- 4. INTERACTIVE PROJECT LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">
          Related Project
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-indigo-600">The Context Theme Engine</h4>
            <p className="text-slate-500 text-sm">
              This project shares theme data globally using Context API. 
              A child component consumes it without props.
            </p>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>✅ Global State: <code>isDarkMode</code></li>
              <li>✅ Provider wraps components</li>
              <li>✅ Consumer uses <code>useContext</code></li>
            </ul>
          </div>
          <UseContextProject />
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">
        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: Wi-Fi Network
        </h2>
        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">
          <p>
            <strong>Props Drilling:</strong> Asking each person in a chain to 
            pass the Wi-Fi password to the next person.
          </p>
          <p>
            <strong>Context:</strong> Everyone connects directly to the 
            <strong> Wi-Fi Router</strong>. No middle person needed.
          </p>
        </div>
      </div>

      {/* RELATED LINKS */}
      <div className="mt-12 flex justify-center gap-4">
        <a href="https://use-context-hook-concept.vercel.app/" className="text-indigo-600 font-bold hover:underline">Projects ↗</a>
        <span className="text-slate-300">|</span>
        <a href="https://github.com/Monisasmal/use-context-hook-concept" className="text-indigo-600 font-bold hover:underline">GitHub Link ↗</a>
      </div>

    </div>
  );
};

export default UseContextDetails;