import React, { useState } from "react";

/* --- Simulated Progressive Hydration Example --- */
const ProgressiveHydrationDemo = () => {
  const [interactiveParts, setInteractiveParts] = useState([]);

  const hydratePage = () => {
    setInteractiveParts([]);

    setTimeout(() => {
      setInteractiveParts((prev) => [...prev, "Navbar is now interactive"]);
    }, 500);

    setTimeout(() => {
      setInteractiveParts((prev) => [...prev, "Search Bar is now interactive"]);
    }, 1500);

    setTimeout(() => {
      setInteractiveParts((prev) => [...prev, "Comments Section is now interactive"]);
    }, 2500);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border text-center">
      <h3 className="text-xl font-bold mb-4">Progressive Hydration Example</h3>

      <button
        onClick={hydratePage}
        className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold mb-4"
      >
        Start Hydration
      </button>

      <div className="text-left space-y-2 text-slate-700">
        {interactiveParts.map((item, index) => (
          <p key={index}>✔ {item}</p>
        ))}
      </div>
    </div>
  );
};

const ReactProgressiveHydrationGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Progressive Hydration?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Progressive Hydration is a technique where a server-rendered
            page becomes interactive **step by step instead of all at once**.
            <br /><br />
            Important UI components become interactive first, while the
            remaining parts hydrate later.
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
            <li>✔ Improves page interactivity speed</li>
            <li>✔ Reduces JavaScript blocking</li>
            <li>✔ Better user experience</li>
            <li>✔ Optimizes large applications</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-sm space-y-2">
            <li>1. Server renders HTML first</li>
            <li>2. Browser displays the static content</li>
            <li>3. Important components hydrate first</li>
            <li>4. Remaining components hydrate gradually</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 Without Progressive Hydration?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          The browser must download and execute all JavaScript before
          the page becomes interactive, which can slow down performance
          and delay user interaction.
        </p>

      </div>

      {/* --- 4. LIVE EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Hydration Simulation
        </h2>

        <div className="mt-6 text-center text-slate-700">
          <ProgressiveHydrationDemo />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Components become interactive gradually.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Without Progressive Hydration:</strong> Waiting until the
            whole shopping mall opens before entering.
          </p>

          <p>
            <strong>Progressive Hydration:</strong> Opening important stores
            first while others open later.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactProgressiveHydrationGuide;