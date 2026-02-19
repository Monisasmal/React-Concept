import React, { useState } from "react";

// --- CHILD COMPONENT (Demo Output Box) ---
const OutputBox = ({ files }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-inner text-center">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">
        Bundled Output
      </h2>
      <ul className="text-sm space-y-2">
        {files.map((file, index) => (
          <li key={index} className="bg-slate-100 p-2 rounded-lg">
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

const WebpackGuide = () => {
  const [files, setFiles] = useState([
    "index.js",
    "App.js",
    "style.css",
    "logo.png",
  ]);

  const bundleFiles = () => {
    setFiles(["bundle.js (Optimized & Minified)"]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Webpack?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Webpack is a <strong>module bundler</strong>. It takes all your project
            files (JavaScript, CSS, images, etc.), processes them, and combines
            them into optimized bundles for the browser.
          </p>
        </div>
      </div>

      {/* --- 2. WHY, WHEN & WHERE --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            🚀 Why do we use Webpack?
          </h3>

          <ul className="text-sm text-emerald-800 space-y-2">
            <li>✔ Combines multiple files into one bundle</li>
            <li>✔ Optimizes & minifies code</li>
            <li>✔ Handles CSS, images, fonts</li>
            <li>✔ Improves performance</li>
          </ul>

          <h3 className="text-xl font-bold text-emerald-900 mt-6 mb-2">
            📅 When do we use it?
          </h3>

          <p className="text-sm text-emerald-800">
            When building modern frontend apps using React, Vue, or modular JavaScript.
          </p>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            🌍 Where is it used?
          </h3>

          <ul className="text-sm text-indigo-800 space-y-2">
            <li>• React projects</li>
            <li>• Enterprise frontend apps</li>
            <li>• SPAs</li>
            <li>• Production builds</li>
          </ul>

          <p className="text-xs mt-4 text-indigo-700">
            Most React tools (like CRA & older setups) use Webpack internally.
          </p>
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
          Without a bundler, browsers would need to load dozens or hundreds of
          separate files. This increases HTTP requests and slows down your app.
        </p>
      </div>

      {/* --- 4. INTERACTIVE DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">
          Webpack Bundling Demo
        </h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={bundleFiles}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:scale-105 transition"
          >
            Run Webpack Build
          </button>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-200">
          <OutputBox files={files} />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Notice how multiple files turn into one optimized bundle.
        </p>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">

          <p>
            <strong>Without Webpack:</strong> Sending 100 small packages
            separately — slow and inefficient.
          </p>

          <p>
            <strong>With Webpack:</strong> Packing everything into one
            optimized delivery box — fast and organized.
          </p>

        </div>
      </div>

    </div>
  );
};

export default WebpackGuide;
