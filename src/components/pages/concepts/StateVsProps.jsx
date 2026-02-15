import React, { useState } from 'react';

// 1. CHILD COMPONENT: Receives data via PROPS
const ProfileCard = ({ name, role, themeColor }) => {
  return (
    <div 
      className="p-6 rounded-2xl shadow-lg border-l-8 transition-all"
      style={{ backgroundColor: 'white', borderLeftColor: themeColor }}
    >
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Child Component (Props)</label>
      <h3 className="text-2xl font-bold text-slate-800 mt-2">{name}</h3>
      <p className="text-slate-500">{role}</p>
      <p className="mt-4 text-xs italic text-slate-400">
        "I cannot change my own name. I only show what my parent gives me."
      </p>
    </div>
  );
};

const StateVsProps = () => {
  // 2. STATE: Internal data that can change
  const [userName, setUserName] = useState("Alex");
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          State <span className="text-indigo-600">vs</span> Props
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 underline italic">What is State?</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>Internal Data:</strong> State is like a component's <strong>Memory</strong>. 
              It is managed <em>inside</em> the component and can be changed by the 
              component itself (using <code>useState</code>).
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4 underline italic">What are Props?</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>External Data:</strong> Short for "Properties." Props are like 
              <strong>Arguments</strong> passed to a function. They are passed from 
              Parent to Child and are <strong>Read-Only</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* --- 2. WHY & WHEN TO USE --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl">
        <h2 className="text-3xl font-black mb-8 text-indigo-400 italic underline text-center">The Strategy</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-2">🚀 Why use State?</h3>
            <p className="text-slate-400 text-sm">
              Use state for anything that <strong>changes over time</strong>—like 
              text in an input, a counter, or whether a modal is open. When state 
              changes, React re-renders the UI automatically.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">📅 When to use Props?</h3>
            <p className="text-slate-400 text-sm">
              Use props to <strong>share data</strong> or to make components 
              reusable. A "Button" component should get its color and label 
              via props so you can use it 100 times with different looks.
            </p>
          </div>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-rose-50 p-10 rounded-3xl border-2 border-rose-200 mb-12">
        <h2 className="text-2xl font-black text-rose-800 mb-4">🛑 If Not Then? (The Real Danger)</h2>
        <p className="text-rose-900 leading-relaxed mb-4">
          If you try to <strong>mutate props</strong> (change them inside a child), 
          React will throw an error or cause bugs because props are "Immutable." 
          If you don't use <strong>State</strong> for changing data, the screen will 
          never update, even if your variables are changing in the background!
        </p>
      </div>

      {/* --- 4. INTERACTIVE LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">Interactive Lab</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Controlling the State */}
          <div className="space-y-6">
            <h3 className="font-bold text-slate-700 uppercase text-sm tracking-widest">Parent: Managing State</h3>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2">Change User Name (State):</label>
              <input 
                type="text" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-indigo-500 outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <button 
              onClick={() => setIsOnline(!isOnline)}
              className={`w-full py-4 rounded-xl font-black transition-all ${isOnline ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'}`}
            >
              Toggle Status: {isOnline ? "ONLINE" : "OFFLINE"}
            </button>
          </div>

          {/* Passing the Props */}
          <ProfileCard 
            name={userName} 
            role={isOnline ? "Active Developer" : "Away"} 
            themeColor={isOnline ? "#10b981" : "#6366f1"}
          />
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-amber-100 p-10 rounded-3xl border-2 border-dashed border-amber-400">
        <h2 className="text-2xl font-black text-amber-900 mb-4 flex items-center gap-2">
          🌍 Real-World: The Car and the Driver
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-amber-900">
          <p>
            <strong>State:</strong> This is the <strong>Fuel Level</strong> or 
            <strong> Speed</strong>. It changes as the car (component) drives. 
            The car manages this itself.
          </p>
          <p>
            <strong>Props:</strong> This is the <strong>License Plate</strong> or 
            <strong> Paint Color</strong>. These are given to the car when it is 
            made. The car doesn't decide its own license plate; it is "passed" 
            to it.
          </p>
        </div>
      </div>

    </div>
  );
};

export default StateVsProps;