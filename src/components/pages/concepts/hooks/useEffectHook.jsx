import React, { useState, useEffect } from "react";

const UseEffectGuide = () => {
  // Logic for the Live Preview Section
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Idle");

  // Example 1: Runs on every render (no dependency array)
  useEffect(() => {
    console.log("I run every time the component updates!");
  });

  // Example 2: Runs once on mount (empty dependency array)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus("Component Mounted! ✅");
    console.log("I only run once when the component first appears.");
  }, []);

  // Example 3: Runs when a specific value changes
  useEffect(() => {
    if (count > 0) {
      console.log(`Count changed to: ${count}`);
    }
  }, [count]);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          What is the <strong>useEffect</strong> hook, and how do you control when it runs 
          using the dependency array?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Purpose:</strong> Used for operations like API calls, subscriptions, timers, or direct DOM manipulation.</li>
          <li><strong>No Array:</strong> If you omit the array, the effect runs after <strong>every</strong> single render.</li>
          <li><strong>Empty Array <code>[]</code>:</strong> The effect runs only <strong>once</strong> (on mount) and cleans up on unmount. Perfect for initial API calls.</li>
          <li><strong>With Dependencies <code>[prop, state]</code>:</strong> The effect only runs when the values inside the array change.</li>
          <li><strong>Cleanup Function:</strong> If you return a function from <code>useEffect</code>, React runs it before the component unmounts to prevent memory leaks (e.g., <code>clearTimeout</code>).</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. Setup logic (The Effect)
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 2. Cleanup logic (Prevents multiple intervals running at once)
    return () => clearInterval(interval);
    
  }, []); // 3. Dependency Array: Run once on mount

  return <div>Timer: {seconds} seconds</div>;
}

export default Timer;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-8 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30">
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mount Status</p>
              <p className="text-sm font-bold text-indigo-600">{status}</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="text-4xl font-black text-slate-800">{count}</div>
              <button 
                onClick={() => setCount(c => c + 1)}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
              >
                Increment (Triggers Effect)
              </button>
            </div>
            <p className="text-[10px] text-slate-400 italic">Check your browser console to see the effects firing!</p>
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of <code>useEffect</code> as a <strong>Smart Assistant</strong>. 
          If you give them no instructions, they check on you every 5 seconds (Every render). 
          If you tell them <strong>"Only help me when I arrive at the office"</strong> (Empty array), 
          they only check-in once when you get there. If you say <strong>"Only help me when the phone rings"</strong> 
          (Dependency array), they stay quiet until that specific event happens!
        </p>
      </div>

      <div className="mt-12 flex justify-center gap-4">
        <a href="https://use-effect-hook-concept.vercel.app/" className="text-indigo-600 font-bold hover:underline">Projects ↗</a>
        <span className="text-slate-300">|</span>
        <a href="https://github.com/Monisasmal/use-effect-hook-concept" className="text-indigo-600 font-bold hover:underline">GitHub Link ↗</a>
      </div>

    </div>
  );
};

export default UseEffectGuide;