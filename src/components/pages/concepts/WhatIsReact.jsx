const WhatIsReact = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">What is React?</h1>

      {/* 1. Definition Section */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-xl font-bold text-blue-900 mb-2">The Definition</h2>
        <p className="text-slate-800 leading-relaxed">
          React is an <strong>Open-Source JavaScript Library</strong> developed by Meta (Facebook). 
          It is specifically designed for building <strong>User Interfaces (UI)</strong> for Single-Page 
          Applications (SPAs) by allowing developers to create reusable UI components.
        </p>
      </div>

      {/* 2. Brief History Section */}
      <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 mb-4">A Brief History</h2>
      <div className="space-y-4 text-slate-700 mb-8">
        <p>
          React was created by <strong>Jordan Walke</strong>, a software engineer at Facebook. 
          He was inspired by XHP, an HTML component framework for PHP.
        </p>
        <ul className="list-disc ml-8 space-y-2">
          <li><strong>2011:</strong> First deployed on Facebook's News Feed.</li>
          <li><strong>2012:</strong> Used on Instagram.</li>
          <li><strong>2013:</strong> Open-sourced to the public at JSConf US.</li>
          <li><strong>2015:</strong> React Native was released, allowing mobile app development.</li>
        </ul>
      </div>

      {/* 3. Why Use React? */}
      <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 mb-4">Why Do We Use It?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
          <h3 className="font-bold text-slate-900">Virtual DOM</h3>
          <p className="text-sm text-slate-600">Optimizes updates by only refreshing changed parts of the UI.</p>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
          <h3 className="font-bold text-slate-900">Reusable Components</h3>
          <p className="text-sm text-slate-600">Write a button once, use it everywhere in your app.</p>
        </div>
      </div>

      {/* 4. Market Condition Section */}
      <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 mb-4">Current Market Status</h2>
      <div className="bg-slate-900 text-slate-100 p-6 rounded-xl mb-8">
        <p className="mb-4">As of 2026, React remains the <strong>#1 most popular frontend library</strong> globally.</p>
        <div className="flex flex-wrap gap-4">
          <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs">High Job Demand</span>
          <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs">Massive Community</span>
          <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs">Rich Ecosystem</span>
        </div>
      </div>
    </div>
  );
};

export default WhatIsReact;