import React, { useEffect } from "react";

const StrictModeGuide = () => {

  useEffect(() => {
    console.log("Effect Running");
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Strict Mode?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Strict Mode is a development tool in React that helps detect potential
            problems in an application by activating additional checks and warnings.
            It works only in development mode and does not affect production.
          </p>
        </div>
      </div>

      {/* --- 2. WHY + HOW --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            🚀 Why is it important?
          </h3>

          <ul className="text-sm text-emerald-800 space-y-2">
            <li>✔ Detect unsafe lifecycle methods</li>
            <li>✔ Identify side effects</li>
            <li>✔ Warn about deprecated APIs</li>
            <li>✔ Prepare app for future React updates</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs text-indigo-800 space-y-2">
            <li>1. React intentionally double-invokes some functions</li>
            <li>2. Detects unexpected side effects</li>
            <li>3. Logs warnings in console</li>
            <li>4. Does nothing in production build</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then? (The Real Danger)
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Without Strict Mode, hidden bugs and unsafe practices may go unnoticed,
          leading to performance issues and future compatibility problems.
        </p>

      </div>

      {/* --- 4. DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">
          Console Demo
        </h2>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-200 text-center">
          Open console and check:
          <p className="mt-4 font-semibold text-indigo-600">
            "Effect Running" appears twice in development mode.
          </p>
        </div>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">
          <p>
            <strong>Without Strict Mode:</strong> Building a house without quality inspection.
          </p>

          <p>
            <strong>With Strict Mode:</strong> Quality inspector checks for hidden defects before delivery.
          </p>
        </div>

      </div>

    </div>
  );
};

export default StrictModeGuide;