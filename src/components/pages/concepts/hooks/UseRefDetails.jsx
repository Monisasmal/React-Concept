import React, { useRef, useState } from 'react';

// 1. PROJECT: THE "FOCUS CONTROL ENGINE"
const UseRefProject = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useRef creates a reference to the input element
  const inputRef = useRef(null);

  // Focus input without re-rendering component
  const handleFocus = () => {
    inputRef.current.focus();
  };

  // Change input border dynamically
  const handleHighlight = () => {
    inputRef.current.style.border = '3px solid #22c55e';
  };

  return (
    <div
      className={`p-8 rounded-3xl transition-all shadow-2xl ${
        isDarkMode
          ? 'bg-slate-900 text-white'
          : 'bg-white text-slate-800'
      }`}
    >
      <label className="text-[10px] font-black uppercase tracking-widest opacity-50">
        Project: Ref Lab
      </label>

      <div className="mt-6 text-center">

        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          className="w-full p-4 rounded-2xl border-2 border-slate-300 outline-none text-slate-800 mb-6"
        />

        <div className="flex gap-4 justify-center mb-8">

          <button
            onClick={handleFocus}
            className="px-6 py-2 bg-indigo-500 text-white rounded-full font-bold active:scale-95"
          >
            Focus Input
          </button>

          <button
            onClick={handleHighlight}
            className="px-6 py-2 bg-emerald-500 text-white rounded-full font-bold active:scale-95"
          >
            Highlight
          </button>
        </div>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`w-full py-4 rounded-2xl font-black border-2 transition-all ${
            isDarkMode
              ? 'border-yellow-400 text-yellow-400'
              : 'border-slate-900 text-slate-900'
          }`}
        >
          {isDarkMode
            ? '☀️ SWITCH TO LIGHT'
            : '🌙 SWITCH TO DARK'}
        </button>
      </div>
    </div>
  );
};

const UseRefDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-black text-slate-900 mb-4">
          use<span className="text-indigo-600">Ref</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">

          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>useRef</strong> is a React Hook that creates a mutable
            reference object. It is commonly used to directly access DOM
            elements or store values without causing component re-renders.
          </p>
        </div>
      </div>

      {/* --- 2. WHY, WHEN, WHERE --- */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">

          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            🚀 Why use it?
          </h3>

          <p className="text-indigo-800 text-sm">
            To access DOM elements directly and store mutable values
            without triggering re-renders.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">

          <h3 className="text-xl font-bold text-emerald-900 mb-4">
            📅 When to use?
          </h3>

          <p className="text-emerald-800 text-sm">
            Use it for focus management, timers, animations,
            previous values, or direct DOM manipulation.
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">

          <h3 className="text-xl font-bold text-amber-900 mb-4">
            📍 Where to use?
          </h3>

          <p className="text-amber-800 text-sm">
            Inside functional components wherever direct access
            to DOM nodes or persistent mutable storage is required.
          </p>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then? (The Real Danger)
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          Without <code>useRef</code>, accessing DOM elements directly
          becomes difficult in React. You may also end up using unnecessary
          state updates that trigger unwanted re-renders.
        </p>
      </div>

      {/* --- 4. INTERACTIVE PROJECT LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">
          Related Project
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-4">

            <h4 className="text-xl font-bold text-indigo-600">
              The Focus Control Engine
            </h4>

            <p className="text-slate-500 text-sm">
              This project demonstrates how <code>useRef</code>
              directly controls an input element without causing
              component re-renders.
            </p>

            <ul className="text-xs text-slate-400 space-y-2">
              <li>✅ Direct DOM Access</li>
              <li>✅ Input Focus Handling</li>
              <li>✅ Dynamic Styling</li>
              <li>✅ No Re-Render Needed</li>
            </ul>
          </div>

          <UseRefProject />
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: TV Remote Control
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">

          <p>
            <strong>Without useRef:</strong> You walk to the TV every time
            you want to change the channel.
          </p>

          <p>
            <strong>With useRef:</strong> The remote control gives you
            direct access to control the TV instantly without moving.
          </p>
        </div>
      </div>

      {/* RELATED LINKS */}
      <div className="mt-12 flex justify-center gap-4">

        <a
          href="https://use-ref-hook-concept.vercel.app/"
          className="text-indigo-600 font-bold hover:underline"
        >
          Official Docs ↗
        </a>

        <span className="text-slate-300">|</span>

        <a
          href="https://github.com/Monisasmal/use-ref-hook-concept"
          className="text-indigo-600 font-bold hover:underline"
        >
          GitHub Link ↗
        </a>
      </div>
    </div>
  );
};

export default UseRefDetails;