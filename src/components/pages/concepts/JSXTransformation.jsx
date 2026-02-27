import React, { useState } from "react";

const ReactJSXTransformationGuide = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">JSX Transformation?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            JSX Transformation is the process where JSX syntax is converted
            into regular JavaScript function calls (React.createElement)
            by tools like Babel before the browser executes it.
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
            <li>✔ Browsers don’t understand JSX</li>
            <li>✔ Converts JSX to valid JavaScript</li>
            <li>✔ Enables React component rendering</li>
            <li>✔ Makes development easier</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Developer writes JSX</li>
            <li>2. Babel compiles JSX</li>
            <li>3. JSX becomes React.createElement()</li>
            <li>4. Browser executes JavaScript</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          If JSX is not transformed, the browser will throw syntax errors
          because it cannot understand JSX directly.
        </p>

      </div>

      {/* --- 4. LIVE DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          JSX Transformation Demo
        </h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowCode(!showCode)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold"
          >
            Toggle JSX vs Transformed Code
          </button>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-left text-sm font-mono">
          {showCode ? (
            <pre>
{`// JSX
const element = <h1>Hello World</h1>;`}
            </pre>
          ) : (
            <pre>
{`// Transformed JavaScript
const element = React.createElement(
  "h1",
  null,
  "Hello World"
);`}
            </pre>
          )}
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Notice: JSX is converted into React.createElement().
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>JSX:</strong> Writing in English.
          </p>

          <p>
            <strong>Transformation:</strong> Translator converting it into machine language.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactJSXTransformationGuide;