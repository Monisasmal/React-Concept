import React from "react";

const Child = ({ user }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h4 className="font-bold">Child Component</h4>
      <p>User: {user}</p>
    </div>
  );
};

const Parent = ({ user }) => {
  return (
    <div className="p-4 bg-emerald-50 rounded-xl">
      <h4 className="font-bold">Parent Component</h4>
      <Child user={user} />
    </div>
  );
};

const GrandParent = () => {
  const user = "Manaswini";
  return (
    <div className="p-4 bg-indigo-50 rounded-xl">
      <h4 className="font-bold">GrandParent Component</h4>
      <Parent user={user} />
    </div>
  );
};

const ReactPropDrillingGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Prop Drilling?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Prop Drilling is a situation where props are passed through
            multiple intermediate components just to reach a deeply nested
            child component.
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
            <li>✔ Helps share data between components</li>
            <li>✔ Keeps data flow predictable</li>
            <li>✔ Simple for small apps</li>
            <li>✔ Uses normal React props</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Data defined in top component</li>
            <li>2. Passed via props to child</li>
            <li>3. Child passes to its child</li>
            <li>4. Continues until final component</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 Problem?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          When many components pass props unnecessarily,
          the code becomes hard to maintain and messy.
          This is called excessive prop drilling.
        </p>

      </div>

      {/* --- 4. EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Example Structure
        </h2>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-sm font-mono">
{`GrandParent
   ↓
Parent
   ↓
Child`}
        </div>

        <div className="mt-6 text-center text-slate-700">
          <GrandParent />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Here, "user" prop is passed from GrandParent → Parent → Child.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Prop Drilling:</strong> Passing a message through 3 people
            just to reach the final person.
          </p>

          <p>
            <strong>Better Solution:</strong> Use Context API to directly
            share data without passing through everyone.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactPropDrillingGuide;