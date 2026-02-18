import React, { useState } from "react";

// --- CHILD COMPONENT FOR LAB ---
const EventBox = ({ message }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-inner text-center">
      <h2 className="text-xl font-bold text-indigo-600">{message}</h2>
    </div>
  );
};

const SyntheticEventsGuide = () => {
  const [msg, setMsg] = useState("Click or type to trigger events");

  const handleClick = (e) => {
    setMsg(`Clicked! Event type → ${e.type}`);
  };

  const handleInput = (e) => {
    setMsg(`Typing → ${e.target.value}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React <span className="text-indigo-600">Synthetic Events</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            What is it?
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Synthetic Events are React’s cross-browser event wrapper. Instead
            of using raw browser events directly, React normalizes them into a
            consistent system so your code behaves the same everywhere.
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            🚀 Why use Synthetic Events?
          </h3>

          <p className="text-emerald-800 text-sm leading-relaxed mb-4">
            Browsers handle events differently. React standardizes behavior so
            developers don’t worry about compatibility or inconsistencies.
          </p>

          <table className="w-full text-xs text-left bg-white/50 rounded-lg">
            <thead>
              <tr className="border-b border-emerald-200">
                <th className="p-2">Native Events</th>
                <th className="p-2">Synthetic Events</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-rose-500">Browser dependent</td>
                <td className="p-2 text-emerald-600 font-bold">
                  Cross-browser safe
                </td>
              </tr>
              <tr>
                <td className="p-2">Inconsistent APIs</td>
                <td className="p-2 text-emerald-600 font-bold">
                  Unified API
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            🧠 Key Features
          </h3>

          <ul className="text-indigo-800 text-xs space-y-2 font-medium">
            <li>Cross-browser compatibility</li>
            <li>Performance optimizations</li>
            <li>Consistent event properties</li>
            <li>Same interface as native events</li>
          </ul>
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
          Without a unified event system, apps would behave differently across
          browsers — leading to bugs, inconsistent UX, and debugging chaos.
        </p>
      </div>

      {/* --- 4. INTERACTIVE LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">
          Synthetic Event Lab
        </h2>

        <div className="flex justify-center gap-4 mb-6 flex-wrap">

          <button
            onClick={handleClick}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:scale-105 transition"
          >
            Click Event
          </button>

          <input
            onChange={handleInput}
            placeholder="Type something..."
            className="px-4 py-2 border rounded-full"
          />

        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-200">
          <EventBox message={msg} />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          React wraps both click & input events into a unified synthetic system.
        </p>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">

          <p>
            <strong>Without Synthetic Events:</strong> Every country uses a
            different plug type — chaos when traveling.
          </p>

          <p>
            <strong>With Synthetic Events:</strong> A universal adapter —
            everything works the same everywhere.
          </p>

        </div>
      </div>

    </div>
  );
};

export default SyntheticEventsGuide;
