// import React, { useEffect, useState } from "react";

const ReactHydrationGuide = () => {
  const isClient = typeof window !== "undefined";

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Hydration in React?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Hydration is the process where React attaches event listeners
            and makes the static HTML (rendered by the server) interactive
            on the client side.
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
            <li>✔ Makes SSR content interactive</li>
            <li>✔ Faster initial page load</li>
            <li>✔ Better SEO</li>
            <li>✔ Improves user experience</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Server sends HTML to browser</li>
            <li>2. Browser displays static content</li>
            <li>3. React JS loads in background</li>
            <li>4. React attaches event handlers (Hydration)</li>
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
          Without hydration, the HTML would remain static and users
          wouldn’t be able to interact with buttons, forms, or dynamic UI.
        </p>

      </div>

      {/* --- 4. LIVE DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Hydration Demo (Client Detection)
        </h2>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-center">

          <h3 className="font-bold text-lg">
            {isClient ? "Client Hydrated ✅" : "Server Rendered HTML 🖥️"}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            After page loads, useEffect runs and hydration completes.
          </p>

        </div>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Before Hydration:</strong> A restaurant display model (looks real but not usable).
          </p>

          <p>
            <strong>After Hydration:</strong> Real restaurant where you can order and interact.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactHydrationGuide;