import React from "react";

/* --- Small UI pieces --- */
const Button = () => (
  <button className="px-4 py-2 bg-indigo-600 text-white rounded-full font-bold">
    Click Me
  </button>
);

const Input = () => (
  <input
    type="text"
    placeholder="Enter text"
    className="border p-2 rounded-lg"
  />
);

/* --- Combined Component --- */
const Form = () => (
  <div className="flex gap-4">
    <Input />
    <Button />
  </div>
);

const ReactAtomicDesignGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Atomic Design?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Atomic Design is a methodology for building UI components
            by breaking them into smaller reusable pieces called
            Atoms, Molecules, Organisms, Templates, and Pages.
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
            <li>✔ Promotes reusable UI components</li>
            <li>✔ Improves scalability</li>
            <li>✔ Makes design consistent</li>
            <li>✔ Organized folder structure</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Atom → Smallest UI element (Button, Input)</li>
            <li>2. Molecule → Combination of atoms</li>
            <li>3. Organism → Complex UI section</li>
            <li>4. Template & Page → Complete layout</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Structured?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Without structured design, components become messy,
          inconsistent, and hard to scale in large applications.
        </p>

      </div>

      {/* --- 4. LIVE EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Atomic Example
        </h2>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-sm font-mono">
{`// Atom
<Button />

// Molecule
<Form />

// Organism
Header, Footer, Navbar`}
        </div>

        <div className="mt-6 text-center text-slate-700">
          <Form />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Input + Button (Atoms) combine to form a Molecule.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Atoms:</strong> LEGO blocks
          </p>

          <p>
            <strong>Atomic Design:</strong> Building a LEGO house step by step
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactAtomicDesignGuide;