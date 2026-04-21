import React, { useState, Suspense, lazy } from "react";

// --- 1. THE LAZY COMPONENT ---
// Instead of importing it normally, we use React.lazy.
// This code will live in a separate file (chunk) on the server.
const HeavyReport = lazy(() => import("./HeavyReport"));

const LazyLoadingGuide = () => {
  const [isReportRequested, setIsReportRequested] = useState(false);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do I implement <strong>Lazy Loading</strong> in a way that improves my app's performance 
          and handles the "loading wait" gracefully?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>React.lazy:</strong> This function wraps a dynamic import. It tells React: "Don't include this component in the main bundle. Wait until I call it."</li>
          <li><strong>Suspense:</strong> This is a special component that acts as a <strong>wrapper</strong>. It detects if a child component is "not ready" (still downloading) and shows a <code>fallback</code> instead.</li>
          <li><strong>Fallback:</strong> This is the UI (like a spinner or a message) that prevents the screen from being blank while the JavaScript file travels over the internet.</li>
          <li><strong>Bundle Size:</strong> This technique reduces your initial JavaScript size, meaning your website "pops up" much faster for users on mobile or slow networks.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { Suspense, lazy } from 'react';

// 1. Dynamic import (This splits your code into smaller files)
const AnalyticsChart = lazy(() => import('./AnalyticsChart'));

function App() {
  return (
    <div className="container">
      <h1>My Admin Dashboard</h1>

      {/* 2. Suspense acts as a 'Safety Net' */}
      {/* It waits for the AnalyticsChart code to download */}
      <Suspense fallback={<div className="loader">Downloading Report...</div>}>
        <AnalyticsChart />
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
          {!isReportRequested ? (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 font-medium">The "Heavy Report" bundle is sitting on the server, not in your browser.</p>
              <button 
                onClick={() => setIsReportRequested(true)}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
              >
                Download & Open Report
              </button>
            </div>
          ) : (
            /* Suspense logic simulation */
            <Suspense 
              fallback={
                <div className="flex flex-col items-center gap-2 py-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fetching Code Chunk...</p>
                </div>
              }
            >
              {/* This represents the component arriving from the network */}
              <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-emerald-500 animate-in slide-in-from-top-4 duration-500 text-left">
                <h4 className="text-lg font-bold text-slate-800">📊 2026 Sales Report</h4>
                <p className="text-xs text-slate-500 mt-2">This data (and the code to display it) just finished downloading!</p>
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
          Think of a <strong>Movie Streaming App (like Netflix)</strong>. 
          Standard importing is like downloading the <strong>entire movie</strong> before 
          you can even see the play button. 
          <strong>Lazy Loading</strong> is like <strong>Streaming</strong>. You see the title 
          and cover immediately, and the actual movie code only starts downloading 
          when you hit "Play." The little loading wheel you see right before the 
          movie starts? That is your <strong>Suspense Fallback</strong>!
        </p>
      </div>

    </div>
  );
};

export default LazyLoadingGuide;