import React, { useState, useEffect } from "react";

const ApiSearchGuide = () => {
  // Logic for the Live Preview Section
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      try {
        // We use the JSONPlaceholder API with a filter for the title
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?title_like=${searchTerm}&_limit=5`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce: Wait 500ms after the user stops typing to call the API
    const delayDebounce = setTimeout(() => {
      fetchResults();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          Build an <strong>API Search Functionality</strong> that updates results in real-time 
          as a user types into an input field.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Controlled Input:</strong> Store the user's keystrokes in a <code>searchTerm</code> state.</li>
          <li><strong>Dynamic URL:</strong> Use template literals to inject the <code>searchTerm</code> into the API endpoint as a query parameter.</li>
          <li><strong>Effect Trigger:</strong> The <code>useEffect</code> hook watches the <code>searchTerm</code> and fires a new fetch every time it changes.</li>
          <li><strong>Debouncing Logic:</strong> Use <code>setTimeout</code> and <code>clearTimeout</code> to prevent the API from being called on every single character, which saves server bandwidth.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState, useEffect } from "react";

function PostSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const searchApi = async () => {
      setLoading(true);
      try {
        // Filtering by title using query parameters
        const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?q=\${query}\`);
        const data = await res.json();
        setResults(data.slice(0, 5));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Debounce to limit API calls
    const timer = setTimeout(searchApi, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search posts..." 
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default PostSearch;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-6 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search titles (try 'sunt' or 'qui')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pr-12 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-sm"
              />
              {loading && (
                <div className="absolute right-4 top-4">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-600"></div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden divide-y divide-slate-100">
              {results.length > 0 ? (
                results.map((post) => (
                  <div key={post.id} className="p-3 hover:bg-indigo-50 transition-colors">
                    <p className="text-sm font-bold text-slate-700 capitalize truncate">{post.title}</p>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-slate-400 text-sm">
                  {searchTerm ? "No results found" : "Start typing to search..."}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Hotel Front Desk</strong>. Instead of the clerk showing you every single 
          guest name in the building, you provide a <strong>Last Name</strong> (the Query). 
          The clerk checks their computer (the API) and returns only the people that match. 
          The "Debounce" is like the clerk waiting for you to finish speaking before they 
          start typing on their keyboard!
        </p>
      </div>

    </div>
  );
};

export default ApiSearchGuide;