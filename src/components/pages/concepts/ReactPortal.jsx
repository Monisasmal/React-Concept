import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h2 className="text-xl font-bold mb-4">Portal Modal</h2>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-indigo-600 text-white rounded-full"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

const ReactPortalGuide = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">React Portal?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A React Portal allows rendering a component outside its parent DOM hierarchy
            while still keeping it inside the React component tree.
          </p>
        </div>
      </div>

      {/* --- 2. WHY + HOW --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            🚀 Why is it important?
          </h3>

          <ul className="text-sm text-emerald-800 space-y-2">
            <li>✔ Prevent CSS overflow issues</li>
            <li>✔ Render modals & overlays properly</li>
            <li>✔ Avoid z-index conflicts</li>
            <li>✔ Keep UI clean & structured</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs text-indigo-800 space-y-2">
            <li>1. ReactDOM.createPortal()</li>
            <li>2. Takes JSX + target DOM node</li>
            <li>3. Renders outside parent container</li>
            <li>4. Still behaves like normal React child</li>
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
          Without portals, modals may get clipped by parent containers,
          break layout, or cause stacking issues.
        </p>

      </div>

      {/* --- 4. LIVE DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">
          Portal Demo
        </h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold"
          >
            Open Modal
          </button>
        </div>

        {open && <Modal onClose={() => setOpen(false)} />}

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">
          <p>
            <strong>Without Portal:</strong> Showing a popup inside a small box — it gets cut off.
          </p>

          <p>
            <strong>With Portal:</strong> Showing popup at the top layer of the page — fully visible.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactPortalGuide;