import React, { useState, useEffect } from "react";

const DebounceLogicGuide = () => {
  // --- COMPONENT STATE ---
  const [searchTerm, setSearchTerm] = useState(""); // Immediate value
  const [debouncedValue, setDebouncedValue] = useState(""); // Delayed value

  // --- DEBOUNCE LOGIC (Written directly in the component) ---
  useEffect(() => {
    // 1. Start a timer to update the debounced state after 1000ms
    const timer = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, 1000);

    // 2. CLEANUP: If the user types again before 1000ms is over,
    // this function runs first and kills the previous timer.
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]); // This effect runs every time searchTerm changes

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you implement <strong>Debounce Logic</strong> directly inside a component 
          using <code>useEffect</code> and <code>setTimeout</code>?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Two States:</strong> We maintain one state for the "live" input and another for the "delayed" result.</li>
          <li><strong>The Timer:</strong> <code>setTimeout</code> is used to wait before moving the input value into the delayed state.</li>
          <li><strong>The Kill Switch:</strong> The <code>return () ={">"} clearTimeout(timer)</code> inside <code>useEffect</code> is the most critical part. It resets the wait time every time a new key is pressed.</li>
          <li><strong>Efficiency:</strong> This prevents expensive tasks (like API calls) from running until the user stops typing.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState, useEffect } from "react";

function SearchPage() {
  const [input, setInput] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    // Start a 1-second delay
    const handler = setTimeout(() => {
      setDisplayValue(input);
    }, 1000);

    // If input changes again, cancel the previous timeout
    return () => {
      clearTimeout(handler);
    };
  }, [input]); // Only re-run when user types

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Search..." 
      />
      
      <p>Typing: {input}</p>
      <p>Debounced: {displayValue}</p>
      
      {/* Example: Only call API when displayValue changes */}
      {displayValue && <p>Fetching results for: {displayValue}...</p>}
    </div>
  );
}

export default SearchPage;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview (Inside Component Logic)
        </h2>
        <div className="max-w-md mx-auto p-8 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30">
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center block mb-2">
                Type rapidly to see the delay
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-sm"
                placeholder="Start typing..."
              />
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-400">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Immediate State (Changes Every Key)</p>
                <p className="text-lg font-mono truncate">{searchTerm || "..."}</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-500">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Debounced State (1s After Typing Stops)</p>
                <p className="text-lg font-mono truncate text-green-600 font-bold">{debouncedValue || "..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Lazy Waiter</strong>. If you tell him "I want water," he starts 
          walking to the kitchen. But if you call out "Wait, I also want bread," he stops, 
          comes back, and waits another minute to see if you'll order more. He only actually 
          goes to the kitchen (executes the logic) when you haven't said a word for 60 seconds!
        </p>
      </div>

    </div>
  );
};

export default DebounceLogicGuide;

// Would you like me to show you how to apply this to a real API search?