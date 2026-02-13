import React, { useState } from 'react';

const Keys = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Master the React Engine' },
    { id: '2', text: 'Understand the "Why" of Keys' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() === '') {
      alert("⚠️ Look down! You must type in the BRIGHT YELLOW box first.");
      return;
    }
    const newItem = { id: `key-${Date.now()}`, text: inputValue };
    setItems([newItem, ...items]); 
    setInputValue('');
  };

  return (
    /* We added 'pt-32' (Padding Top) to make sure your Navbar doesn't hide the content */
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- CONCEPT VISIBILITY FOR GITHUB --- */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-indigo-100 mb-12">
        <h1 className="text-4xl font-black text-indigo-700 mb-4">🔑 The Key Concept</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-slate-800">1. What is the use?</h2>
            <p className="text-slate-600">
              It provides a <strong>Stable Identity</strong>. In a list of 1000 items, 
              if you change #1, React uses the key to avoid re-checking #2 to #1000.
            </p>
          </section>

          <section className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
            <h2 className="text-lg font-bold text-red-700">2. If Not Then? (The Danger)</h2>
            <p className="text-sm text-red-900">
              Without keys, React re-renders everything. If you have an input 
              box in the list, your typing will disappear because the 
              component "restarts" every time.
            </p>
          </section>
        </div>
      </div>

      {/* --- THE INPUT BOX (HIGH VISIBILITY) --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl shadow-2xl border-4 border-yellow-400">
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="CLICK HERE AND TYPE SOMETHING..."
            className="w-full p-6 rounded-xl bg-yellow-100 text-slate-900 text-2xl font-black border-4 border-white focus:bg-white focus:border-indigo-400 outline-none transition-all placeholder:text-slate-400"
          />
          
          <button 
            onClick={addItem}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-black py-5 rounded-xl text-2xl shadow-lg transform active:scale-95 transition-all"
          >
            ADD TO TOP ↑
          </button>
        </div>

        {/* Typing feedback to prove React is working */}
        <div className="mt-6 text-center">
          <p className="text-indigo-200 text-sm uppercase tracking-widest">Live Preview of your typing:</p>
          <p className="text-white text-3xl font-mono mt-2 min-h-[45px]">
            {inputValue ? `"> ${inputValue}"` : "--- Empty ---"}
          </p>
        </div>
      </div>

      {/* --- THE LIST --- */}
      <div className="mt-12 space-y-4">
        <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm">Real-Time List:</h3>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white p-5 rounded-2xl shadow-md border border-slate-200">
            <span className="text-xl font-bold text-slate-700">{item.text}</span>
            <button onClick={() => setItems(items.filter(i => i.id !== item.id))} className="text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-lg">Remove</button>
          </div>
        ))}
      </div>
      
      {/* REAL WORLD EXAMPLE */}
      <div className="mt-16 p-8 bg-slate-800 rounded-3xl text-white">
        <h2 className="text-xl font-bold text-yellow-400 mb-2">🌍 Real-World: The Social Media Feed</h2>
        <p className="text-slate-300 text-sm">
          When you scroll Instagram and a new post appears at the top, Instagram doesn't 
          refresh all the posts you already saw. It uses <strong>Keys</strong> to keep 
          your scroll position and only "pins" the new post to the top.
        </p>
      </div>
    </div>
  );
};

export default Keys;