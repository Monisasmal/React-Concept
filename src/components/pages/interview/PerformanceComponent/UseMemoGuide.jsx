import React, { useState, useMemo } from "react";

const UseMemoGuide = () => {
  // --- COMPONENT STATE ---
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // A fake "expensive" list of data
  const largeDataList = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

  // --- THE LOGIC: EXPENSIVE CALCULATION ---
  // We want to filter this list based on the searchTerm.
  // We wrap it in useMemo so it DOES NOT re-filter whenever the 'count' changes.
  const filteredResults = useMemo(() => {
    console.log("⚡ Logic Running: Filtering the list...");
    
    // Imagine this was a list of 10,000 items instead of 6
    return largeDataList.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); // 👈 Only re-run if searchTerm changes!

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you implement <strong>useMemo</strong> to ensure a heavy calculation 
          only runs when necessary, avoiding performance lag?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>The Problem:</strong> By default, every line of code in your function runs on <strong>every render</strong>. If you have a heavy loop, it slows down the whole app.</li>
          <li><strong>The Solution:</strong> <code>useMemo</code> acts like a "Safe" for your data. It stores the result of the calculation.</li>
          <li><strong>The Watcher:</strong> The dependency array <code>[searchTerm]</code> tells React: "Only open the safe and recalculate if this specific value changes."</li>
          <li><strong>Memory vs. CPU:</strong> You are trading a bit of <strong>Memory</strong> (to store the result) to save a lot of <strong>CPU</strong> power.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState, useMemo } from 'react';

function SearchFilter({ allItems }) {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  // 1. Wrap the expensive filter logic in useMemo
  const filteredItems = useMemo(() => {
    console.log("Filtering items..."); 
    return allItems.filter(item => item.includes(query));
  }, [query]); // 2. ONLY re-runs when 'query' changes

  return (
    <div>
      <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..."
      />
      
      {/* 3. Updating this count causes a re-render, 
          BUT the 'Filtering items' log won't show up! */}
      <button onClick={() => setCount(count + 1)}>
        Re-render Parent: {count}
      </button>

      <ul>
        {filteredItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-8 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30">
          <div className="space-y-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Type to filter fruits..."
            />

            <div className="bg-white p-4 rounded-lg shadow-sm text-left">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Filtered Results (Memoized)</p>
              {filteredResults.map((fruit, i) => (
                <span key={i} className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold mr-2 mb-2">
                  {fruit}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-indigo-100">
              <p className="text-xs text-slate-500 mb-2 font-medium">Re-renders: {count}</p>
              <button 
                onClick={() => setCount(count + 1)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md w-full"
              >
                Click to Re-render Component
              </button>
            </div>
            <p className="text-[10px] text-slate-400 italic">Open Console: You'll see "Logic Running" only when you type, NOT when you click the button!</p>
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Chef preparing a Secret Sauce</strong>. 
          The sauce takes 2 hours to make (Expensive Calculation). If a customer asks 
          for a burger, the chef doesn't make a new batch of sauce from scratch. 
          He looks in the <strong>Fridge (The Cache)</strong>. He only makes a 
          <strong>New Batch</strong> if the original sauce has expired or the 
          <strong>Recipe (The Dependency)</strong> has changed!
        </p>
      </div>

    </div>
  );
};

export default UseMemoGuide;