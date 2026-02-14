import React from 'react';

const JsxVsHtml = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* 1. MAIN HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          JSX <span className="text-indigo-600">vs</span> HTML
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-xl text-slate-500 font-medium italic">
          "It looks like HTML, but it's actually JavaScript's superpower."
        </p>
      </div>

      {/* 2. THE CORE CONCEPTS (VISIBLE TO ALL) */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        
        {/* HTML SECTION */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-orange-500 transform hover:-translate-y-2 transition-transform">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">📄</span>
            <h2 className="text-3xl font-bold text-slate-800">What is HTML?</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Definition:</strong> The standard markup language for creating static web pages.
            </p>
            <div className="bg-orange-50 p-4 rounded-xl">
              <h3 className="font-bold text-orange-900">🧱 The Role:</h3>
              <p className="text-sm text-orange-800">
                HTML is just the skeleton. It cannot think, it cannot calculate math, 
                and it cannot change itself without help from separate JavaScript files.
              </p>
            </div>
          </div>
        </div>

        {/* JSX SECTION */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 transform hover:-translate-y-2 transition-transform">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">⚛️</span>
            <h2 className="text-3xl font-bold text-slate-800">What is JSX?</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Definition:</strong> JavaScript XML. It allows us to write HTML-like 
              code directly inside a JavaScript file.
            </p>
            <div className="bg-indigo-50 p-4 rounded-xl">
              <h3 className="font-bold text-indigo-900">⚡ The Role:</h3>
              <p className="text-sm text-indigo-800">
                JSX is smart. It allows you to use variables, loops, and logic 
                directly inside your tags. It is eventually converted into 
                <code>React.createElement()</code>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE "IF NOT THEN" SECTION (CRUCIAL CLARITY) */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black">?</div>
        <h2 className="text-3xl font-black mb-8 text-amber-400">🛑 If Not JSX, Then? (The Hard Way)</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="text-xl font-bold text-amber-300 mb-2 underline">The Vanilla JS Nightmare</h3>
            <p className="text-slate-400 leading-relaxed">
              Without JSX, you would have to use <code>document.createElement()</code> 
              for every single tag. To make a simple list, you would need 20 lines 
              of code instead of just 5 in JSX.
            </p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6">
            <h3 className="text-xl font-bold text-indigo-300 mb-2 underline">The "Sync" Struggle</h3>
            <p className="text-slate-400 leading-relaxed">
              Without JSX, you have to manually find the HTML element (ID) and 
              manually update the text. JSX does this automatically whenever 
              your data changes.
            </p>
          </div>
        </div>
      </div>

      {/* 4. REAL WORLD ANALOGY (VISIBLE UI) */}
      <div className="bg-indigo-100 p-8 rounded-3xl border-2 border-dashed border-indigo-400 mb-12">
        <h2 className="text-2xl font-black text-indigo-900 mb-4 flex items-center gap-2">
          🌍 Real-World Example: The Smart Car
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-indigo-900">
          <p>
            <strong>HTML:</strong> A standard bicycle. It moves when you push it, 
            but it doesn't have a screen, it doesn't have sensors, and it can't 
            tell you your speed unless you add separate tools.
          </p>
          <p>
            <strong>JSX:</strong> A Tesla. The body looks like a car (HTML), 
            but there is a computer (JavaScript) built into every single part 
            of it. The body and the brain are one single unit.
          </p>
        </div>
      </div>

      {/* 5. SYNTAX DIFFERENCE TABLE */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-slate-800 p-4 text-center">
          <h3 className="text-white font-bold uppercase tracking-widest">Syntax: HTML vs JSX</h3>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-6 font-black text-slate-800 border-b">Feature</th>
              <th className="p-6 font-black text-orange-600 border-b">Standard HTML</th>
              <th className="p-6 font-black text-indigo-600 border-b">React JSX</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 font-mono text-sm">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-6 border-b font-bold font-sans">CSS Classes</td>
              <td className="p-6 border-b">class="container"</td>
              <td className="p-6 border-b font-bold">className="container"</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-6 border-b font-bold font-sans">Attributes</td>
              <td className="p-6 border-b">onclick="doSomething()"</td>
              <td className="p-6 border-b font-bold">onClick={'{doSomething}'}</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-6 font-bold font-sans">Closing Tags</td>
              <td className="p-6">{'<img>'} (Optional)</td>
              <td className="p-6 font-bold text-rose-600">{'<img />'} (Mandatory)</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default JsxVsHtml;