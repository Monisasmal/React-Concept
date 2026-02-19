import React from 'react';

const ReactEvolution = () => {
  const versions = [
    {
      ver: "React 16",
      title: "The Foundation",
      features: ["Fiber Engine (Rewrite)", "Hooks (16.8)", "Portals", "Error Boundaries"],
      impact: "Moved us from Classes to Functional components and allowed React to 'pause' work."
    },
    {
      ver: "React 17",
      title: "The Stepping Stone",
      features: ["No New Features", "New JSX Transform", "Gradual Upgrades"],
      impact: "Focused on making it easier to upgrade React versions without breaking the whole app."
    },
    {
      ver: "React 18",
      title: "The Performance Era",
      features: ["Concurrent Mode", "useTransition", "useDeferredValue", "Automatic Batching"],
      impact: "Gave us 'Multitasking' capabilities. The UI stays responsive during heavy renders."
    },
    {
      ver: "React 19",
      title: "The Modern Era",
      features: ["Actions API", "useOptimistic", "useFormStatus", "Direct Ref Support"],
      impact: "Simplifies data handling and forms. We write much less 'boilerplate' code now."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React <span className="text-indigo-600">v16 → v19</span>
        </h1>
        <p className="text-slate-500 font-medium">The journey from Hooks to Actions</p>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mt-4"></div>
      </div>

      {/* --- 2. THE EVOLUTION TIMELINE --- */}
      <div className="space-y-8 mb-16">
        {versions.map((v, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border-l-8 border-indigo-500 hover:scale-[1.01] transition-transform">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-black text-slate-800">{v.ver}</h2>
              <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {v.title}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-400 uppercase text-xs mb-3">Key Additions</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {v.features.map((f, idx) => (
                    <li key={idx} className="text-sm text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-400 uppercase text-xs mb-2">The Result</h4>
                <p className="text-sm text-slate-600 italic">"{v.impact}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- 3. IMPORTANT POINT: WHAT CHANGED MOST? --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <h2 className="text-3xl font-black mb-8 text-indigo-400 italic underline">🛑 The "Big Shift"</h2>
        <div className="space-y-6">
          <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-indigo-500 pl-6">
            The biggest change from 16 to 19 is <strong>The Loss of Boilerplate.</strong>
          </p>
          <ul className="text-slate-400 text-sm space-y-4">
            <li><strong>In 16:</strong> We used <code>useEffect</code> for everything (fetching, updating, state syncing). It was messy.</li>
            <li><strong>In 19:</strong> We use <strong>Actions</strong> and hooks like <code>useOptimistic</code>. React now handles the "Loading" and "Error" states of data mutations automatically.</li>
          </ul>
        </div>
      </div>

      {/* --- 4. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white shadow-xl">
        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic text-center justify-center">
          🌍 Real-World: The Professional Kitchen
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center text-slate-300 text-sm">
          <div className="p-4 border border-slate-700 rounded-2xl">
            <h5 className="font-bold text-white mb-2 underline">React 16 (The Hand Tools)</h5>
            <p>You have to manually chop everything and watch every pot yourself (Classes/Manual State).</p>
          </div>
          <div className="p-4 border border-slate-700 rounded-2xl">
            <h5 className="font-bold text-white mb-2 underline">React 18 (The Assistant)</h5>
            <p>You get an assistant who helps you multitask so the kitchen doesn't stop when you're busy (Fiber/Concurrent).</p>
          </div>
          <div className="p-4 border border-slate-700 rounded-2xl">
            <h5 className="font-bold text-white mb-2 underline">React 19 (The Smart Oven)</h5>
            <p>You just put the food in and set the goal. The oven handles the timing and temperature automatically (Actions/Compiler).</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReactEvolution;