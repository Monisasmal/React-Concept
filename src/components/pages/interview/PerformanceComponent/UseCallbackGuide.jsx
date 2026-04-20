import React, { useState, useCallback } from "react";

// --- 1. OPTIMIZED CHILD COMPONENT ---
// This child will ONLY re-render if the 'onIncrement' function changes.
const ActionButton = React.memo(({ onIncrement }) => {
  console.log("🎨 Child Component Rendered");
  return (
    <button 
      onClick={onIncrement}
      className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-700 active:scale-95 transition-all shadow-md"
    >
      Increase Child Count
    </button>
  );
});

const UseCallbackGuide = () => {
  // --- COMPONENT STATE ---
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // --- THE LOGIC: FUNCTION MEMOIZATION ---
  // Without useCallback, this function is re-created every time parentCount updates.
  // This would cause ActionButton to re-render unnecessarily.
  const incrementChild = useCallback(() => {
    setChildCount((prev) => prev + 1);
  }, []); // 👈 Dependencies: Only recreate if these change

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you implement <strong>useCallback</strong> to prevent functions from being 
          re-created on every render and stop unnecessary child re-renders?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Function Identity:</strong> In JavaScript, functions are objects. Every time a component re-renders, it creates a <strong>new</strong> function object, even if the code inside is the same.</li>
          <li><strong>useCallback Solution:</strong> It "caches" the function instance. As long as the dependencies don't change, React gives you the <strong>exact same</strong> function object back.</li>
          <li><strong>Pairing with React.memo:</strong> <code>useCallback</code> is almost always used when passing functions to children wrapped in <code>React.memo</code>. If you don't use it, the child will re-render every time because it sees a "new" prop.</li>
          <li><strong>The Array:</strong> Use <code>[]</code> if the function never needs to change, or include state/props that the function's logic depends on.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState, useCallback } from 'react';

// Child component wrapped in Memo
const Child = React.memo(({ handleClick }) => {
  console.log("Child render!");
  return <button onClick={handleClick}>Click Me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 1. Memoize the function
  const memoizedClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // 2. Dependencies

  return (
    <div>
      {/* Changing 'text' re-renders Parent, 
          BUT Child does NOT re-render because memoizedClick is the same instance */}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      <Child handleClick={memoizedClick} />
    </div>
  );
}`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-8 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30">
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-indigo-500">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Parent Counter</p>
              <p className="text-2xl font-black text-indigo-600 mb-4">{parentCount}</p>
              <button 
                onClick={() => setParentCount(prev => prev + 1)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all shadow-md"
              >
                Update Parent
              </button>
            </div>

            <div className="bg-slate-200 h-[2px] w-full"></div>

            <div className="space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Child Counter: {childCount}</p>
              <ActionButton onIncrement={incrementChild} />
            </div>

            <p className="text-[10px] text-slate-400 italic">Open Console: "Child Component Rendered" will NOT appear when you click "Update Parent"!</p>
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Company Badge</strong>. Every time you walk into 
          the office (Render), a regular function is like being issued a 
          <strong>New Badge</strong>. Even though you are the same person, security 
          (the Child component) has to re-check your ID. <strong>useCallback</strong> is 
          like having a <strong>Permanent Badge</strong>. You keep the same one, 
          so security sees it, recognizes it instantly, and lets you pass 
          without a second thought!
        </p>
      </div>

    </div>
  );
};

export default UseCallbackGuide;