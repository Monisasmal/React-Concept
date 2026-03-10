import React, { useState } from "react";

/* --- Bundle Optimization Demo --- */
const BundleOptimizationDemo = () => {
  const [size, setSize] = useState(500);

  const optimizeBundle = () => {
    setSize(120);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border text-center">
      <h3 className="text-xl font-bold mb-4">Bundle Optimization Example</h3>

      <p className="text-lg mb-4">
        Bundle Size: <strong>{size} KB</strong>
      </p>

      <button
        onClick={optimizeBundle}
        className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold"
      >
        Optimize Bundle
      </button>

      <p className="text-sm mt-4 text-slate-600">
        Optimization removes unused code and splits bundles for faster loading.
      </p>
    </div>
  );
};

const ReactBundleOptimizationGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Bundle Optimization?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Bundle Optimization is the process of **reducing and organizing
            JavaScript bundles to improve application performance**.
            <br /><br />
            It removes unused code, splits large bundles, and ensures
            only necessary files are loaded in the browser.
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
            <li>✔ Reduces JavaScript file size</li>
            <li>✔ Faster page loading</li>
            <li>✔ Better user experience</li>
            <li>✔ Improves website performance</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-sm space-y-2">
            <li>1. Remove unused code</li>
            <li>2. Split large bundles</li>
            <li>3. Lazy load components</li>
            <li>4. Compress JavaScript files</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Optimized?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Large JavaScript bundles increase page loading time and
          negatively impact performance, especially on slow networks.
        </p>

      </div>

      {/* --- 4. LIVE EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Bundle Optimization Simulation
        </h2>

        <div className="mt-6 text-center text-slate-700">
          <BundleOptimizationDemo />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Optimization reduces bundle size for better performance.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Without Optimization:</strong> Carrying a heavy backpack
            filled with unnecessary items.
          </p>

          <p>
            <strong>Bundle Optimization:</strong> Packing only the
            essential items needed for the journey.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactBundleOptimizationGuide;