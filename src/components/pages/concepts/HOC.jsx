/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

/**
 * 1. WHAT IS AN HOC? (Definition)
 * A Higher-Order Component is a function that takes a component and returns a new component.
 * It acts as a wrapper to inject extra functionality without modifying the original code.
 */
const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    // WHY: To centralize loading logic so you don't repeat it in every file.
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center p-10 space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-blue-600 font-medium animate-pulse">Fetching Data...</p>
        </div>
      );
    }

    // WHEN: When loading is false, render the original component.
    // This uses the 'WrappedComponent' and fixes the "unused-vars" error.
    return <WrappedComponent {...props} />;
  };
};

/**
 * 2. WHERE TO USE? (Base Component)
 * This is a simple UI component that doesn't know anything about loading logic.
 */
const DataDisplay = ({ data }) => (
  <div className="grid gap-4">
    {data.map((item) => (
      <div key={item.id} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800">{item.title}</h3>
        <p className="text-sm text-slate-500">{item.description}</p>
      </div>
    ))}
  </div>
);

// 3. THE ENHANCEMENT
// We wrap our simple component with our HOC "WithLoading" logic.
const DataWithLoader = withLoading(DataDisplay);

const HOC = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  // Simulate an API call when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setItems([
        { id: 1, title: "Authentication HOC", description: "Protects routes by checking user login status." },
        { id: 2, title: "Analytics HOC", description: "Tracks user clicks and page views automatically." },
        { id: 3, title: "Theming HOC", description: "Injects custom styles into wrapped components." },
      ]);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-blue-600 mb-2 text-center">Higher-Order Components (HOC)</h1>
      <p className="text-slate-500 text-center mb-10 italic">"Enhancing components like a pro"</p>

      {/* Concept Guide Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <h2 className="font-bold text-indigo-900 mb-2">🤔 What?</h2>
          <p className="text-sm text-indigo-800 leading-relaxed">
            A function that wraps a component to give it "superpowers" (extra props or logic).
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
          <h2 className="font-bold text-green-900 mb-2">💡 Why?</h2>
          <p className="text-sm text-green-800 leading-relaxed">
            To follow the <b>DRY (Don't Repeat Yourself)</b> principle. Reuse one logic for many components.
          </p>
        </div>
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
          <h2 className="font-bold text-amber-900 mb-2">🏢 Real-World</h2>
          <p className="text-sm text-amber-800 leading-relaxed">
            Like a <b>Security Guard</b> checking IDs at a door before letting people inside a building.
          </p>
        </div>
      </div>

      {/* Live Example Section */}
      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Live Example: HOC Use Cases</h2>
          <button 
            onClick={() => {setLoading(true); setTimeout(() => setLoading(false), 1500)}}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Refetch Data
          </button>
        </div>

        {/* Using our Enhanced Component */}
        <DataWithLoader isLoading={loading} data={items} />
      </div>
    </div>
  );
};

export default HOC;