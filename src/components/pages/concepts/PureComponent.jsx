import React, { useState, memo } from 'react';

// 1. A PURE COMPONENT (Using React.memo)
// This component will ONLY re-render if its PROPS change.
const PureChild = memo(({ name }) => {
  console.log("💎 Pure Child Rendered!");
  return (
    <div className="p-6 bg-emerald-50 border-2 border-emerald-400 rounded-2xl mt-4">
      <h3 className="text-emerald-800 font-bold italic text-center">
        I am a Pure Component
      </h3>
      <p className="text-emerald-600 text-sm text-center">
        Prop Name: <span className="font-black underline">{name}</span>
      </p>
      <p className="text-[10px] mt-2 text-emerald-500 text-center uppercase tracking-tighter">
        Check the console: I don't re-render unless my name changes!
      </p>
    </div>
  );
});

const PureComponentGuide = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          Pure <span className="text-emerald-600">Component</span>
        </h1>
        <div className="h-2 w-24 bg-emerald-600 mx-auto rounded-full mb-6"></div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">What is it?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            A <strong>Pure Component</strong> is a component that always renders the 
            same output for the same props and state. In React, it performs a 
            <strong> "Shallow Comparison"</strong> of props—if the new props are exactly 
            the same as the old ones, React skips the re-render entirely.
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN TO USE --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">🚀 Why use it?</h3>
          <p className="text-indigo-800 text-sm leading-relaxed">
            To stop <strong>"Wasted Renders."</strong> By default, when a Parent 
            re-renders, all its children re-render too—even if their data didn't 
            change! Pure components block this unnecessary work, making your app 
            lightning fast.
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">📅 When to use?</h3>
          <ul className="text-amber-800 text-xs space-y-2 list-disc pl-4 mt-2 font-medium">
            <li>When a component renders often with the same props.</li>
            <li>When the UI is complex and takes a lot of energy to draw.</li>
            <li>In large lists where items don't change frequently.</li>
          </ul>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">!</div>
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Without Pure Components, your app performs <strong>"Double Work."</strong> 
          Every time you click a tiny button in the header, your whole page (footer, 
          sidebar, charts) re-calculates. On mobile devices, this drains the 
          <strong> battery</strong> and makes the screen feel <strong>"sticky"</strong> 
          or unresponsive.
        </p>
      </div>

      {/* --- 4. INTERACTIVE LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-4 text-center underline">Interactive Lab</h2>
        <p className="text-center text-slate-500 text-sm mb-8">Open your browser console to see the magic!</p>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-indigo-200">
            <h3 className="font-bold text-indigo-800 mb-4 uppercase tracking-widest text-xs">Parent Control</h3>
            
            <div className="space-y-4">
              <button 
                onClick={() => setCount(c => c + 1)}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-all"
              >
                Update Parent State (Count: {count})
              </button>
              
              <p className="text-[10px] text-slate-400 italic text-center">
                Clicking this re-renders the Parent, but <u>NOT</u> the Pure Child!
              </p>

              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border-2 border-slate-300 rounded-xl outline-none focus:border-emerald-500"
                placeholder="Change child prop name..."
              />
            </div>
          </div>

          <PureChild name={name} />
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">
        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: The Photocopy
        </h2>
        <div className="text-slate-300 leading-relaxed">
          <p className="mb-4">
            Imagine you ask a friend to draw a picture of a <strong>Tree</strong>.
          </p>
          <ul className="space-y-3 text-sm italic">
            <li>
              <strong>Standard Component:</strong> Every time you ask "Show me the tree," 
              the friend throws away the old paper and draws the exact same tree again 
              from scratch. (Wasted energy).
            </li>
            <li>
              <strong>Pure Component:</strong> The friend looks at their old drawing. 
              If the request for a "Tree" hasn't changed, they just hold up the 
              <strong> same piece of paper</strong> they already have. (Saved energy).
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default PureComponentGuide;