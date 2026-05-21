import React, { useLayoutEffect, useRef, useState } from 'react';

// 1. PROJECT: THE "LAYOUT CONTROL ENGINE"
const UseLayoutEffectProject = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [boxWidth, setBoxWidth] = useState(200);

  const boxRef = useRef(null);

  // useLayoutEffect runs BEFORE browser paint
  // Perfect for layout measurements and DOM updates.
  useLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.height = `${boxWidth}px`;
    }
  }, [boxWidth]);

  return (
    <div
      className={`p-8 rounded-3xl transition-all shadow-2xl ${
        isDarkMode
          ? 'bg-slate-900 text-white'
          : 'bg-white text-slate-800'
      }`}
    >
      <label className="text-[10px] font-black uppercase tracking-widest opacity-50">
        Project: Layout Lab
      </label>

      <div className="mt-6 text-center">

        <div
          ref={boxRef}
          style={{ width: `${boxWidth}px` }}
          className="bg-indigo-500 mx-auto rounded-2xl transition-all duration-300"
        ></div>

        <p className="text-sm opacity-70 my-6">
          Dynamic Layout Box
        </p>

        <div className="flex gap-4 justify-center mb-8">

          <button
            onClick={() => setBoxWidth(boxWidth + 50)}
            className="px-6 py-2 bg-emerald-500 text-white rounded-full font-bold active:scale-95"
          >
            Increase Size
          </button>

          <button
            onClick={() => setBoxWidth(200)}
            className="px-6 py-2 bg-slate-500 text-white rounded-full font-bold active:scale-95"
          >
            Reset
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

const UseLayoutEffectDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-black text-slate-900 mb-4">
          use<span className="text-indigo-600">LayoutEffect</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">

          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>useLayoutEffect</strong> is a React Hook that runs
            synchronously after the DOM updates but before the browser paints
            the screen. It is mainly used for DOM measurements and visual updates
            without flickering.
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
            To update layouts and measure DOM elements before
            the user sees the screen changes.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">

          <h3 className="text-xl font-bold text-emerald-900 mb-4">
            📅 When to use?
          </h3>

          <p className="text-emerald-800 text-sm">
            Use it for animations, layout calculations,
            scroll positioning, or DOM measurements.
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">

          <h3 className="text-xl font-bold text-amber-900 mb-4">
            📍 Where to use?
          </h3>

          <p className="text-amber-800 text-sm">
            Inside functional components where layout-sensitive
            DOM updates must happen before browser paint.
          </p>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then? (The Real Danger)
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          Without <code>useLayoutEffect</code>, visual updates may happen
          after the browser paint, causing flickering, layout jumps,
          or incorrect measurements visible to users.
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
              The Layout Control Engine
            </h4>

            <p className="text-slate-500 text-sm">
              This project demonstrates how <code>useLayoutEffect</code>
              updates DOM layout before the browser paints the screen.
            </p>

            <ul className="text-xs text-slate-400 space-y-2">
              <li>✅ DOM Measurement</li>
              <li>✅ Synchronous Layout Updates</li>
              <li>✅ Flicker Prevention</li>
              <li>✅ Smooth UI Rendering</li>
            </ul>
          </div>

          <UseLayoutEffectProject />
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: Stage Preparation Before Curtain Opens
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">

          <p>
            <strong>Without useLayoutEffect:</strong> The audience sees
            workers arranging chairs and props after the curtain opens.
          </p>

          <p>
            <strong>With useLayoutEffect:</strong> Everything is perfectly
            arranged before the curtain opens, giving a smooth experience.
          </p>
        </div>
      </div>

      {/* RELATED LINKS */}
      <div className="mt-12 flex justify-center gap-4">

        <a
          href="https://use-layouteffect-hook-concept.vercel.app/"
          className="text-indigo-600 font-bold hover:underline"
        >
          Official Docs ↗
        </a>

        <span className="text-slate-300">|</span>

        <a
          href="https://github.com/Monisasmal/use-layouteffect-hook-concept"
          className="text-indigo-600 font-bold hover:underline"
        >
          GitHub Link ↗
        </a>
      </div>
    </div>
  );
};

export default UseLayoutEffectDetails;