import React from "react";

const TreeShakingGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Tree Shaking?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Tree Shaking is a process used in modern JavaScript bundlers
            (like Webpack, Vite) to remove unused code from the final
            production bundle, reducing file size.
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
            <li>✔ Reduces bundle size</li>
            <li>✔ Improves performance</li>
            <li>✔ Faster page load</li>
            <li>✔ Removes unused imports</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Uses ES6 module syntax (import/export)</li>
            <li>2. Detects unused exports</li>
            <li>3. Removes unused code</li>
            <li>4. Final bundle becomes smaller</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Used?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          If tree shaking is not applied, unused code stays in the bundle,
          increasing file size and slowing down your application.
        </p>

      </div>

      {/* --- 4. EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Example
        </h2>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-sm font-mono">
{`// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// App.js
import { add } from "./math";

console.log(add(2,3));`}
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Here, subtract() is never used → It will be removed in production build.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Without Tree Shaking:</strong> Packing your entire wardrobe for a 2-day trip.
          </p>

          <p>
            <strong>With Tree Shaking:</strong> Packing only the clothes you need.
          </p>
        </div>

      </div>

    </div>
  );
};

export default TreeShakingGuide;