import React, { useState, useEffect } from "react";

const ApiFetchGuide = () => {
  // Logic for the Live Preview Section
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you <strong>Fetch data</strong> from a REST API and render it as a list in a React component?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>useEffect:</strong> This hook runs the code as soon as the component "mounts" (appears on screen). We keep the dependency array <code>[]</code> empty so it only runs once.</li>
          <li><strong>Async/Await:</strong> We use an <code>async</code> function because fetching data takes time (it's a Promise).</li>
          <li><strong>State Management:</strong> We use <code>useState</code> to hold the data once it arrives. Until then, we show a "Loading" message.</li>
          <li><strong>Mapping:</strong> We use <code>.map()</code> to loop through the array and transform each object into a <code>&lt;li&gt;</code> or <code>&lt;div&gt;</code>.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Define the fetch function
    const getPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        
        // 2. Update state with the data
        setPosts(data.slice(0, 5)); // Taking first 5 only
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []); // 3. Empty array means: Run only once on mount

  if (loading) return <p>Loading data...</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview (Real API Data)
        </h2>
        <div className="max-w-xl mx-auto border rounded-2xl bg-white overflow-hidden shadow-lg">
          <div className="bg-indigo-600 p-4 text-white font-bold">
            Latest Posts
          </div>
          <div className="p-4 min-h-[200px]">
            {loading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            ) : error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="border-b pb-3 last:border-0 hover:bg-slate-50 transition-colors p-2 rounded-lg">
                    <h4 className="font-bold text-indigo-700 capitalize text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{item.body}</p>
                  </div>
                ))}
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
          Think of a <strong>Restaurant Menu</strong>. The menu is stored in the kitchen (the Database). 
          When you walk in (Component Mounts), you ask the waiter (the Fetch API) for the list of food. 
          While the waiter is walking to the kitchen, you wait (Loading State). When the waiter 
          returns with the list, you read through it (Mapping) and decide what to eat!
        </p>
      </div>

    </div>
  );
};

export default ApiFetchGuide;