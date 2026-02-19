import React, { useState } from "react";

// --- CHILD COMPONENT (List Renderer) ---
const ListView = ({ items }) => {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="bg-white p-3 rounded-xl shadow text-center font-semibold"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const DiffingAlgorithmGuide = () => {
  const [items, setItems] = useState(["A", "B", "C"]);

  const changeList = () => {
    setItems(["A", "C", "D"]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Diffing Algorithm?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            The Diffing Algorithm is the process React uses to compare the
            previous Virtual DOM with the new Virtual DOM and determine the
            minimum number of changes needed to update the real DOM.
          </p>
        </div>
      </div>

      {/* --- 2. WHY DO WE NEED IT? --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            🚀 Why is it important?
          </h3>

          <ul className="text-sm text-emerald-800 space-y-2">
            <li>✔ Avoid full DOM re-render</li>
            <li>✔ Improve performance</li>
            <li>✔ Update only changed elements</li>
            <li>✔ Enable fast UI updates</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs text-indigo-800 space-y-2">
            <li>1. Create new Virtual DOM</li>
            <li>2. Compare with previous version</li>
            <li>3. Find differences</li>
            <li>4. Update only changed nodes</li>
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
          Without the diffing algorithm, React would replace the entire DOM
          tree whenever state changes. This would make applications slow and
          inefficient.
        </p>
      </div>

      {/* --- 4. INTERACTIVE DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">
          Diffing Demo
        </h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={changeList}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:scale-105 transition"
          >
            Update List
          </button>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-200">
          <ListView items={items} />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          React compares old list ["A","B","C"] with new list ["A","C","D"]
          and updates only changed items.
        </p>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">

          <p>
            <strong>Without Diffing:</strong> Rebuilding the entire house just
            because one chair changed.
          </p>

          <p>
            <strong>With Diffing:</strong> Replace only the changed chair —
            fast and efficient.
          </p>

        </div>
      </div>

    </div>
  );
};

export default DiffingAlgorithmGuide;
