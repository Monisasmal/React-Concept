import React, { useState, useMemo, memo } from 'react';

// 1. React.memo (The Component Guard)
const MemoizedChild = memo(({ data }) => {
  console.log("💎 React.memo: Child Rendered");
  return (
    <div className="p-4 bg-emerald-50 border-2 border-emerald-400 rounded-xl">
      <h4 className="font-bold text-emerald-800 text-xs uppercase">Memoized Component</h4>
      <p className="text-sm text-emerald-600">Value: {data}</p>
    </div>
  );
});

const MemoVsUseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 2. useMemo (The Math Guard)
  const expensiveCalculation = useMemo(() => {
    console.log("⚙️ useMemo: Running heavy math...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) { result += i; }
    return result + count;
  }, [count]); // Only runs if count changes

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. THE MAIN DIFFERENCE (WHAT IS IT?) --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React.memo <span className="text-indigo-600">vs</span> useMemo
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500 text-left">
            <h2 className="text-2xl font-bold text-emerald-700 mb-2 underline italic">React.memo (HOC)</h2>
            <p className="text-slate-600">
              Caches an <strong>Entire Component</strong>. It stops the child from 
              re-rendering if its props are the same.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2 underline italic">useMemo (Hook)</h2>
            <p className="text-slate-600">
              Caches a <strong>Specific Value</strong>. It stops a heavy 
              function/calculation from running again on every render.
            </p>
          </div>
        </div>
      </div>

      {/* --- 2. THE "IF NOT THEN" (THE DANGER) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl">
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border-l-4 border-rose-500 pl-6">
            <h3 className="font-bold text-rose-300">Without React.memo:</h3>
            <p className="text-sm text-slate-400 mt-2">
              Your UI tree "vibrates." Even if you just type one letter in a search bar, 
              every single component on the page re-draws itself, wasting CPU and battery.
            </p>
          </div>
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="font-bold text-amber-300">Without useMemo:</h3>
            <p className="text-sm text-slate-400 mt-2">
              Your app "freezes." If you have a list of 5,000 items being sorted, 
              the user will feel a tiny 0.5s lag every time they click <em>anything</em> 
              because that math is running again and again.
            </p>
          </div>
        </div>
      </div>

      {/* --- 3. INTERACTIVE LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">Comparison Lab</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-6 bg-slate-50 p-6 rounded-2xl">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Trigger Component Render:</label>
              <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type to re-render Parent..."
                className="w-full p-4 rounded-xl border-2 border-indigo-500 outline-none"
              />
            </div>
            <button 
              onClick={() => setCount(c => c + 1)}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-black shadow-lg active:scale-95"
            >
              Update Count (Triggers Math)
            </button>
          </div>

          {/* Visualization */}
          <div className="space-y-6">
             <MemoizedChild data="I am static props" />
             <div className="p-6 bg-indigo-50 border-2 border-indigo-400 rounded-2xl">
                <h4 className="font-bold text-indigo-800 text-xs uppercase underline">useMemo Result</h4>
                <p className="text-2xl font-black text-indigo-600">{expensiveCalculation}</p>
                <p className="text-[10px] text-indigo-400 italic">Math only re-runs when "Count" changes.</p>
             </div>
          </div>
        </div>
      </div>

      {/* --- 4. IMPORTANT POINT: REFERENTIAL INTEGRITY --- */}
      <div className="bg-amber-100 p-8 rounded-3xl border-2 border-dashed border-amber-400 mb-12">
        <h2 className="text-2xl font-black text-amber-900 mb-4 flex items-center gap-2 underline">
          💡 Pro Tip: Why React.memo fails
        </h2>
        <p className="text-amber-900 leading-relaxed text-sm">
          If you pass an <strong>Array</strong> or <strong>Object</strong> as a prop to a 
          <code> React.memo</code> child, it will still re-render! Why? Because in JS, 
          <code> [] !== [] </code>. 
          <br /><br />
          <strong>The Solution:</strong> You must wrap that Array or Object in 
          <code> useMemo </code> in the parent first, so the "Address" of the data 
          stays the same.
        </p>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">
        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World Example
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-slate-300 text-sm">
          <p>
            <strong>React.memo:</strong> Like a <strong>Photocopy</strong> of a map. 
            If the map hasn't changed, you just look at the paper you already have 
            instead of drawing the whole city again.
          </p>
          <p>
            <strong>useMemo:</strong> Like a <strong>Calculator Result</strong> on 
            a sticky note. If someone asks for "2+2", you don't calculate it—you 
            just read "4" from the note.
          </p>
        </div>
      </div>

    </div>
  );
};

export default MemoVsUseMemo;