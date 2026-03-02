import React from "react";

const Card = ({ children }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border">
      {children}
    </div>
  );
};

const ReactCompositionGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Composition?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Composition in React is a pattern where components are combined
            together using props and children to build complex UIs
            from smaller reusable components.
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
            <li>✔ Promotes reusable components</li>
            <li>✔ Makes UI flexible</li>
            <li>✔ Avoids inheritance complexity</li>
            <li>✔ Encourages clean architecture</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Create small components</li>
            <li>2. Use children or props</li>
            <li>3. Combine components together</li>
            <li>4. Build complex UI structures</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Using Composition?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Without composition, components become large and difficult
          to maintain. Code becomes repetitive and less reusable.
        </p>

      </div>

      {/* --- 4. LIVE EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Composition Example
        </h2>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-sm font-mono">
{`const Card = ({ children }) => {
  return <div>{children}</div>;
};

// Usage
<Card>
  <h2>Title</h2>
  <p>Description</p>
</Card>`}
        </div>

        <div className="mt-6 text-center text-slate-700">
          <Card>
            <h2 className="font-bold">Title</h2>
            <p>Description inside Card component</p>
          </Card>
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Here, Card component composes other elements using children.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Composition:</strong> Building a house using bricks.
          </p>

          <p>
            <strong>Bricks = Small Components</strong><br />
            <strong>House = Complete UI</strong>
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactCompositionGuide;