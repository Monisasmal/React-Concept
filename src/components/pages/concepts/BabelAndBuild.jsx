import React from 'react';

const BabelAndBuild = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-orange-600 mb-8 text-center">Babel & Polyfills</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Section 1: Babel */}
        <div className="bg-white p-6 rounded-2xl border-2 border-orange-200 shadow-sm">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">🚀 Babel (The Transpiler)</h2>
          <p className="text-sm text-slate-700 mb-4">
            <strong>What:</strong> Converts modern syntax (ES6+) and JSX into plain old ES5.
          </p>
          <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs">
            <p className="text-orange-400">// Modern ES6 + JSX</p>
            <p className="text-white">const Greet = () =&gt; &lt;h1&gt;Hi&lt;/h1&gt;;</p>
            <hr className="my-2 border-slate-700" />
            <p className="text-green-400">// Babel Output (ES5)</p>
            <p className="text-white">var Greet = function() &#123;</p>
            <p className="text-white">&nbsp;&nbsp;return React.createElement("h1", null, "Hi");</p>
            <p className="text-white">&#125;;</p>
          </div>
        </div>

        {/* Section 2: Polyfills */}
        <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">🩹 Polyfills</h2>
          <p className="text-sm text-slate-700 mb-4">
            <strong>What:</strong> "Plugs the holes" by adding missing functions (like Promise or fetch) to old browsers.
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded border border-blue-100 text-xs">
              <strong>Scenario:</strong> You use <code>[].includes()</code>
            </div>
            <div className="p-3 bg-amber-50 rounded border border-amber-100 text-xs">
              <strong>Problem:</strong> Internet Explorer doesn't know what ".includes" is.
            </div>
            <div className="p-3 bg-green-50 rounded border border-green-100 text-xs text-green-800">
              <strong>Solution:</strong> Polyfill adds the logic for ".includes" to the global Array object.
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="mt-10 p-8 bg-slate-900 rounded-3xl text-white">
        <h2 className="text-xl font-bold mb-6 text-center text-orange-400">The React Build Pipeline</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="p-3 border border-slate-700 rounded w-full text-center">Your React Code (JSX, ES6+)</div>
          <div className="text-orange-500 font-bold">▼</div>
          <div className="p-3 bg-orange-600/20 border border-orange-500 rounded w-full text-center">Babel (Transpiles Syntax)</div>
          <div className="text-blue-500 font-bold">▼</div>
          <div className="p-3 bg-blue-600/20 border border-blue-500 rounded w-full text-center">Polyfills (Adds Missing Features)</div>
          <div className="text-green-500 font-bold">▼</div>
          <div className="p-3 bg-green-600/20 border border-green-500 rounded w-full text-center">Bundler (Vite/Webpack)</div>
          <div className="text-slate-500 font-bold">▼</div>
          <div className="p-4 bg-white text-slate-900 font-bold rounded-xl w-full text-center shadow-lg">Final Browser-Ready Bundle</div>
        </div>
      </div>
    </div>
  );
};

export default BabelAndBuild;