import React from "react";

/* --- ERROR BOUNDARY CLASS --- */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-rose-100 text-rose-700 p-6 rounded-xl text-center font-bold">
          Something went wrong 🚨
        </div>
      );
    }

    return this.props.children;
  }
}

/* --- BUGGY COMPONENT --- */
const BuggyComponent = () => {
  throw new Error("I crashed!");
};

const ErrorBoundaryGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Error Boundary?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            An Error Boundary is a React component that catches JavaScript
            errors in its child component tree and displays a fallback UI
            instead of crashing the entire application.
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
            <li>✔ Prevents whole app crash</li>
            <li>✔ Shows fallback UI</li>
            <li>✔ Improves user experience</li>
            <li>✔ Logs error details</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Wrap child components</li>
            <li>2. Detect rendering errors</li>
            <li>3. Update state with error flag</li>
            <li>4. Render fallback UI</li>
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
          Without an Error Boundary, a single component error can crash
          the entire React application and show a blank screen.
        </p>

      </div>

      {/* --- 4. LIVE DEMO --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Error Boundary Demo
        </h2>

        <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed text-center">
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          The buggy component throws an error, but the app does not crash.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Without Error Boundary:</strong> If one machine breaks,
            the whole factory stops.
          </p>

          <p>
            <strong>With Error Boundary:</strong> Only the broken machine stops,
            factory keeps running.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ErrorBoundaryGuide;