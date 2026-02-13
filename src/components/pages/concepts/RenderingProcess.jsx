import React, { useState, useEffect } from 'react';

const RenderingProcess = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-8 animate-fade-in bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-bold text-teal-600 mb-8 text-center underline decoration-teal-200">
        🌟 React Rendering Process
      </h1>

      {/* Concept Breakdown Section */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-slate-200">
        <pre className="text-sm md:text-base leading-relaxed font-mono text-slate-800 overflow-x-auto">
{`🌍 BROWSER loads your React App
│
├── 📄 index.html
│   └── <div id="root"></div>   ← React takes control here
│
├── ⚙️ main.jsx (entry point)
│   ├── import React, ReactDOM, App
│   ├── const root = ReactDOM.createRoot(document.getElementById("root"))
│   └── root.render(<App />)     ← 🎯 React starts the engine
│
└── 💠 Virtual DOM Execution
    │
    ├── 🔹 Step 1: Render (Create Virtual DOM blueprint)
    ├── 🔹 Step 2: Diffing (Compare Old vs New Virtual DOM)
    └── 🔹 Step 3: Commit (Update only changed parts of Real DOM)`}
        </pre>
      </div>

      {/* Interactive Phase Explanation */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Mount/Alive Phase */}
        <section className="space-y-6">
          <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              🔄 React is Alive (Reactive Phase)
            </h2>
            <ul className="text-sm space-y-2 list-disc ml-4 opacity-90">
              <li>User interacts ➔ state update (setCount)</li>
              <li>React triggers a re-render</li>
              <li>Virtual DOM is recalculated in memory</li>
              <li>Only the changed UI elements are updated</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-teal-500 shadow-md">
            <h2 className="text-xl font-bold text-teal-800 mb-4 text-center">Live Demo</h2>
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-2">Current State Value:</p>
              <h1 className="text-5xl font-black text-teal-600 mb-4">{count}</h1>
              <button 
                onClick={() => setCount(prev => prev + 1)}
                className="bg-teal-600 text-white px-6 py-2 rounded-full font-bold hover:bg-teal-700 transition active:scale-95"
              >
                Trigger Re-render
              </button>
              <p className="text-[10px] text-slate-400 mt-4 italic">
                Notice: The entire page doesn't refresh; only the number above changes!
              </p>
            </div>
          </div>
        </section>

        {/* Lifecycle Phase */}
        <section className="bg-slate-900 text-slate-300 p-8 rounded-2xl shadow-lg border-b-8 border-red-500">
          <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
            🏁 The Lifecycle (Hooks)
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-green-400 font-bold">1. Mount Phase</h3>
              <p className="text-xs"><code>useEffect(() => &#123;...&#125;, [])</code></p>
              <p className="text-xs text-slate-400 mt-1 italic">Runs once after the initial render.</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold">2. Update Phase</h3>
              <p className="text-xs"><code>useEffect(() => &#123;...&#125;, [count])</code></p>
              <p className="text-xs text-slate-400 mt-1 italic">Runs every time 'count' changes.</p>
            </div>
            <div>
              <h3 className="text-red-400 font-bold">3. Unmount Phase</h3>
              <p className="text-xs"><code>return () => &#123;...&#125;</code> (Cleanup)</p>
              <p className="text-xs text-slate-400 mt-1 italic">Runs when the component is destroyed.</p>
            </div>
          </div>
        </section>

      </div>

      {/* Summary Note */}
      <div className="mt-10 p-5 bg-teal-50 border-l-4 border-teal-500 rounded-r-xl">
        <h3 className="font-bold text-teal-900 italic">Example Scenario:</h3>
        <p className="text-sm text-slate-700 mt-2">
          If you change a user's name in a list of 100 people, React doesn't redraw all 100. 
          It <strong>diffs</strong> the Virtual DOM, finds that only 1 name changed, 
          and updates that specific <code>&lt;li&gt;</code> in the Real DOM.
        </p>
      </div>
    </div>
  );
};

export default RenderingProcess;