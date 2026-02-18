import React, { useState } from "react";

// --- CHILD COMPONENT FOR LAB ---
const Counter = ({ value }) => {
  console.log("Rendered:", value);
  return (
    <div className="p-6 bg-white rounded-2xl shadow-inner text-center">
      <h2 className="text-2xl font-bold">
        Count: <span className="text-indigo-600">{value}</span>
      </h2>
    </div>
  );
};

const ReconciliationGuide = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React <span className="text-indigo-600">Reconciliation</span>
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            What is it?
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Reconciliation is React’s smart comparison process. When state
            changes, React builds a <strong>Virtual DOM snapshot</strong>,
            compares it with the previous version, and updates only what
            actually changed — not the entire UI.
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            🚀 Why is it important?
          </h3>

          <p className="text-emerald-800 text-sm leading-relaxed mb-4">
            Updating the real DOM is expensive. Reconciliation ensures React
            performs the <strong>minimum DOM operations</strong> needed for
            smooth performance.
          </p>

          <table className="w-full text-xs text-left bg-white/50 rounded-lg">
            <thead>
              <tr className="border-b border-emerald-200">
                <th className="p-2">Without Reconciliation</th>
                <th className="p-2">With Reconciliation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-rose-500">Full DOM re-render</td>
                <td className="p-2 text-emerald-600 font-bold">
                  Partial DOM update
                </td>
              </tr>
              <tr>
                <td className="p-2">Slow UI</td>
                <td className="p-2 text-emerald-600 font-bold">
                  Fast & efficient UI
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            🧠 Core Idea
          </h3>

          <ul className="text-indigo-800 text-xs space-y-2 font-medium">
            <li>React creates a Virtual DOM copy</li>
            <li>Compares old vs new version</li>
            <li>Finds exact differences</li>
            <li>Updates only changed elements</li>
          </ul>
        </div>
      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then? (The Real Danger)
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Without reconciliation, every UI change would trigger a full DOM
          rebuild. This leads to laggy animations, slow rendering, and poor
          performance — especially in large applications.
        </p>
      </div>

      {/* --- 4. INTERACTIVE LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">
          Reconciliation Lab
        </h2>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:scale-105 transition"
          >
            Increase
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-6 py-2 bg-slate-300 rounded-full font-bold hover:scale-105 transition"
          >
            Reset
          </button>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-200">
          <Counter value={count} />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Notice: Only the number updates — React doesn’t rebuild the whole UI.
        </p>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">

          <p>
            <strong>Without reconciliation:</strong> Renovating your entire
            house just to change one light bulb.
          </p>

          <p>
            <strong>With reconciliation:</strong> Replace only the bulb —
            fast, efficient, and smart.
          </p>

        </div>
      </div>

    </div>
  );
};

export default ReconciliationGuide;
