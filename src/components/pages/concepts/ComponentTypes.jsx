import React from 'react';

const ComponentTypes = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 animate-fade-in">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">React Component Types</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Components are the heart of React. They are independent, reusable pieces of UI that allow you to split your application into smaller, manageable parts.
        </p>
      </div>

      {/* 1. Functional Components Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">Modern</div>
          <h2 className="text-3xl font-bold text-slate-900">1. Functional Components</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-3 underline">The Definition</h3>
              <p className="text-slate-700 leading-relaxed">
                A <strong>Functional Component</strong> is a plain JavaScript function that accepts <code>props</code> as an argument and returns a React element (JSX).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <span className="font-bold text-blue-700 block">Why?</span>
                <span className="text-sm text-slate-600">Easier to read, test, and contains less boilerplate code.</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <span className="font-bold text-blue-700 block">Where?</span>
                <span className="text-sm text-slate-600">Standard for 99% of modern React apps and Hooks.</span>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
              <p className="text-blue-900 text-sm italic">
                <strong>Real World Example:</strong> Like a <strong>Stamp</strong>. The stamp itself is the function; you provide the ink (Props), and it produces a specific mark on the paper (UI).
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-400 text-xs font-mono">Example.jsx</span>
              <span className="text-blue-400 text-xs font-mono">Arrow Function</span>
            </div>
            <pre className="text-sm font-mono leading-relaxed">
              <code className="text-blue-300">
{`const Welcome = (props) => {
  return (
    <div className="card">
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to our React App.</p>
    </div>
  );
};

export default Welcome;`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* 2. Class Components Section */}
      <section className="mb-16 border-t pt-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-slate-400 text-white px-3 py-1 rounded-full text-sm font-bold">Legacy</div>
          <h2 className="text-3xl font-bold text-slate-900">2. Class Components</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="bg-slate-900 rounded-xl p-6 shadow-2xl">
              <pre className="text-sm font-mono leading-relaxed">
                <code className="text-pink-400">
{`class Welcome extends React.Component {
  render() {
    return (
      <div className="card">
        <h1>Hello, {this.props.name}!</h1>
        <p>This is a Class Component.</p>
      </div>
    );
  }
}

export default Welcome;`}
                </code>
              </pre>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-700 mb-3 underline">The Definition</h3>
              <p className="text-slate-700 leading-relaxed">
                A <strong>Class Component</strong> is an ES6 class that extends <code>React.Component</code> and uses a required <code>render()</code> method to return JSX.
              </p>
            </div>

            <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
              <p className="text-amber-900 text-sm italic">
                <strong>Real World Example:</strong> Like an <strong>Espresso Machine</strong>. It is powerful and manages complex internal states, but it's bulkier and harder to set up than a simple cup.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentTypes;