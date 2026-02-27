import React, { useState } from "react";

const ReactAutomaticBatchingGuide = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleUpdate = () => {
    setTimeout(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Automatic Batching?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Automatic Batching is a React 18 feature where multiple state
            updates are grouped into a single re-render automatically,
            even inside async operations like setTimeout or Promises.
          </p>
        </div>
      </div>

      {/* --- 2. WHY + HOW --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold mb-4">
            🚀 Why is it important?
          </h3>

          <ul className="text-sm space-y-2">
            <li>✔ Reduces unnecessary re-renders</li>
            <li>✔ Improves performance</li>
            <li>✔ Makes UI updates efficient</li>
            <li>✔ Works automatically in React 18+</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Multiple setState calls happen</li>
            <li>2. React groups them together</li>
            <li>3. Only one re-render occurs</li>
            <li>4. UI updates efficiently</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 Before React 18?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Before React 18, batching only worked inside React event handlers.
          In async functions like setTimeout, multiple state updates caused
          multiple re-renders.
        </p>

      </div>

      {/* --- 4. LIVE DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Automatic Batching Demo
        </h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold"
          >
            Update State (Async)
          </button>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-left text-sm font-mono">
{`setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
}, 1000);`}
        </div>

        <div className="mt-6 text-center text-slate-700">
          <p>Count: {count}</p>
          <p>Flag: {flag.toString()}</p>
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          In React 18, both state updates cause only ONE re-render.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Without Batching:</strong> Calling a delivery person 4 times for 4 items.
          </p>

          <p>
            <strong>With Automatic Batching:</strong> Sending all 4 items in one delivery.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactAutomaticBatchingGuide;