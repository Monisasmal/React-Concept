import React, { useState } from "react";

const ReactControlledInputGuide = () => {
  // Logic for the Live Preview Section
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>
        <p className="text-gray-700">
          Create a <strong>Controlled Input</strong> component where the input's value 
          is driven by React state, and any change to the input updates that state.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>State Initialization:</strong> Use <code>useState("")</code> to create a source of truth.</li>
          <li><strong>Value Binding:</strong> Set the input's <code>value</code> attribute to the state variable.</li>
          <li><strong>Change Handler:</strong> Use the <code>onChange</code> event to capture the user's keystrokes.</li>
          <li><strong>Update Logic:</strong> Inside the handler, call the setter function with <code>e.target.value</code>.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm md:text-base leading-relaxed">
{`import React, { useState } from "react";

function ControlledInput() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label>Type something: </label>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
      />
      <p>Current State: {text}</p>
    </div>
  );
}

export default ControlledInput;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-8 border-2 border-dashed border-indigo-200 rounded-xl bg-indigo-50/30">
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-indigo-900 uppercase tracking-wider">
              Controlled Field
            </label>
            <input
              type="text"
              placeholder="Start typing..."
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-4 border-2 border-white rounded-lg shadow-sm outline-none focus:border-indigo-400 transition-all bg-white"
            />
            
            <div className="flex justify-between items-center pt-4">
               <div className="text-sm text-gray-500">
                 Character Count: <span className="font-bold text-indigo-600">{inputValue.length}</span>
               </div>
               <button 
                 onClick={handleClear}
                 className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
               >
                 Clear
               </button>
            </div>

            <div className="mt-4 p-4 bg-white rounded-lg border border-indigo-100 shadow-inner">
              <p className="text-xs text-gray-400 mb-1 italic underline">Live State Output:</p>
              <p className="text-lg font-medium text-slate-800 break-words">
                {inputValue || <span className="text-gray-300">Nothing typed yet...</span>}
              </p>
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
          Think of a <strong>Digital Steering Wheel</strong> in a racing game. 
          When you turn the physical wheel (Input), the game's code (State) calculates the new 
          angle, and then the screen (UI) updates to show the car turning. The car doesn't 
          move <em>unless</em> the game state says so!
        </p>
      </div>

    </div>
  );
};

export default ReactControlledInputGuide;
