import React, { useState, useEffect } from "react";

const InfiniteScrollGuide = () => {
  // Logic for the Live Preview Section
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const fetchItems = async () => {
      if (loading) return;
      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
        const data = await res.json();
        setItems((prev) => [...prev, ...data]);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
    
  }, [page,loading]); 

  // Scroll Listener Logic
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]); 

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you fix the <strong>"Missing Dependency"</strong> ESLint warning while implementing 
          an Infinite Scroll list in React?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Function Hoisting:</strong> By moving <code>fetchItems</code> inside the effect, it becomes "private" to that effect. React no longer sees it as an external dependency that might change.</li>
          <li><strong>State-Driven Fetching:</strong> Instead of the scroll listener calling the function, the scroll listener simply updates the <code>page</code> state.</li>
          <li><strong>Reactive Effect:</strong> The first <code>useEffect</code> "reacts" to the <code>page</code> change and triggers the fetch automatically.</li>
          <li><strong>Clean Dependencies:</strong> This structure follows the <strong>Single Responsibility Principle</strong>—one effect handles the scroll, and one effect handles the data.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState, useEffect } from "react";

function CorrectInfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Effect 1: Handles Data Fetching
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await fetch(\`https://api.example.com/data?page=\${page}\`);
      const data = await res.json();
      setItems((prev) => [...prev, ...data]);
      setLoading(false);
    };

    fetchItems();
  }, [page]); // Watches only page changes

  // Effect 2: Handles Scroll Logic
  useEffect(() => {
    const onScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      if (isBottom && !loading) {
        setPage((prev) => prev + 1); // Trigger Effect 1 by changing page
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading]);

  return (
    <div>
      {items.map((item) => <div key={item.id}>{item.title}</div>)}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default CorrectInfiniteScroll;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview (Scroll Box)
        </h2>
        <div className="max-w-md mx-auto h-[350px] overflow-y-auto border-2 border-indigo-100 rounded-2xl bg-white p-4 shadow-inner">
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs font-bold text-indigo-600">ID: {item.id}</p>
                <p className="text-sm text-slate-700 capitalize font-medium">{item.title}</p>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-center py-2">
                <div className="animate-pulse text-indigo-500 font-bold text-xs uppercase">Fetching more...</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Chef (Effect 1)</strong> and a <strong>Waiter (Effect 2)</strong>. 
          The Waiter doesn't cook; he just rings a bell (Updates <code>page</code>) when the table 
          is empty. The Chef is listening for that specific bell. When it rings, the Chef 
          starts his own internal process (the Fetch function) to prepare more food. 
          Because the Chef stays in his kitchen, he doesn't have to worry about the Waiter's 
          movements!
        </p>
      </div>

    </div>
  );
};

export default InfiniteScrollGuide;