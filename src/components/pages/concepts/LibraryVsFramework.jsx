import React from 'react';

const LibraryVsFramework = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* 1. MAIN HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          Library <span className="text-indigo-600">vs</span> Framework
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-xl text-slate-500 font-medium italic">
          "The secret is in who controls the flow."
        </p>
      </div>

      {/* 2. THE CORE CONCEPTS (VISIBLE TO ALL) */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        
        {/* LIBRARY SECTION */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 transform hover:-translate-y-2 transition-transform">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🧩</span>
            <h2 className="text-3xl font-bold text-slate-800">What is a Library?</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Definition:</strong> A library is a collection of specific tools that you "call" when you need them.
            </p>
            <div className="bg-indigo-50 p-4 rounded-xl">
              <h3 className="font-bold text-indigo-900">🚀 Why use it?</h3>
              <p className="text-sm text-indigo-800">
                You stay in control. You decide the folder structure, the routing, and how things work. 
                React is technically a library because it only handles the "View" layer.
              </p>
            </div>
          </div>
        </div>

        {/* FRAMEWORK SECTION */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-rose-500 transform hover:-translate-y-2 transition-transform">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🏗️</span>
            <h2 className="text-3xl font-bold text-slate-800">What is a Framework?</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Definition:</strong> A framework is a complete "Skeleton" or "Engine" that you build your code inside of.
            </p>
            <div className="bg-rose-50 p-4 rounded-xl">
              <h3 className="font-bold text-rose-900">🏗️ Why use it?</h3>
              <p className="text-sm text-rose-800">
                It provides the rules. It tells you where to put your files and how to name them. 
                It makes big teams work faster because everyone follows the same structure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE "IF NOT THEN" SECTION (CRUCIAL CLARITY) */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black">!</div>
        <h2 className="text-3xl font-black mb-8 text-rose-400">🛑 If Not, Then? (The Real Danger)</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-indigo-500 pl-6">
            <h3 className="text-xl font-bold text-indigo-300 mb-2 underline">The Library Risk</h3>
            <p className="text-slate-400 leading-relaxed">
              If you use a Library but have <strong>no plan</strong>, your code becomes a 
              "Jungle." Because there are no rules, every developer will do things 
              differently, and eventually, the project will be impossible to fix.
            </p>
          </div>
          <div className="border-l-4 border-rose-500 pl-6">
            <h3 className="text-xl font-bold text-rose-300 mb-2 underline">The Framework Risk</h3>
            <p className="text-slate-400 leading-relaxed">
              If you use a Framework for a tiny project, you are <strong>"Over-engineering."</strong> 
              You will spend more time following the framework's rules than actually 
              writing your simple features. It's like using a massive crane to pick up a pencil.
            </p>
          </div>
        </div>
      </div>

      {/* 4. REAL WORLD ANALOGY (VISIBLE UI) */}
      <div className="bg-amber-100 p-8 rounded-3xl border-2 border-dashed border-amber-400 mb-12">
        <h2 className="text-2xl font-black text-amber-900 mb-4 flex items-center gap-2">
          🌍 Real-World Example: Building a House
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-amber-900">
          <p>
            <strong>Library:</strong> You go to a DIY shop. You buy a <em>Hammer, a Saw, and Nails</em>. 
            YOU decide where the walls go and how the house is built.
          </p>
          <p>
            <strong>Framework:</strong> You buy a <em>Pre-built Model Home</em>. The walls, 
            plumbing, and electricity are already there. You just decide what color to 
            paint the rooms and where to put your furniture.
          </p>
        </div>
      </div>

      {/* 5. COMPARISON TABLE */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-indigo-600 p-4 text-center">
          <h3 className="text-white font-bold uppercase tracking-widest">Comparison at a Glance</h3>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-6 font-black text-slate-800 border-b">Feature</th>
              <th className="p-6 font-black text-indigo-700 border-b">Library</th>
              <th className="p-6 font-black text-rose-700 border-b">Framework</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-6 border-b font-bold">Who is in Control?</td>
              <td className="p-6 border-b italic">You (The Developer)</td>
              <td className="p-6 border-b italic">The Framework</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-6 border-b font-bold">The Rule Book</td>
              <td className="p-6 border-b italic">No fixed rules.</td>
              <td className="p-6 border-b italic">Very strict rules.</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-6 font-bold">Learning Curve</td>
              <td className="p-6 italic text-green-600 font-bold">Easy / Fast</td>
              <td className="p-6 italic text-red-600 font-bold">Hard / Slow</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default LibraryVsFramework;