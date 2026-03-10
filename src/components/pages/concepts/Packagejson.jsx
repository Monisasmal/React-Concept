import React from "react";

/* --- Example Component --- */
const PackageJsonExample = () => {

  const code = `{
  "name": "react-project",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.2.0"
  }
}`;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border text-left">
      <h3 className="text-xl font-bold mb-4">package.json Example</h3>
      <pre className="bg-slate-100 p-4 rounded-lg text-sm">{code}</pre>
    </div>
  );
};

const PackageJsonGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen">

      {/* TITLE */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-black text-slate-900 mb-4">
          What is <span className="text-indigo-600">package.json?</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">

          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>package.json</strong> is the main configuration file in a
            Node.js project that stores project information, dependencies,
            scripts, and metadata required to run the application.
          </p>

        </div>

      </div>

      {/* WHY + HOW */}

      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-emerald-50 p-8 rounded-3xl border-l-8 border-emerald-500">

          <h3 className="text-2xl font-bold mb-4">🚀 Why is it important?</h3>

          <ul className="text-sm space-y-2">
            <li>✔ Manages project dependencies</li>
            <li>✔ Defines project scripts</li>
            <li>✔ Stores project metadata</li>
            <li>✔ Helps developers run the project easily</li>
          </ul>

        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl border-l-8 border-indigo-500">

          <h3 className="text-2xl font-bold mb-4">🧠 How does it work?</h3>

          <ul className="text-sm space-y-2">
            <li>1. npm init creates package.json</li>
            <li>2. npm install adds dependencies</li>
            <li>3. scripts define commands</li>
            <li>4. tools read configuration from this file</li>
          </ul>

        </div>

      </div>

      {/* DANGER */}

      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12">

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If package.json Missing?
        </h2>

        <p className="text-slate-300 border-l-4 border-rose-500 pl-6">
          Node.js tools will not know what dependencies or scripts are needed
          to run the project.
        </p>

      </div>

      {/* EXAMPLE */}

      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Example
        </h2>

        <PackageJsonExample />

      </div>

      {/* ANALOGY */}

      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <p>
          package.json is like a **project blueprint** that lists all tools and
          instructions required to run the project.
        </p>

      </div>

    </div>
  );
};

export default PackageJsonGuide;