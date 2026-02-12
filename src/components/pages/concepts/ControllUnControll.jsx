import React, { useState, useRef } from 'react';

const FormsGuide = () => {
  // --- CONTROLLED LOGIC ---
  const [name, setName] = useState("");

  // --- UNCONTROLLED LOGIC ---
  const inputRef = useRef();

  const handleUncontrolledSubmit = () => {
    alert(`Uncontrolled Value (from DOM): ${inputRef.current.value}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Form Patterns</h1>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Controlled Section */}
        <section className="bg-white p-8 rounded-2xl border-2 border-blue-500 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Controlled Components</h2>
            
            <div className="mb-6 space-y-3">
              <p className="text-sm text-slate-700"><strong>What:</strong> An input where the value is handled by <b>React State</b>. React is the "Single Source of Truth."</p>
              
              <p className="text-sm text-slate-700"><strong>Why:</strong> It allows for instant feedback. You can validate, format, or disable buttons as the user types.</p>
              <p className="text-sm text-slate-700"><strong>When:</strong> Use this for 90% of your forms—especially for searches, live validation, and multi-step forms.</p>
            </div>

            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
              placeholder="React manages this..."
            />
            <div className="mt-2 p-3 bg-blue-50 rounded text-sm text-blue-800 font-mono">
              State: {name || "empty"}
            </div>
          </div>
        </section>

        {/* Uncontrolled Section */}
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Uncontrolled Components</h2>
            
            <div className="mb-6 space-y-3">
              <p className="text-sm text-slate-700"><strong>What:</strong> An input where the value is handled by the <b>DOM</b>. You "pull" data only when needed.</p>
              
              <p className="text-sm text-slate-700"><strong>Why:</strong> It's faster to write (less boilerplate) and doesn't trigger a re-render every time the user types.</p>
              <p className="text-sm text-slate-700"><strong>When:</strong> Use for simple "one-off" forms, file uploads, or when integrating with non-React libraries.</p>
            </div>

            <input 
              type="text" 
              ref={inputRef}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-slate-400 outline-none transition"
              placeholder="DOM manages this..."
            />
            <button 
              onClick={handleUncontrolledSubmit}
              className="mt-4 w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition font-bold"
            >
              Get Value via Ref
            </button>
          </div>
        </section>

      </div>

      {/* Quick Summary Table */}
      <div className="mt-12 overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-900">
            <tr>
              <th className="p-4">Comparison</th>
              <th className="p-4">Controlled</th>
              <th className="p-4">Uncontrolled</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            <tr>
              <td className="p-4 font-bold">Data Management</td>
              <td className="p-4">Handled by React State</td>
              <td className="p-4">Handled by DOM</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Re-rendering</td>
              <td className="p-4">On every keystroke</td>
              <td className="p-4">Only when needed</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Real-world Example</td>
              <td className="p-4">Live Search Filter</td>
              <td className="p-4">File Upload / Login</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormsGuide;