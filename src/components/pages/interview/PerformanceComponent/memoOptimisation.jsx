import React, { useState } from "react";

// --- 1. THE OPTIMIZED CHILD COMPONENT ---
// React.memo wraps the component. 
// It will ONLY re-render if 'name' or 'count' changes.
const ExpensiveChild = React.memo(({ name, count }) => {
  console.log(`🎨 Rendering Child: ${name}`);
  
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-green-500 my-2">
      <p className="text-sm font-bold text-slate-500 uppercase">Child Component</p>
      <p className="text-lg font-bold text-slate-800">{name}: {count}</p>
      <p className="text-[10px] text-slate-400 italic">I only re-render when my own props change!</p>
    </div>
  );
});

const MemoOptimizationGuide = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you use <strong>React.memo</strong> to optimize a component and prevent 
          unnecessary re-renders when the parent's state updates?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Shallow Comparison:</strong> By default, React re-renders all children when a parent updates. <code>React.memo</code> makes the child "smart" by checking if the new props are different from the old ones.</li>
          <li><strong>Performance Gain:</strong> It saves CPU cycles by skipping the "Diffing" process and the DOM update for that specific component.</li>
          <li><strong>When to use:</strong> Best for components that render often with the same props, or components that perform heavy calculations or have many DOM nodes.</li>
          <li><strong>Caution:</strong> Don't wrap everything in Memo! The "comparison" check itself has a small cost, so only use it for "expensive" components.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState } from "react";

// 1. Wrap the component in React.memo
const MyChildComponent = React.memo(({ title }) => {
  console.log("Child Rendered!");
  return <h3>{title}</h3>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  return (
    <div>
      {/* 2. Changing 'count' will NOT re-render the child because 'text' stays the same */}
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* 3. Only changing 'text' will trigger the child to update */}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      
      <MyChildComponent title={text} />
    </div>
  );
}

export default Parent;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Live Preview (Interactive)
        </h2>
        <div className="max-w-md mx-auto p-6 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30">
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-indigo-500">
              <p className="text-sm font-bold text-slate-500 uppercase">Parent State</p>
              <p className="text-2xl font-bold text-indigo-600 mb-4">{parentCount}</p>
              <button 
                onClick={() => setParentCount(prev => prev + 1)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all"
              >
                Update Parent (Child won't react)
              </button>
            </div>

            <div className="bg-slate-200 h-[2px] w-full"></div>

            <ExpensiveChild name="Optimized Child" count={childCount} />

            <button 
              onClick={() => setChildCount(prev => prev + 1)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition-all"
            >
              Update Child Directly
            </button>
          </div>
          <p className="mt-6 text-xs text-slate-400 italic">Open your Console to see that the Child only logs when its own button is clicked!</p>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Photocopier</strong>. If you give it the **exact same piece of paper** (the Props) and ask for 10 copies, a regular component would re-draw the whole 
          image from scratch every time. **React.memo** is like the copier seeing the 
          paper is identical and simply handing you a **pre-printed copy** it already has 
          in its tray, saving time and ink!
        </p>
      </div>

    </div>
  );
};

export default MemoOptimizationGuide;