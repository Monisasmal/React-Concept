import React, { useState } from "react";

const CustomHookToggleGuide = () => {
  // --- CUSTOM HOOK DEFINITION ---
  // This is the logic that would usually be in a separate file (useToggle.js)
  const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
      setValue((prevValue) => !prevValue);
    };

    return [value, toggle];
  };

  // --- IMPLEMENTATION FOR LIVE PREVIEW ---
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  const [isLoggedIn, toggleLogin] = useToggle(true);

  return (
    <div className={`max-w-5xl mx-auto pt-10 pb-20 px-6 min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-800"}`}>

      {/* --- 1. QUESTION --- */}
      <div className={`${isDarkMode ? "bg-slate-800" : "bg-white"} p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500`}>
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>
        <p className="opacity-80 text-lg">
          Create a <strong>Custom Hook</strong> called <code>useToggle</code> that manages a boolean 
          state and provides a function to switch that state between <code>true</code> and <code>false</code>.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className={`${isDarkMode ? "bg-slate-800" : "bg-white"} p-8 rounded-2xl shadow mb-10`}>
        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 opacity-80">
          <li><strong>Extract Logic:</strong> Custom hooks allow you to take repetitive <code>useState</code> logic out of components.</li>
          <li><strong>Functional Update:</strong> Use <code>setValue(prev =&gt; !prev)</code> to ensure the toggle always uses the latest state.</li>
          <li><strong>Return Array/Object:</strong> Following the <code>useState</code> pattern, we return an array <code>[value, toggle]</code>.</li>
          <li><strong>Reusability:</strong> Once defined, you can use <code>useToggle</code> in 10 different components without rewriting the logic.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import { useState } from "react";

// 1. Define the Custom Hook
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
}

// 2. Implementation in a Component
function ToggleComponent() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggleIsOn}>Toggle Status</button>
    </div>
  );
}

export default ToggleComponent;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className={`${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"} p-8 rounded-2xl shadow mb-10 border`}>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto space-y-8">
          
          {/* Example 1: Dark Mode Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-indigo-200">
            <div>
              <p className="font-bold">Dark Mode</p>
              <p className="text-xs opacity-60">Uses useToggle(false)</p>
            </div>
            <button 
              onClick={toggleDarkMode}
              className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${isDarkMode ? "bg-indigo-500" : "bg-gray-300"}`}
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isDarkMode ? "translate-x-6" : "translate-x-0"}`} />
            </button>
          </div>

          {/* Example 2: Auth Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-indigo-200">
            <div>
              <p className="font-bold">User Session</p>
              <p className="text-xs opacity-60">Status: {isLoggedIn ? "Active" : "Logged Out"}</p>
            </div>
            <button 
              onClick={toggleLogin}
              className={`px-4 py-2 rounded-lg font-bold text-white transition-all ${isLoggedIn ? "bg-red-500" : "bg-green-500"}`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>

        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of useToggle as a <strong>Standard Light Switch</strong>. You don't build a new 
          mechanical switch every time you build a room. You buy a pre-made switch (The Hook) 
          and install it. Whether it's for a light, a fan, or a heater, the 
          "Click" (Toggle) logic remains exactly the same!
        </p>
      </div>

    </div>
  );
};

export default CustomHookToggleGuide;