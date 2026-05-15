import React, { useState, useCallback, memo } from 'react';

// 1. CHILD COMPONENT
// memo prevents unnecessary re-rendering.
const Button = memo(({ onIncrement }) => {
  console.log('Button Re-rendered');

  return (
    <button
      onClick={onIncrement}
      className="px-6 py-3 bg-emerald-500 text-white rounded-2xl font-bold active:scale-95"
    >
      Increase Count
    </button>
  );
});

// 2. PROJECT: THE "PERFORMANCE CALLBACK ENGINE"
const UseCallbackProject = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useCallback stores function reference
  // so child component doesn't re-render unnecessarily.
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div
      className={`p-8 rounded-3xl transition-all shadow-2xl ${
        isDarkMode
          ? 'bg-slate-900 text-white'
          : 'bg-white text-slate-800'
      }`}
    >
      <label className="text-[10px] font-black uppercase tracking-widest opacity-50">
        Project: Callback Lab
      </label>

      <div className="mt-6 text-center">
        <h3 className="text-4xl font-black mb-2">{count}</h3>

        <p className="text-sm opacity-70 mb-6">
          Current Value
        </p>

        <div className="flex justify-center mb-8">
          <Button onIncrement={handleIncrement} />
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

const UseCallbackDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-black text-slate-900 mb-4">
          use<span className="text-indigo-600">Callback</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">

          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>useCallback</strong> is a React Hook that memoizes
            functions. It stores the function reference and only recreates
            the function when dependencies change.
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
            To prevent unnecessary re-rendering of child components
            when passing functions as props.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">

          <h3 className="text-xl font-bold text-emerald-900 mb-4">
            📅 When to use?
          </h3>

          <p className="text-emerald-800 text-sm">
            Use it when passing callbacks to optimized child components
            using <code>React.memo</code>.
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">

          <h3 className="text-xl font-bold text-amber-900 mb-4">
            📍 Where to use?
          </h3>

          <p className="text-amber-800 text-sm">
            Inside functional components where function recreation
            may cause performance issues.
          </p>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then? (The Real Danger)
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          Without <code>useCallback</code>, React creates a new function
          on every render. This can trigger unnecessary child component
          re-renders and reduce application performance.
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
              The Callback Engine
            </h4>

            <p className="text-slate-500 text-sm">
              This project demonstrates how <code>useCallback</code>
              keeps function references stable and prevents unnecessary
              child component rendering.
            </p>

            <ul className="text-xs text-slate-400 space-y-2">
              <li>✅ Memoized Function</li>
              <li>✅ Stable Function Reference</li>
              <li>✅ Optimized Child Rendering</li>
              <li>✅ Better Performance</li>
            </ul>
          </div>

          <UseCallbackProject />
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: Office Employee ID Card
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">

          <p>
            <strong>Without useCallback:</strong> Every day the company
            creates a brand new ID card for the same employee.
          </p>

          <p>
            <strong>With useCallback:</strong> The same ID card is reused
            until employee information actually changes.
          </p>
        </div>
      </div>

      {/* RELATED LINKS */}
      <div className="mt-12 flex justify-center gap-4">

        <a
          href="https://react.dev/reference/react/useCallback"
          className="text-indigo-600 font-bold hover:underline"
        >
          Official Docs ↗
        </a>

        <span className="text-slate-300">|</span>

        <a
          href="#"
          className="text-indigo-600 font-bold hover:underline"
        >
          GitHub Link ↗
        </a>
      </div>
    </div>
  );
};

export default UseCallbackDetails;