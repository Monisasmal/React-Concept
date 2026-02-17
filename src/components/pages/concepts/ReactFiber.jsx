import React, { useState } from 'react';

const ReactFiber = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      
      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          React <span className="text-orange-600">Fiber</span>
        </h1>
        <div className="h-2 w-24 bg-orange-600 mx-auto rounded-full mb-6"></div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-orange-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">What is it?</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>React Fiber</strong> is the re-implementation of React's core algorithm. 
            It is a <strong>Scheduler</strong>. It allows React to break rendering work into 
            small "units of work" (Fibers) that can be paused, resumed, or discarded.
          </p>
        </div>
      </div>

      {/* --- 2. WHY & WHEN (THE STACK VS FIBER) --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-rose-50 p-8 rounded-3xl shadow-lg border-l-8 border-rose-500">
          <h3 className="text-2xl font-bold text-rose-900 mb-4">🐢 Before: The Stack</h3>
          <p className="text-rose-800 text-sm leading-relaxed mb-2">
            Old React was like a <strong>Waterfall</strong>. Once it started rendering, it 
            couldn't stop until it finished.
          </p>
          <ul className="text-xs text-rose-700 space-y-1 list-disc pl-4">
            <li>Blocked the main thread.</li>
            <li>Animations would stutter.</li>
            <li>Typing in inputs felt "laggy."</li>
          </ul>
        </div>

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">⚡ After: Fiber</h3>
          <p className="text-emerald-800 text-sm leading-relaxed mb-2">
            Fiber is like a <strong>Smart To-Do List</strong>. It breaks work into chunks 
            and checks for "High Priority" tasks in between.
          </p>
          <ul className="text-xs text-emerald-700 space-y-1 list-disc pl-4">
            <li><strong>Time Slicing:</strong> Spreads work over multiple frames.</li>
            <li><strong>Prioritization:</strong> User typing happens <em>before</em> list rendering.</li>
          </ul>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic">!</div>
        <h2 className="text-3xl font-black mb-8 text-orange-400 italic underline">🛑 If Not Then? (The Real Danger)</h2>
        
        <div className="grid md:grid-cols-1 gap-6">
          <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-orange-500 pl-6">
            Without Fiber, complex apps would <strong>"Freeze"</strong> constantly. 
            When data arrived from an API, the whole browser would stop responding 
            to clicks or scrolls while React tried to build the new UI. 
            This is called <strong>"Jank."</strong> Fiber eliminates jank by giving 
            control back to the browser every few milliseconds.
          </p>
        </div>
      </div>

      {/* --- 4. VISUAL LOGIC LAB (CONCEPTUAL) --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-slate-100 mb-12">
        <h2 className="text-3xl font-black text-slate-800 mb-4 text-center underline">Fiber Priority Simulation</h2>
        <div className="flex flex-col items-center justify-center p-8 bg-slate-800 rounded-3xl">
          <div className="flex gap-2 mb-8">
            <div className={`w-8 h-8 rounded-full ${isPaused ? 'bg-orange-500 animate-ping' : 'bg-emerald-500 animate-bounce'}`}></div>
            <div className="w-8 h-8 rounded-full bg-slate-600"></div>
            <div className="w-8 h-8 rounded-full bg-slate-600"></div>
          </div>
          
          <div className="space-y-4 w-full max-w-md">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
               <span>Rendering List (Low Priority)</span>
               <span className={isPaused ? "text-orange-400 font-bold" : ""}>{isPaused ? "PAUSED" : "WORKING..."}</span>
            </div>
            <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">
               <div className={`h-full bg-emerald-500 transition-all duration-1000 ${isPaused ? 'w-[40%]' : 'w-full'}`}></div>
            </div>
            
            <button 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black hover:bg-orange-500 transition-all shadow-xl"
            >
              SIMULATE USER TYPING (Hover Me)
            </button>
            <p className="text-[10px] text-center text-slate-500 italic">
              When you "Type", Fiber pauses the green progress bar to handle your interaction first!
            </p>
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-orange-100 p-10 rounded-3xl border-2 border-dashed border-orange-400">
        <h2 className="text-2xl font-black text-orange-900 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: The Restaurant Kitchen
        </h2>
        <div className="text-orange-900 leading-relaxed grid md:grid-cols-2 gap-8">
          <p>
            <strong>Stack (Old):</strong> A chef who finishes a 10-course meal before 
            even acknowledging a new customer walking in. The customer stands at the 
            door waiting (UI Freeze).
          </p>
          <p>
            <strong>Fiber (New):</strong> A chef who prepares the meal in small steps. 
            If a new customer walks in, the chef stops chopping for 2 seconds to 
            say "Hello" and seat them (Prioritization), then goes back to chopping.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ReactFiber;