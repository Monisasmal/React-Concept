import React, { useState } from "react";

/* --- Minification Demo --- */
const MinificationDemo = () => {
  const [before] = useState(`
function addNumbers(a, b) {
  return a + b;
}
`);

  const [after, setAfter] = useState("");

  const minifyCode = () => {
    setAfter("function addNumbers(a,b){return a+b}");
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border text-center">
      <h3 className="text-xl font-bold mb-4">Minification Example</h3>

      <div className="text-left text-sm bg-slate-100 p-4 rounded-lg mb-4">
        <strong>Before:</strong>
        <pre>{before}</pre>
      </div>

      <button
        onClick={minifyCode}
        className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold mb-4"
      >
        Minify Code
      </button>

      {after && (
        <div className="text-left text-sm bg-slate-100 p-4 rounded-lg">
          <strong>After:</strong>
          <pre>{after}</pre>
        </div>
      )}
    </div>
  );
};

const ReactMinificationGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Minification?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Minification is the process of **removing unnecessary characters**
            from code such as spaces, comments, and line breaks without
            changing its functionality.
            <br /><br />
            The goal is to **reduce file size and improve website performance**.
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
            <li>✔ Reduces JavaScript and CSS file size</li>
            <li>✔ Improves loading speed</li>
            <li>✔ Reduces bandwidth usage</li>
            <li>✔ Optimizes production builds</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-sm space-y-2">
            <li>1. Remove whitespace</li>
            <li>2. Remove comments</li>
            <li>3. Shorten variable names</li>
            <li>4. Compress the code</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Minified?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Large and uncompressed JavaScript files increase loading time
          and negatively impact website performance, especially for
          users with slow internet connections.
        </p>

      </div>

      {/* --- 4. LIVE EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Minification Simulation
        </h2>

        <div className="mt-6 text-center text-slate-700">
          <MinificationDemo />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Code becomes smaller without changing functionality.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Original Code:</strong> A long paragraph with
            spaces and extra words.
          </p>

          <p>
            <strong>Minified Code:</strong> The same message written
            in the shortest possible way.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactMinificationGuide;