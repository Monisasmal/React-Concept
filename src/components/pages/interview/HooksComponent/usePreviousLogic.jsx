import React, { useState, useEffect, useRef } from "react";

const UsePreviousGuide = () => {
  // --- CUSTOM HOOK DEFINITION ---
  // This logic is usually extracted into usePrevious.js
  const usePrevious = (value) => {
    // 1. Create a "box" (ref) to hold the value
    const ref = useRef();

    // 2. Update the box with the NEW value AFTER the component renders
    useEffect(() => {
      ref.current = value;
    }, [value]);

    // 3. Return the OLD value (because useEffect runs AFTER the return)
    return ref.current;
  };

  // --- IMPLEMENTATION FOR LIVE PREVIEW ---
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          Create a <strong>usePrevious</strong> custom hook that remembers the value 
          from the <strong>previous render</strong>.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>useRef:</strong> We use <code>useRef</code> because it can hold a value without triggering a re-render when that value changes.</li>
          <li><strong>The Timing Trick:</strong> <code>useEffect</code> always runs <strong>after</strong> the component has finished rendering.</li>
          <li><strong>Step 1:</strong> The hook returns <code>ref.current</code> (the value from the <em>last</em> time).</li>
          <li><strong>Step 2:</strong> <code>useEffect</code> updates <code>ref.current</code> with the <em>new</em> value, but only after the return has already happened.</li>
          <li><strong>Result:</strong> On the next render, the "old" value is what gets returned.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import { useEffect, useRef } from "react";

// 1. The Custom Hook
function usePrevious(value) {
  const ref = useRef();

  // Store the current value in ref after every render
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return the previous value (which was stored before the update)
  return ref.current;
}

// 2. Usage in a Component
function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <h1>Now: {count}</h1>
      <h1>Before: {previousCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-8 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border-b-4 border-indigo-500 w-32">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Previous</p>
                <p className="text-3xl font-bold text-slate-400">{prevCount !== undefined ? prevCount : "—"}</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border-b-4 border-green-500 w-32">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Current</p>
                <p className="text-3xl font-bold text-green-600">{count}</p>
              </div>
            </div>
            
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-lg"
            >
              Increment Count
            </button>

            <p className="text-xs text-slate-500 italic text-center">
              Notice how "Previous" always lags exactly one step behind "Current".
            </p>
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Polaroid Camera</strong>. You take a new photo (the Current value). 
          While the camera is busy printing the new photo, you are still holding the 
          <strong>old photo</strong> from five minutes ago in your hand. You only swap 
          the old photo for the new one <em>after</em> the process is finished!
        </p>
      </div>

    </div>
  );
};

export default UsePreviousGuide;