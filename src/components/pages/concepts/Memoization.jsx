import React, { useState, useMemo } from "react";

const ReactMemoizationGuide = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 2;
  };

  const memoizedValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

//   const memoizedFunction = useCallback(() => {
//     console.log("Function executed");
//   }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Memoization?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Memoization is a performance optimization technique where
            React stores (caches) the result of expensive calculations
            and reuses it instead of recalculating on every render.
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
            <li>✔ Prevents unnecessary recalculations</li>
            <li>✔ Improves performance</li>
            <li>✔ Avoids unwanted re-renders</li>
            <li>✔ Useful for expensive computations</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. React stores computed value</li>
            <li>2. Dependency array controls re-run</li>
            <li>3. If dependency changes → recalculates</li>
            <li>4. If not → returns cached value</li>
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
          Without memoization, expensive functions will execute on every
          render, even if their inputs haven't changed — reducing performance.
        </p>

      </div>

      {/* --- 4. LIVE DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Memoization Demo
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold"
          >
            Re-render Component
          </button>

          <button
            onClick={() => setNumber(number + 1)}
            className="px-6 py-2 bg-emerald-600 text-white rounded-full font-bold"
          >
            Change Number
          </button>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-sm font-mono">
{`const memoizedValue = useMemo(() => {
  return expensiveCalculation(number);
}, [number]);`}
        </div>

        <div className="mt-6 text-center text-slate-700">
          <p>Count: {count}</p>
          <p>Number: {number}</p>
          <p>Result: {memoizedValue}</p>
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Expensive function runs only when "number" changes.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Without Memoization:</strong> Solving the same math problem again and again.
          </p>

          <p>
            <strong>With Memoization:</strong> Writing the answer once and reusing it.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactMemoizationGuide;