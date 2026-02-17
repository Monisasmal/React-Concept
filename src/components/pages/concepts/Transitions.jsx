import React, { useState, useTransition } from 'react';

const TransitionsGuide = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 10000;

  const handleChange = (e) => {
    // 1. URGENT UPDATE: Show what the user typed immediately
    setInput(e.target.value);

    // 2. NON-URGENT UPDATE: Handle the heavy list filtering
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React <span className="text-cyan-600">Transitions</span>
        </h1>
        <div className="h-2 w-24 bg-cyan-600 mx-auto rounded-full mb-6"></div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-cyan-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">What is useTransition?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Introduced in React 18, <strong>Transitions</strong> allow you to distinguish 
            between <strong>Urgent</strong> updates (like typing or clicking) and 
            <strong> Transition</strong> updates (like loading a large list). 
            It tells React: "Don't freeze the screen for this; handle it when you have time."
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN TO USE --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-cyan-50 p-8 rounded-3xl shadow-lg border-l-8 border-cyan-500">
          <h3 className="text-2xl font-bold text-cyan-900 mb-4">🚀 Why use it?</h3>
          <p className="text-cyan-800 text-sm leading-relaxed">
            To keep the UI <strong>Responsive</strong>. Without transitions, a heavy 
            render will "lock" the input box, and the user won't see the letters 
            they are typing until the heavy work is finished.
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">📅 When to use?</h3>
          <ul className="text-amber-800 text-xs space-y-2 list-disc pl-4 mt-2 font-medium">
            <li>Filtering a massive table of data.</li>
            <li>Switching between complex dashboard tabs.</li>
            <li>Rendering search results as the user types.</li>
          </ul>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">!</div>
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          If you don't use transitions for heavy UI changes, your app will suffer 
          from <strong>"Key Lag."</strong> A user will type five letters, but the screen 
          will stay blank for a second, then all five letters will pop in at once. 
          This makes your app feel <strong>cheap and broken</strong>, even if the code is correct.
        </p>
      </div>

      {/* --- 4. INTERACTIVE LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-cyan-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-4 text-center underline">Responsive Input Lab</h2>
        <p className="text-center text-slate-500 text-sm mb-8 italic">
          We are rendering {LIST_SIZE.toLocaleString()} items below. Try typing fast!
        </p>
        
        <div className="max-w-md mx-auto mb-10">
          <input 
            type="text" 
            value={input}
            onChange={handleChange}
            placeholder="Type fast to test responsiveness..."
            className="w-full p-4 border-4 border-cyan-500 rounded-2xl outline-none focus:ring-4 focus:ring-cyan-100 text-xl font-bold"
          />
          {isPending && (
            <p className="text-cyan-600 font-bold mt-2 animate-pulse text-center">
              🔄 React is updating the heavy list in the background...
            </p>
          )}
        </div>

        <div className="h-64 overflow-y-auto bg-slate-100 rounded-3xl p-6 border-2 border-slate-200">
          {list.map((item, index) => (
            <div key={index} className="text-slate-400 text-[10px] inline-block m-1">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-cyan-900 p-10 rounded-3xl text-white shadow-xl">
        <h2 className="text-2xl font-black text-cyan-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: The Busy Waiter
        </h2>
        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">
          <p>
            <strong>Without Transition:</strong> A waiter who stands at your table 
            and won't let you order a drink until they have finished 
            re-arranging all the chairs in the restaurant.
          </p>
          <p>
            <strong>With Transition:</strong> The waiter takes your drink order 
            immediately (Urgent), then goes back to re-arranging chairs 
            (Transition) between serving customers.
          </p>
        </div>
      </div>

    </div>
  );
};

export default TransitionsGuide;