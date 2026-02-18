import React from 'react';
import {  Routes, Route, Link, useParams } from 'react-router-dom';

// 1. CHILD COMPONENTS (The Pages)
const Home = () => <div className="p-10 bg-white rounded-2xl shadow-inner text-center"><h2>🏠 Welcome to Home</h2></div>;
const About = () => <div className="p-10 bg-white rounded-2xl shadow-inner text-center"><h2>ℹ️ Learn About Us</h2></div>;
const UserProfile = () => {
  const { id } = useParams(); // Reading from URL
  return <div className="p-10 bg-white rounded-2xl shadow-inner text-center"><h2>👤 User ID: <span className="text-indigo-600">{id}</span></h2></div>;
};

const ReactRouterGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React <span className="text-indigo-600">Router v6</span>
        </h1>
        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">What is it?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            React Router is a library that synchronizes your UI with the <strong>URL</strong>. 
            It allows you to define "Paths" so that when the URL changes, React 
            swaps components instantly <strong>without refreshing the browser</strong>.
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN (Link vs <a>) --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">🚀 Why use it?</h3>
          <p className="text-emerald-800 text-sm leading-relaxed mb-4">
            Standard <code>&lt;a&gt;</code> tags force the browser to request a new 
            HTML file from the server, which is slow. <code>&lt;Link&gt;</code> simply 
            swaps components inside the current page.
          </p>
          <table className="w-full text-xs text-left bg-white/50 rounded-lg">
             <thead><tr className="border-b border-emerald-200">
               <th className="p-2">Feature</th><th className="p-2">Link</th><th className="p-2">a tag</th>
             </tr></thead>
             <tbody>
               <tr><td className="p-2">Speed</td><td className="p-2 text-emerald-600 font-bold">Fast (SPA)</td><td className="p-2">Slow (MPA)</td></tr>
               <tr><td className="p-2">State</td><td className="p-2 text-emerald-600 font-bold">Preserved</td><td className="p-2 text-rose-500">Lost</td></tr>
             </tbody>
          </table>
        </div>

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">📅 Key Components</h3>
          <ul className="text-indigo-800 text-xs space-y-2 font-medium">
            <li><strong>BrowserRouter:</strong> The parent container (The Map Provider).</li>
            <li><strong>Routes:</strong> The container for all possible paths.</li>
            <li><strong>Route:</strong> The specific path (The GPS coordinate).</li>
            <li><strong>useNavigate:</strong> A hook to move pages using code (Logic).</li>
          </ul>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">404</div>
        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          Without React Router, your app is a <strong>"One-Page Mystery."</strong> 
          Users cannot click the "Back" button, they cannot "Bookmark" a specific 
          profile, and they cannot share a link to a specific product. 
          The entire internet depends on <strong>URLs</strong>—without routing, 
          your app is disconnected from the web.
        </p>
      </div>

      {/* --- 4. INTERACTIVE LAB: THE ROUTING ENGINE --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">Navigation Lab</h2>
        
        {/* We use a nested Router here for the demo */}
        
          <nav className="flex justify-center gap-4 mb-8">
            <Link to="/" className="px-6 py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-full transition-all font-bold">Home</Link>
            <Link to="/about" className="px-6 py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-full transition-all font-bold">About</Link>
            <Link to="/user/101" className="px-6 py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-full transition-all font-bold">User 101</Link>
          </nav>

          <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-200">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
          </div>
       
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">
        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: The Multi-Floor Office
        </h2>
        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">
          <p>
            <strong>Standard HTML:</strong> Every time you want to go to another floor, 
            you have to leave the building, walk around the block, and come back 
            in through the front door. (Slow/Reload).
          </p>
          <p>
            <strong>React Router:</strong> You use an <strong>Elevator</strong> inside 
             the building. You never leave the environment; you just move from floor 
             to floor instantly while staying "inside" the app.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ReactRouterGuide;