import React, { useState, Suspense, lazy } from "react";

// --- 1. THE DYNAMIC IMPORT (The "Lazy" Part) ---
// We do NOT use the standard 'import Component from "./Component"'.
// Instead, we use lazy(). This tells Vite/Webpack: 
// "Put this component in its own separate file."
const HeavyReport = lazy(() => import("./HeavyReport"));

const CodeSplittingGuide = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you implement <strong>Code Splitting</strong> using React.lazy to improve the initial 
          load time of a MERN stack application?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>The import() Function:</strong> This is a special JavaScript function that returns a Promise. It tells the browser to fetch a file only when that line of code is executed.</li>
          <li><strong>React.lazy:</strong> This is a wrapper. It allows the "Dynamic Import" to be treated like a normal React component so you can render it inside your JSX.</li>
          <li><strong>Suspense Boundary:</strong> Because fetching a file over the internet takes time, React needs a "Wait Room." <code>Suspense</code> is that room. It shows a <code>fallback</code> (like a loader) until the file arrives.</li>
          <li><strong>Bundle Optimization:</strong> This is the best way to fix "Slow Initial Load" warnings in Google Lighthouse.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer (Understanding the Logic)
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { Suspense, lazy } from 'react';

// ✅ STEP 1: Define the lazy component. 
// This creates a separate file like 'HeavyComponent.chunk.js'
const HeavyReport = lazy(() => import('./HeavyReport'));

function App() {
  return (
    <div>
      <h1>My Fast Website</h1>

      {/* ✅ STEP 2: Use Suspense to wrap the lazy component. */}
      {/* The 'fallback' is what the user sees while the chunk downloads. */}
      <Suspense fallback={<div className="spinner">Loading Chunk...</div>}>
        
        {/* ✅ STEP 3: Render the component. 
            React will now go to the server and fetch the file. */}
        <HeavyReport />

      </Suspense>
    </div>
  );
}

export default App;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Live Preview (Simulation)
        </h2>
        <div className="max-w-md mx-auto p-8 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30">
          {!isLoaded ? (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 italic">The code for the "Heavy Part" is currently NOT in your browser's memory.</p>
              <button 
                onClick={() => setIsLoaded(true)}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
              >
                Trigger Code Splitting
              </button>
            </div>
          ) : (
            <Suspense 
              fallback={
                <div className="flex flex-col items-center gap-2 py-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Downloading New JS Chunk...</p>
                </div>
              }
            >
              {/* This represents the component successfully arriving from the server */}
              <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-emerald-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left">
                <h4 className="text-lg font-bold text-slate-800">🚀 Code Split Success!</h4>
                <p className="text-xs text-slate-500 mt-2">The JavaScript for this box was just downloaded. Your main app bundle stayed small and fast!</p>
              </div>
            </Suspense>
          )}
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Modular House</strong>. 
          Standard importing is like trying to deliver a <strong>fully built house</strong> 
          on a single truck. It’s too heavy and gets stuck in traffic. 
          <strong>Code Splitting</strong> is like delivering the <strong>Living Room</strong> 
          first so you can move in immediately. The <strong>Guest Bedroom</strong> (the Lazy Component) 
          is kept at the factory and only delivered on a separate truck when you 
          actually have a guest coming to stay!
        </p>
      </div>

    </div>
  );
};

export default CodeSplittingGuide;