import React, { useState, memo } from 'react';

// 1. THE MEMOIZED CHILD
// This component is wrapped in memo(). 
// It will NOT re-render if the Parent's 'text' state changes.
const MemoChild = memo(({ count }) => {
  console.log("⚡ Memoized Child Rendered!");
  return (
    <div className="p-6 bg-emerald-50 border-2 border-emerald-400 rounded-2xl mt-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-emerald-400 text-white text-[10px] px-2 py-1 font-bold">MEMOIZED</div>
      <h3 className="text-emerald-800 font-bold">Child Component</h3>
      <p className="text-2xl font-black text-emerald-600">Count: {count}</p>
      <p className="text-[10px] mt-2 text-emerald-500 italic">
        "I only re-render if the 'Count' prop changes."
      </p>
    </div>
  );
});

const ReactMemoGuide = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React<span className="text-emerald-600">.memo</span>
        </h1>
        <div className="h-2 w-24 bg-emerald-600 mx-auto rounded-full mb-6"></div>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">What is it?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>React.memo</strong> is a Higher-Order Component (HOC). It tells React: 
            "Please cache this component. If the <strong>Props</strong> are the same 
            as last time, don't bother re-rendering—just show the old version."
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN TO USE --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">🚀 Why use it?</h3>
          <p className="text-indigo-800 text-sm leading-relaxed mb-4">
            By default, when a Parent updates, <strong>every child re-renders</strong>. 
            If you have a massive list or a complex chart, this "Double Work" kills performance.
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">📅 When to use?</h3>
          <ul className="text-amber-800 text-xs space-y-2 list-disc pl-4 font-medium">
            <li>The component is large and heavy to render.</li>
            <li>The props stay the same most of the time.</li>
            <li>The component re-renders too often unnecessarily.</li>
          </ul>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">!</div>
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          If you don't use <code>React.memo</code> on heavy components, you get 
          <strong> "UI Lag."</strong> Imagine typing in an input box and the letters 
          appearing 1 second later—that happens because React is busy re-rendering 
          huge components that haven't even changed!
        </p>
      </div>

      {/* --- 4. INTERACTIVE LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">Performance Lab</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* PARENT CONTROLS */}
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-2xl border-2 border-indigo-200">
              <h3 className="font-bold text-indigo-800 mb-4 uppercase text-xs">Parent Control</h3>
              <button 
                onClick={() => setCount(c => c + 1)}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-black mb-4 shadow-lg active:scale-95"
              >
                Change Count (Child will update)
              </button>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400">Type something else:</label>
                <input 
                  type="text" 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="The child won't care about this..."
                  className="w-full p-3 border-2 border-slate-300 rounded-xl outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* THE CHILD */}
          <MemoChild count={count} />
        </div>
        
        <div className="mt-8 p-4 bg-slate-800 rounded-xl text-center">
          <p className="text-emerald-400 font-mono text-sm">
            Check Console: Typing in the box does <u>not</u> trigger "⚡ Memoized Child Rendered!"
          </p>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white shadow-xl">
        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic text-center justify-center">
          🌍 Real-World: The Secretary
        </h2>
        <div className="text-slate-300 leading-relaxed text-center max-w-2xl mx-auto">
          <p className="mb-4">
            Imagine a Boss (Parent) and a Secretary (Memoized Child).
          </p>
          <p className="italic">
            "The Boss asks: 'What is our bank balance?' The Secretary calculates it (Renders). 
            If the Boss asks again 5 minutes later and <strong>nothing changed</strong>, 
            the Secretary doesn't recalculate—they just read the number from the sticky 
            note they wrote earlier."
          </p>
        </div>
      </div>

    </div>
  );
};

export default ReactMemoGuide;