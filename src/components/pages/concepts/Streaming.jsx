import React, { useState } from "react";

/* --- Simulated Streaming Example --- */
const StreamingDemo = () => {
  const [content, setContent] = useState([]);

  const loadContent = () => {
    setContent([]);
    setTimeout(() => setContent((prev) => [...prev, "Header Loaded"]), 500);
    setTimeout(() => setContent((prev) => [...prev, "Main Content Loaded"]), 1500);
    setTimeout(() => setContent((prev) => [...prev, "Comments Loaded"]), 2500);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border text-center">
      <h3 className="text-xl font-bold mb-4">Streaming Example</h3>

      <button
        onClick={loadContent}
        className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold mb-4"
      >
        Start Streaming
      </button>

      <div className="text-left space-y-2 text-slate-700">
        {content.map((item, index) => (
          <p key={index}>✔ {item}</p>
        ))}
      </div>
    </div>
  );
};

const ReactStreamingGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Streaming?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Streaming is a technique where the server sends HTML to the browser
            **in chunks instead of waiting for the entire page to be ready**.
            <br /><br />
            This allows users to **see and interact with parts of the page earlier**
            while the rest of the content continues loading.
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
            <li>✔ Faster perceived loading</li>
            <li>✔ Users see content earlier</li>
            <li>✔ Improves performance</li>
            <li>✔ Reduces waiting time</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Server starts rendering page</li>
            <li>2. Sends first HTML chunk</li>
            <li>3. Browser displays partial content</li>
            <li>4. Remaining content streams later</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Used?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Without streaming, the browser must wait until the entire page
          is rendered on the server before showing anything to the user.
          This increases **loading time and hurts user experience**.
        </p>

      </div>

      {/* --- 4. LIVE EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Streaming Simulation
        </h2>

        <div className="mt-6 text-center text-slate-700">
          <StreamingDemo />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Content appears gradually like server streaming.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Without Streaming:</strong> Waiting for the entire pizza
            before serving anything.
          </p>

          <p>
            <strong>Streaming:</strong> Serving slices of pizza as soon as
            they are ready.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactStreamingGuide;