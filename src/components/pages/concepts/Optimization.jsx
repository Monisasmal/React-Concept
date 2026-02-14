import React, { useState, useMemo } from 'react';

const Optimization = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // IMPORTANT POINT ADDED: useMemo
  // This expensive calculation only runs when 'count' changes, not when you type in the 'text' box.
  const expensiveResult = useMemo(() => {
    console.log("Running expensive calculation...");
    let sum = 0;
    for (let i = 0; i < 1000000; i++) { sum += i; }
    return sum + count;
  }, [count]);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React <span className="text-emerald-600">Optimization</span>
        </h1>
        <div className="h-2 w-24 bg-emerald-600 mx-auto rounded-full mb-6"></div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">What is it?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Optimization is the art of <strong>preventing unnecessary work</strong>. 
            In React, this means ensuring that components only re-render when absolutely 
            needed and that heavy calculations don't slow down the user interface.
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN TO USE --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-8 rounded-3xl shadow-lg border-l-8 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">🚀 Why use it?</h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            As your app grows, every small re-render adds up. Without optimization, 
            typing in an input box could feel "laggy," and animations might stutter. 
            We optimize to keep the <strong>Frame Rate</strong> high and the user happy.
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">📅 When to use?</h3>
          <p className="text-amber-800 text-sm leading-relaxed font-medium">
            Don't optimize everything too early! Use it when:
          </p>
          <ul className="text-amber-800 text-xs space-y-2 list-disc pl-4 mt-2">
            <li>A component has a massive list of items.</li>
            <li>You have heavy math calculations inside a component.</li>
            <li>A parent component updates very frequently.</li>
          </ul>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">Slow</div>
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        
        <div className="grid md:grid-cols-1 gap-6">
          <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
            If you don't optimize, you get <strong>"Wasted Renders."</strong> React will 
            re-calculate the entire UI tree even if only 1% of the data changed. On 
            slower mobile devices, your app will become unresponsive, frustrating 
            users and causing them to leave.
          </p>
        </div>
      </div>

      {/* --- 4. THE 3 PILLARS OF OPTIMIZATION (IMPORTANT POINTS) --- */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
          <h4 className="font-bold text-emerald-700 mb-2">1. Memoization</h4>
          <p className="text-xs text-slate-500">Using <code>useMemo</code> and <code>useCallback</code> to "remember" results so we don't calculate them twice.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
          <h4 className="font-bold text-emerald-700 mb-2">2. Code Splitting</h4>
          <p className="text-xs text-slate-500">Using <code>React.lazy</code> to only load the code the user is currently looking at.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
          <h4 className="font-bold text-emerald-700 mb-2">3. State Colocation</h4>
          <p className="text-xs text-slate-500 italic font-medium">Keep state as close to the component that needs it as possible to limit the "blast radius" of re-renders.</p>
        </div>
      </div>

      {/* --- 5. INTERACTIVE LAB: MEMOIZATION TEST --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-emerald-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-4 text-center">Optimization Lab</h2>
        <p className="text-center text-slate-500 text-sm mb-8">Open the console to see when the "Expensive Calculation" runs!</p>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-emerald-200">
            <h3 className="font-bold mb-4">Expensive Value: {expensiveResult}</h3>
            <button 
              onClick={() => setCount(c => c + 1)}
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all w-full"
            >
              Trigger Update (Math Runs)
            </button>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <h3 className="font-bold mb-4">Type to test Re-render:</h3>
            <input 
              type="text" 
              value={text} 
              onChange={(e) => setText(e.target.value)}
              placeholder="Notice math doesn't run when typing..."
              className="w-full p-3 rounded-lg border-2 border-slate-300 outline-none focus:border-emerald-500"
            />
            <p className="mt-2 text-[10px] text-slate-400">Because of <code>useMemo</code>, the math only runs when the count button is clicked.</p>
          </div>
        </div>
      </div>

      {/* --- 6. REAL WORLD ANALOGY --- */}
      <div className="bg-blue-900 p-10 rounded-3xl text-white">
        <h2 className="text-2xl font-black text-blue-300 mb-4 flex items-center gap-2">
          🌍 Real-World: The Professional Chef
        </h2>
        <div className="text-slate-300 leading-relaxed">
          <p className="mb-4">
            Imagine a chef (React) making a salad. 
          </p>
          <ul className="space-y-3 text-sm italic">
            <li><strong>Non-Optimized:</strong> Every time a new customer arrives, the chef buys a new knife, a new cutting board, and washes a new bowl.</li>
            <li><strong>Optimized:</strong> The chef keeps the knife and board ready (Memoization) and only chops the specific vegetables needed for the new order (Diffing/Reconciliation).</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Optimization;