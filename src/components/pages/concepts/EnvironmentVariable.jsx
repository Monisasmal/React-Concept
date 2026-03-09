import React, { useState } from "react";

/* --- Environment Variable Demo --- */
const EnvironmentVariableDemo = () => {
  const [env, setEnv] = useState("development");

  const toggleEnv = () => {
    setEnv((prev) => (prev === "development" ? "production" : "development"));
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border text-center">
      <h3 className="text-xl font-bold mb-4">Environment Variable Example</h3>

      <p className="text-lg mb-4">
        Current Environment: <strong>{env}</strong>
      </p>

      <button
        onClick={toggleEnv}
        className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold"
      >
        Toggle Environment
      </button>

      <p className="text-sm mt-4 text-slate-600">
        Environment variables help configure apps differently for development
        and production.
      </p>
    </div>
  );
};

const ReactEnvironmentVariableGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">Environment Variable?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Environment Variables are **external configuration values**
            used by applications to store settings like API URLs,
            secret keys, or environment modes.
            <br /><br />
            They allow developers to **change configuration without modifying code**.
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
            <li>✔ Keeps sensitive data secure</li>
            <li>✔ Easy environment configuration</li>
            <li>✔ Supports multiple environments</li>
            <li>✔ Avoids hardcoding secrets</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4">
            🧠 How does it work?
          </h3>

          <ul className="text-xs space-y-2">
            <li>1. Define variables in .env file</li>
            <li>2. Load variables during build</li>
            <li>3. Access them inside the app</li>
            <li>4. Change configuration per environment</li>
          </ul>
        </div>

      </div>

      {/* --- 3. DANGER SECTION --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">
          ⚠
        </div>

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Using Environment Variables?
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6">
          Hardcoding API keys, URLs, or credentials inside source code
          can expose sensitive information and make configuration
          difficult across different environments.
        </p>

      </div>

      {/* --- 4. LIVE EXAMPLE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Environment Variable Simulation
        </h2>

        <div className="mt-6 text-center text-slate-700">
          <EnvironmentVariableDemo />
        </div>

        <p className="text-center mt-6 text-sm text-slate-600">
          Environment variables control application behavior in different environments.
        </p>

      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">
          <p>
            <strong>Environment Variable:</strong> A thermostat setting
            controlling how a system behaves.
          </p>

          <p>
            <strong>Application:</strong> The heating system responding
            based on that configuration.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ReactEnvironmentVariableGuide;