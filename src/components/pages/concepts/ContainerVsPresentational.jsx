import React, { useState } from "react";

/* --- Presentational Component --- */
const CounterUI = ({ count, onIncrement }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border text-center">
      <h3 className="text-xl font-bold mb-4">Presentational Component</h3>
      <p className="text-lg mb-4">Count: {count}</p>
      <button
        onClick={onIncrement}
        className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold"
      >
        Increment
      </button>
    </div>
  );
};

/* --- Container Component --- */
const CounterContainer = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-emerald-50 rounded-2xl">
      <h3 className="text-xl font-bold mb-4 text-center">
        Container Component
      </h3>
      <CounterUI
        count={count}
        onIncrement={() => setCount(count + 1)}
      />
    </div>
  );
};

const ReactContainerPresentationalGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">
            Container vs Presentational?
          </span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            This is a design pattern where logic and state management
            are separated from UI rendering.
            <br /><br />
            <strong>Container Component:</strong> Handles logic and state.<br />
            <strong>Presentational Component:</strong> Handles UI and display.
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
            <li>✔ Improves code readability</li>
            <li>✔ Easier to test UI separately</li>
            <li>✔ Promotes reusable components</li>
            <li>✔ Clean architecture</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Container holds state</li>
            <li>2. Container passes props</li>
            <li>3. Presentational renders UI</li>
            <li>4. UI triggers container logic</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Separated?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Mixing UI and logic makes components large,
          difficult to maintain, and hard to reuse.
        </p>

      </div>

      {/* --- 4. LIVE EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Live Example
        </h2>

        <div className="mt-6 text-center text-slate-700">
          <CounterContainer />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Container manages state. Presentational displays UI.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Container:</strong> Restaurant Kitchen (prepares food)
          </p>

          <p>
            <strong>Presentational:</strong> Waiter (serves food nicely)
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactContainerPresentationalGuide;