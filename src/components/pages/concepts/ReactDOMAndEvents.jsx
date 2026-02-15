import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// A small Modal component to demonstrate PORTALS (important ReactDOM feature)
const PortalModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  // We teleport this div to the body directly, outside the React Root!
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-sm">
        <h2 className="text-2xl font-black text-rose-600 mb-4">I am a Portal! 🛸</h2>
        <p className="text-slate-600 mb-6 italic text-sm">
          Check your "Inspect Element." I am living inside the &lt;body&gt;, 
          not the &lt;div id="root"&gt;!
        </p>
        <button 
          onClick={onClose}
          className="bg-slate-900 text-white px-8 py-2 rounded-full font-bold"
        >
          Close Teleport
        </button>
      </div>
    </div>,
    document.body
  );
};

const ReactDOMAndEvents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React DOM <span className="text-indigo-600">&</span> Events
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">What is react-dom?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            The <code>react-dom</code> package is the <strong>Bridge</strong>. 
            React (the library) describes <em>what</em> should be on screen, and 
            <code>react-dom</code> (the package) actually talks to the browser 
            to place those pixels there.
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN TO USE --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">🚀 Why use ReactDOMServer?</h3>
          <p className="text-indigo-800 text-sm leading-relaxed mb-4">
            Used for <strong>Server-Side Rendering (SSR)</strong>. It sends ready-to-read 
            HTML to the browser so the user sees content instantly.
          </p>
          <ul className="text-xs text-indigo-700 space-y-1 list-disc pl-4">
            <li><strong>SEO:</strong> Google can read your page perfectly.</li>
            <li><strong>Speed:</strong> Faster first-page load for the user.</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">⚡ Events in React</h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            React uses <strong>Synthetic Events</strong>. They work the same in 
            Chrome, Safari, and Firefox. You use <code>camelCase</code> (onClick) 
            instead of lowercase (onclick).
          </p>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">!</div>
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          If you use standard HTML attributes like <code>for</code> or <code>class</code>, 
          React will get confused because those are reserved keywords in JavaScript. 
        </p>
        <p className="text-slate-400 text-sm italic border-l-4 border-slate-700 pl-6">
          "If you don't use <strong>htmlFor</strong> on labels, the browser won't 
          know which input the label belongs to, breaking <strong>Accessibility</strong> 
          for disabled users."
        </p>
      </div>

      {/* --- 4. INTERACTIVE LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">Interactive Event Lab</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Label and Input Test */}
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <h3 className="font-bold text-slate-700 mb-4 uppercase text-xs">Accessibility: htmlFor</h3>
            <div className="space-y-4">
              <label htmlFor="user-input" className="block text-sm font-black text-indigo-600 underline">
                CLICK THIS LABEL
              </label>
              <input 
                id="user-input"
                type="text" 
                placeholder="The label will focus me..."
                className="w-full p-4 rounded-xl border-2 border-slate-300 outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Event and Portal Test */}
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-indigo-200">
            <h3 className="font-bold text-slate-700 mb-4 uppercase text-xs">Portals & Synthetic Events</h3>
            <div className="space-y-4">
              <button 
                onClick={() => setClickCount(c => c + 1)}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold mb-2 shadow-lg active:scale-95"
              >
                React onClick: {clickCount}
              </button>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold shadow-lg active:scale-95"
              >
                Launch Portal Modal 🛸
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Portal is rendered outside the hierarchy here */}
      <PortalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white shadow-xl">
        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic text-center justify-center">
          🌍 Real-World: The Architect & The Builder
        </h2>
        <div className="text-slate-300 leading-relaxed text-center max-w-2xl mx-auto">
          <p className="mb-4">
            <strong>React:</strong> The <strong>Architect</strong> who draws the 
            floor plan (Virtual DOM). He doesn't touch the bricks.
          </p>
          <p>
            <strong>ReactDOM:</strong> The <strong>Builder</strong>. He takes the 
            drawing, goes to the construction site (the browser), and physically 
            lays the bricks (Real DOM).
          </p>
        </div>
      </div>

    </div>
  );
};

export default ReactDOMAndEvents;