import React, { useState } from "react";

const ReactDropdownGuide = () => {
  // Logic for the Live Preview Section
  const options = ["Apple", "Banana", "Cherry", "Dragonfruit", "Elderberry"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600">
          Build a <strong>Dropdown component</strong> from scratch where clicking a button 
          toggles a list of options, and selecting an option updates the display and closes the menu.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Use <code>useState(false)</code> to track whether the menu is open or closed.</li>
          <li>Use a second <code>useState</code> to store the currently selected value.</li>
          <li>Toggle the <code>isOpen</code> state using an <code>onClick</code> handler on the main button.</li>
          <li>Conditionally render the options list using the <strong>&&</strong> operator or a ternary.</li>
          <li>Map through an array of strings to generate the list items.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre>
{`import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select");
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {selected}
      </button>

      {isOpen && (
        <ul style={{ position: "absolute", border: "1px solid #ccc" }}>
          {options.map((opt) => (
            <li key={opt} onClick={() => {
              setSelected(opt);
              setIsOpen(false);
            }}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-xs mx-auto relative pb-32">
          {/* Dropdown Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-colors"
          >
            {selectedOption}
            <span className={`ml-2 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>

          {/* Options Menu */}
          {isOpen && (
            <div className="absolute top-14 left-0 w-full bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden z-10 animate-in fade-in slide-in-from-top-2 duration-200">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="px-5 py-3 text-slate-700 hover:bg-indigo-50 cursor-pointer border-b last:border-none transition-colors"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white">
        <h2 className="text-xl font-bold mb-4">
          🌍 Real-World Analogy
        </h2>
        <p className="opacity-90 leading-relaxed">
          Think of a <strong>Restaurant Menu</strong>. The menu is usually folded shut (Closed state). 
          When you open it (Open state), you see all the food choices. Once you point to 
          the "Pasta" (Selection), you close the menu and put it back on the table!
        </p>
      </div>

    </div>
  );
};

export default ReactDropdownGuide;