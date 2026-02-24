import React, { useState } from "react";

const ReactFragmentGuide = () => {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">React Fragment?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A React Fragment allows grouping multiple elements together
            without adding an extra DOM node to the page.
          </p>
        </div>
      </div>

      {/* --- 2. WHY + HOW --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold mb-4">
            🚀 Why is it important?
          </h3>

          <ul className="text-sm space-y-2">
            <li>✔ Avoid unnecessary &lt;div&gt; wrappers</li>
            <li>✔ Keep DOM clean</li>
            <li>✔ Improve performance slightly</li>
            <li>✔ Maintain semantic HTML</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Use &lt;React.Fragment&gt;</li>
            <li>2. Or shorthand syntax &lt;&gt; &lt;/&gt;</li>
            <li>3. Wrap multiple elements</li>
            <li>4. No extra DOM node created</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Without Fragments, developers often wrap elements in unnecessary
          &lt;div&gt; tags, which can break layouts and clutter the DOM structure.
        </p>

      </div>

      {/* --- 4. LIVE DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Fragment Demo
        </h2>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowExtra(!showExtra)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold"
          >
            Toggle Content
          </button>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-center">
          <>
            <h3 className="font-bold text-lg">Title</h3>
            {showExtra && <p className="mt-2">Extra Paragraph</p>}
          </>
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Notice: No extra wrapper div is added in DOM.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Without Fragment:</strong> Putting every item inside an extra box.
          </p>

          <p>
            <strong>With Fragment:</strong> Grouping items logically without adding extra boxes.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactFragmentGuide;