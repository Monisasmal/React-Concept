import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for the Detail Pages

const HookHubDashboard = () => {
  const hookList = [
    { name: 'useState', color: 'border-indigo-500', desc: 'The King of State Management.' },
    { name: 'useEffect', color: 'border-emerald-500', desc: 'The Bridge to External Systems.' },
    { name: 'useRef', color: 'border-amber-500', desc: 'The Secret Weapon for DOM access.' },
    { name: 'useMemo', color: 'border-rose-500', desc: 'The Speed Engine for Performance.' },
    { name: 'useContext', color: 'border-sky-500', desc: 'The Prop-Drilling Killer.' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React <span className="text-indigo-600">Hooks Hub</span>
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">The Hub Overview</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hooks are the <strong>"Power-Ups"</strong> of functional components. They allow 
            you to add state, lifecycle logic, and direct DOM access to your functions 
            without ever needing a Class. This hub is your <strong>Navigation Map</strong> to 
            mastering every React power.
          </p>
        </div>
      </div>

      {/* --- 2. WHY & TYPES (THE CLICKABLE GRID) --- */}
      <h2 className="text-3xl font-black text-slate-800 mb-8 text-center uppercase tracking-tighter">Explore the Hooks</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {hookList.map((hook) => (
          <Link 
            key={hook.name} 
            to={`./hooks/${hook.name.toLowerCase()}`}
            className={`bg-white p-8 rounded-3xl shadow-lg border-l-8 ${hook.color} hover:scale-105 transition-all group`}
          >
            <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600">
              {hook.name}()
            </h3>
            <p className="text-slate-500 text-sm mb-4">{hook.desc}</p>
            <span className="text-xs font-bold text-indigo-500 underline uppercase">View Details & Project →</span>
          </Link>
        ))}
      </div>

      {/* --- 3. THE "IF NOT THEN" (THE DANGER) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">!</div>
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          Without Hooks, your components are <strong>"Dumb."</strong> They cannot remember 
          what the user typed, they cannot fetch data from an API, and they cannot 
          update the screen. You would be stuck writing <strong>Class Components</strong>, 
          which leads to "Wrapper Hell" and unmaintainable code.
        </p>
      </div>

      {/* --- 4. THE RULES OF HOOKS LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12 text-center">
        <h2 className="text-3xl font-black text-slate-800 mb-4 underline">Rules of the Road</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-indigo-200">
            <h4 className="font-bold text-indigo-700">1. Top Level Only</h4>
            <p className="text-xs text-slate-500 italic">Never call hooks inside loops or conditions. React relies on call order!</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-indigo-200">
            <h4 className="font-bold text-indigo-700">2. React Functions Only</h4>
            <p className="text-xs text-slate-500 italic">Hooks only work in Functional Components or Custom Hooks.</p>
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-amber-100 p-10 rounded-3xl border-2 border-dashed border-amber-400">
        <h2 className="text-2xl font-black text-amber-900 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: The Electrician's Toolbelt
        </h2>
        <div className="text-amber-900 leading-relaxed grid md:grid-cols-2 gap-8">
          <p>
            <strong>Before Hooks:</strong> You had to go back to the van (Class Component) 
            every time you needed a specific tool. It was slow and exhausting.
          </p>
          <p>
            <strong>After Hooks:</strong> You wear a <strong>Toolbelt</strong> (Functional Component). 
            You just reach down and "hook" the pliers (useState) or the tester (useEffect) 
            whenever you need them.
          </p>
        </div>
      </div>

    </div>
  );
};

export default HookHubDashboard;