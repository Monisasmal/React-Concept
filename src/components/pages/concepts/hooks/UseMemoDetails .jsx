import React, { useMemo, useState } from 'react';

// 1. EXPENSIVE FUNCTION
// Imagine this is a heavy calculation.
const slowCalculation = (num) => {
  console.log('Calculating...');

  for (let i = 0; i < 1000000000; i++) {
    Math.random();
  }

  return num * 2;
};

// 2. PROJECT: PERFORMANCE ENGINE
const UseMemoProject = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // useMemo stores the calculated value
  // and recalculates only when count changes.
  const doubledValue = useMemo(() => {
    return slowCalculation(count);
  }, [count]);

  return (
    <div
      className={`p-8 rounded-3xl transition-all shadow-2xl ${
        darkMode
          ? 'bg-slate-900 text-white'
          : 'bg-white text-slate-800'
      }`}
    >
      <label className="text-[10px] font-black uppercase tracking-widest opacity-50">
        Project: Performance Lab
      </label>

      <div className="mt-6 text-center">
        <h3 className="text-4xl font-black mb-2">
          {doubledValue}
        </h3>

        <p className="text-sm opacity-70 mb-6">
          Memoized Value
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 bg-emerald-500 text-white rounded-full font-bold active:scale-95"
          >
            Increase
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-6 py-2 bg-slate-500 text-white rounded-full font-bold active:scale-95"
          >
            Reset
          </button>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-full py-4 rounded-2xl font-black border-2 transition-all ${
            darkMode
              ? 'border-yellow-400 text-yellow-400'
              : 'border-slate-900 text-slate-900'
          }`}
        >
          {darkMode
            ? '☀️ SWITCH TO LIGHT'
            : '🌙 SWITCH TO DARK'}
        </button>
      </div>
    </div>
  );
};

const UseMemoDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-black text-slate-900 mb-4">
          use<span className="text-indigo-600">Memo</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">

          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>useMemo</strong> is a React Hook that helps optimize
            performance by <strong>memoizing</strong> expensive calculations.
            It stores the computed value and only recalculates when its
            dependencies change.
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
            To avoid unnecessary recalculations and improve application
            performance during re-renders.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">

          <h3 className="text-xl font-bold text-emerald-900 mb-4">
            📅 When to use?
          </h3>

          <p className="text-emerald-800 text-sm">
            Use it for expensive operations like filtering large lists,
            sorting data, calculations, or derived values.
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">

          <h3 className="text-xl font-bold text-amber-900 mb-4">
            📍 Where to use?
          </h3>

          <p className="text-amber-800 text-sm">
            Inside functional components where performance optimization
            is required during re-renders.
          </p>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then? (The Real Danger)
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          Without <code>useMemo</code>, expensive calculations run again
          on every render — even when the related data hasn't changed.
          This can slow down your application and create performance issues.
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
              The Performance Engine
            </h4>

            <p className="text-slate-500 text-sm">
              This project demonstrates how <code>useMemo</code> prevents
              expensive calculations from running unnecessarily.
            </p>

            <ul className="text-xs text-slate-400 space-y-2">
              <li>✅ Expensive Calculation</li>
              <li>✅ Memoized Result</li>
              <li>✅ Dependency-Based Recalculation</li>
              <li>✅ Faster Re-Renders</li>
            </ul>
          </div>

          <UseMemoProject />
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: Restaurant Billing Machine
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">

          <p>
            <strong>Without useMemo:</strong> The cashier recalculates the
            total bill from scratch every time someone asks for the amount.
          </p>

          <p>
            <strong>With useMemo:</strong> The billing machine stores the
            previous calculation and only recalculates when new items are added.
          </p>
        </div>
      </div>

      {/* RELATED LINKS */}
      <div className="mt-12 flex justify-center gap-4">

        <a
          href="https://github.com/Monisasmal/use-memo-hook-concept"
          className="text-indigo-600 font-bold hover:underline"
        >
          Official Docs ↗
        </a>

        <span className="text-slate-300">|</span>

        <a
          href="https://use-memo-hook-concept.vercel.app/"
          className="text-indigo-600 font-bold hover:underline"
        >
          GitHub Link ↗
        </a>
      </div>
    </div>
  );
};

export default UseMemoDetails;