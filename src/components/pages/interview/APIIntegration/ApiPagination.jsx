import React, { useState, useEffect } from "react";

const ApiPaginationGuide = () => {
  // Logic for the Live Preview Section
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      try {
        // Using JSONPlaceholder pagination params: _page and _limit
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`
        );
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [page]); 

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you implement <strong>API Pagination</strong> in React to load specific 
          chunks of data using "Previous" and "Next" navigation?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Page State:</strong> Maintain a numeric <code>page</code> state that starts at 1.</li>
          <li><strong>Effect Synchronization:</strong> Place the <code>page</code> state in the <code>useEffect</code> dependency array so a new fetch triggers on every page change.</li>
          <li><strong>Query Parameters:</strong> Append <code>?page=${page}</code> to your API URL to tell the server which subset of data you need.</li>
          <li><strong>Boundary Logic:</strong> Disable the "Previous" button when <code>page === 1</code> to prevent invalid API requests.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState, useEffect } from "react";

function PaginationList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(\`https://api.example.com/posts?_page=\${page}&_limit=5\`);
      const result = await res.json();
      setData(result);
      setLoading(false);
    };
    getData();
  }, [page]); // Re-fetches when page state updates

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>{data.map(item => <li key={item.id}>{item.title}</li>)}</ul>
      )}

      <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
        Previous
      </button>
      <span> Page {page} </span>
      <button onClick={() => setPage(p => p + 1)}>
        Next
      </button>
    </div>
  );
}

export default PaginationList;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-6 border-2 border-indigo-100 rounded-2xl bg-white shadow-sm">
          <div className="min-h-[250px] mb-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-[200px] space-y-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                <p className="text-xs text-slate-400 font-bold uppercase">Fetching Page {page}...</p>
              </div>
            ) : (
              <div className="space-y-3 text-left">
                {items.map((item) => (
                  <div key={item.id} className="p-3 bg-indigo-50 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors">
                    <p className="text-xs font-bold text-indigo-500">POST {item.id}</p>
                    <p className="text-sm font-medium text-slate-700 truncate capitalize">{item.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <button 
              disabled={page === 1 || loading}
              onClick={() => setPage(p => p - 1)}
              className="bg-slate-200 text-slate-600 px-4 py-2 rounded-lg font-bold text-sm disabled:opacity-50 hover:bg-slate-300 transition-all"
            >
              ← Previous
            </button>
            <span className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              Page {page}
            </span>
            <button 
              disabled={loading}
              onClick={() => setPage(p => p + 1)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-indigo-700 shadow-md transition-all"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ApiPaginationGuide;