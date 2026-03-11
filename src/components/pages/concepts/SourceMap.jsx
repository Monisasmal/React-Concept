import React, { useState } from "react";

/* --- Source Map Demo --- */
const SourceMapDemo = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border text-center">
      <h3 className="text-xl font-bold mb-4">Source Map Example</h3>

      <button
        onClick={() => setShowMap(!showMap)}
        className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold mb-4"
      >
        Toggle Source Map
      </button>

      {!showMap ? (
        <div className="text-left text-sm bg-slate-100 p-4 rounded-lg">
          <strong>Minified Code:</strong>
          <pre>function add(a,b){"{"}return a+b{"}"}</pre>
        </div>
      ) : (
        <div className="text-left text-sm bg-slate-100 p-4 rounded-lg">
          <strong>Original Code:</strong>
          <pre>
{`function addNumbers(a, b) {
  return a + b;
}`}
          </pre>
        </div>
      )}
    </div>
  );
};

const ReactSourceMapGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Source Map?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A Source Map is a file that **maps minified or compiled code
            back to the original source code**.
            <br /><br />
            It helps developers debug applications by showing the
            original readable code in browser developer tools.
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
            <li>✔ Helps debugging production code</li>
            <li>✔ Maps minified code to original code</li>
            <li>✔ Improves developer productivity</li>
            <li>✔ Makes error tracking easier</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-sm space-y-2">
            <li>1. Build tools generate source map files</li>
            <li>2. Browser loads the source map</li>
            <li>3. DevTools map compiled code to original code</li>
            <li>4. Developers debug using readable source files</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Source Maps Are Disabled?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Debugging becomes very difficult because developers
          only see compressed or minified code instead of
          the original readable source code.
        </p>

      </div>

      {/* --- 4. LIVE EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Source Map Simulation
        </h2>

        <div className="mt-6 text-center text-slate-700">
          <SourceMapDemo />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Source maps connect minified code back to original source files.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Minified Code:</strong> A shortened encrypted message.
          </p>

          <p>
            <strong>Source Map:</strong> A dictionary that translates it
            back to the original message.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactSourceMapGuide;