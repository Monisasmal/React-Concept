import React, { useState } from 'react';

// 1. CHILD COMPONENT: The Input (SearchBar)
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex-1">
      <label className="block text-sm font-bold text-indigo-400 mb-2 uppercase">Input Child</label>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm} 
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-4 rounded-xl text-slate-900 border-4 border-indigo-500 focus:ring-4 focus:ring-yellow-400 outline-none transition-all"
      />
    </div>
  );
};

// 2. CHILD COMPONENT: The Display (ProductList)
const ProductList = ({ searchTerm, products }) => {
  const filtered = products.filter(product => 
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1">
      <label className="block text-sm font-bold text-emerald-400 mb-2 uppercase">Display Child</label>
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 min-h-[200px]">
        {filtered.length > 0 ? (
          <ul className="space-y-2">
            {filtered.map((product, index) => (
              <li key={index} className="p-2 bg-slate-700 rounded-lg text-white font-medium border-l-4 border-emerald-500">
                {product}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500 italic text-center mt-10">No products found...</p>
        )}
      </div>
    </div>
  );
};

const LiftingStateUp = () => {
  // STATE IS LIFTED HERE: To the Parent
  const [searchTerm, setSearchTerm] = useState('');
  const products = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple'];

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          Lifting <span className="text-indigo-600">State</span> Up
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">What is it?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            In React, data flows <strong>Down</strong> (one-way data flow). "Lifting State Up" is when you move 
            the state from a child component to its <strong>Common Parent</strong> so that two or more 
            sibling components can share the same information.
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN TO USE --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">🚀 Why use it?</h3>
          <p className="text-emerald-800 text-sm leading-relaxed">
            To keep your data in <strong>Sync</strong>. When Child A changes something (like a search bar), 
            Child B (the list) needs to know about it instantly. By keeping the state in the Parent, 
            both children always see the same "Source of Truth."
          </p>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">📅 When to use?</h3>
          <ul className="text-indigo-800 text-sm space-y-2 list-disc pl-4">
            <li>When two siblings need the same data.</li>
            <li>When you want to filter a list based on an input in a different component.</li>
            <li>When your app grows and you need a central place to manage local logic.</li>
          </ul>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black">!</div>
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        
        <div className="grid md:grid-cols-1 gap-6">
          <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
            If you keep state inside <strong>Child A</strong>, <strong>Child B</strong> will be blind to it. 
            You will have to write "hacky" code or use complex global stores unnecessarily. 
            Without lifting state, your components will become <strong>Isolated Islands</strong> that 
            cannot talk to each other, leading to a broken and unsynced UI.
          </p>
        </div>
      </div>

      {/* --- 4. INTERACTIVE LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-2">Interactive Lab</h2>
          <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full inline-block text-xs font-bold uppercase">
            Parent State: {searchTerm || 'Empty'}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <div className="hidden md:flex items-center text-4xl text-slate-300">➜</div>
          <ProductList searchTerm={searchTerm} products={products} />
        </div>
      </div>

      {/* --- 5. REAL WORLD EXAMPLE --- */}
      <div className="bg-yellow-50 p-10 rounded-3xl border-2 border-dashed border-yellow-400">
        <h2 className="text-2xl font-black text-yellow-900 mb-4 flex items-center gap-2">
          🌍 Real-World: The GPS and the Driver
        </h2>
        <div className="text-yellow-900 leading-relaxed">
          <p className="mb-4">
            Imagine a <strong>Car (Parent)</strong>. It has a <strong>GPS (Child A)</strong> and a 
            <strong> Dashboard Screen (Child B)</strong>.
          </p>
          <p className="italic bg-yellow-100 p-4 rounded-xl">
            "When the GPS gets a new coordinate (State Change), it doesn't talk to the Dashboard directly. 
            It sends the data up to the Car's computer (The Parent), which then sends that map image down 
            to the Dashboard Screen. This way, the whole car is in sync."
          </p>
        </div>
      </div>

    </div>
  );
};

export default LiftingStateUp;