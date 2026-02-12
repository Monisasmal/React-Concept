import React from 'react';

const Caching = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Caching in React</h1>

      {/* 4 Pillars Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2 underline">What is Caching?</h2>
          <p className="text-slate-600 text-sm">
            Caching is the process of storing data temporarily in a high-speed storage layer so that future requests for that data can be served faster.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2 underline">Why use it?</h2>
          <p className="text-slate-600 text-sm">
            It reduces API costs, prevents unnecessary "loading" spinners, and makes the app feel instant by avoiding repeated network requests.
          </p>
        </div>
      </div>

      {/* Real World Example */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-lg font-bold text-blue-900 mb-2 italic">Real World Example:</h2>
        <p className="text-slate-700">
          Think of a <strong>Librarian</strong>. If 10 people ask for the same popular book, instead of walking back to the deep shelves every time, the librarian keeps that book on their <strong>desk (the cache)</strong> to hand it over instantly.
        </p>
      </div>

      {/* Implementation Methods */}
      <h2 className="text-2xl font-bold text-slate-800 mb-4">How we Cache in React</h2>
      
      <div className="space-y-6">
        {/* Method 1 */}
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-2">1. LocalStorage Caching</h3>
          <p className="text-sm text-slate-600 mb-4">Great for simple data that needs to persist even if the user refreshes the page.</p>
          <div className="bg-slate-900 rounded-lg p-4">
            <pre className="text-blue-300 text-xs overflow-x-auto">
{`useEffect(() => {  
  const cached = localStorage.getItem('userData');  
  if (cached) {
    setUser(JSON.parse(cached));
  } else {  
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {  
        setUser(data);  
        localStorage.setItem('userData', JSON.stringify(data));  
      });  
  }  
}, []);`}
            </pre>
          </div>
        </div>

        {/* Method 2 */}
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-2">2. Library Caching (React Query)</h3>
          <p className="text-sm text-slate-600 mb-2">Tools like <strong>React Query</strong> or <strong>SWR</strong> manage the cache for you automatically.</p>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
            <li>First time: API call happens. ✅</li>
            <li>Data is stored in memory. 🔒</li>
            <li>Next time: Data is served instantly from memory. ⚡</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Caching;