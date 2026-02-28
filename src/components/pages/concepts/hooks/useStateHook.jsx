import React, { useState } from 'react';

// 1. PROJECT: THE "DYNAMIC THEME & COUNTER"
// This is the practical project for useState mastery.
const UseStateProject = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`p-8 rounded-3xl transition-all shadow-2xl ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}`}>
      <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Project: State Lab</label>
      
      <div className="mt-6 text-center">
        <h3 className="text-4xl font-black mb-2">{count}</h3>
        <p className="text-sm opacity-70 mb-6">Current Value</p>
        
        <div className="flex gap-4 justify-center mb-8">
          <button 
            onClick={() => setCount(count - 1)}
            className="px-6 py-2 bg-rose-500 text-white rounded-full font-bold active:scale-95"
          > - </button>
          <button 
            onClick={() => setCount(0)}
            className="px-6 py-2 bg-slate-500 text-white rounded-full font-bold active:scale-95"
          > Reset </button>
          <button 
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 bg-emerald-500 text-white rounded-full font-bold active:scale-95"
          > + </button>
        </div>

        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`w-full py-4 rounded-2xl font-black border-2 transition-all ${isDarkMode ? 'border-yellow-400 text-yellow-400' : 'border-slate-900 text-slate-900'}`}
        >
          {isDarkMode ? "☀️ SWITCH TO LIGHT" : "🌙 SWITCH TO DARK"}
        </button>
      </div>
    </div>
  );
};

const UseStateDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          use<span className="text-indigo-600">State</span>
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">Definition</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>useState</strong> is a Hook that lets you add a <strong>"Memory"</strong> to functional 
            components. It returns a stateful value and a function to update it. When you 
            update the state, React automatically <strong>re-renders</strong> the component to reflect 
            the new data on the screen.
          </p>
        </div>
      </div>

      {/* --- 2. WHY, WHEN, WHERE --- */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">🚀 Why use it?</h3>
          <p className="text-indigo-800 text-sm">
            Normal variables reset on every render. <code>useState</code> tells React 
            to "preserve" this data even when the function re-runs.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-xl font-bold text-emerald-900 mb-4">📅 When to use?</h3>
          <p className="text-emerald-800 text-sm">
            Whenever you have data that <strong>changes based on user action</strong> (typing, 
            clicking, toggling).
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">
          <h3 className="text-xl font-bold text-amber-900 mb-4">📍 Where to use?</h3>
          <p className="text-amber-800 text-sm">
            Inside functional components at the <strong>Top Level</strong>. Never call 
            it inside loops or conditions.
          </p>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          Without <code>useState</code>, your UI is <strong>"Dead."</strong> You can update 
          JavaScript variables in the background, but the <strong>DOM will never update</strong>. 
          The user will keep seeing the old value, making the app feel broken and non-responsive.
        </p>
      </div>

      {/* --- 4. INTERACTIVE PROJECT LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">Related Project</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-indigo-600">The Theme Engine</h4>
            <p className="text-slate-500 text-sm">
              This project uses two states: one for a numeric counter and one for a 
              boolean theme toggle. It proves how one component can hold multiple memories.
            </p>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>✅ State 1: <code>count</code> (Number)</li>
              <li>✅ State 2: <code>isDarkMode</code> (Boolean)</li>
            </ul>
          </div>
          <UseStateProject />
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">
        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: The Microwave Timer
        </h2>
        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">
          <p>
            <strong>The Variable:</strong> The electricity flowing through the microwave. 
            You can't see it, and it doesn't tell you how long is left.
          </p>
          <p>
            <strong>The State:</strong> The <strong>Digital Display</strong>. When you 
            press a button, the display changes. The microwave "remembers" the time 
            and updates the screen every second until it hits zero.
          </p>
        </div>
      </div>
      
      {/* RELATED LINKS */}
      <div className="mt-12 flex justify-center gap-4">
        <a href="https://use-state-hook-concept-manaswini-sasmals-projects.vercel.app/" className="text-indigo-600 font-bold hover:underline">Projects ↗</a>
        <span className="text-slate-300">|</span>
        <a href="https://github.com/Monisasmal/use-state-hook-concept" className="text-indigo-600 font-bold hover:underline">GitHub Link ↗</a>
      </div>

    </div>
  );
};

export default UseStateDetails;