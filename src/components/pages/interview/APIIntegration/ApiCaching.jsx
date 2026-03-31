import React, { useState, useEffect, useRef } from "react";

const ApiCachingGuide = () => {
  // Logic for the Live Preview Section
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1);
  
  const cache = useRef({});

  const fetchData = async (id) => {
    // 2. Check if the data is already in our "warehouse" (the cache)
    if (cache.current[id]) {
      console.log("Serving from Cache:", id);
      setData(cache.current[id]);
      return;
    }

    setLoading(true);
    try {
      console.log("Fetching from API:", id);
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const result = await res.json();
      
      // 3. Store the result in the cache for next time
      cache.current[id] = result;
      setData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you implement <strong>API Caching</strong> in React to prevent redundant 
          network requests for data that hasn't changed?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Persistent Storage:</strong> We use <code>useRef</code> to hold an object that acts as our cache. Unlike <code>useState</code>, updating a ref doesn't cause a re-render, making it perfect for silent storage.</li>
          <li><strong>The "Look-Up" Step:</strong> Before every <code>fetch</code>, we check if the <code>url</code> or <code>id</code> already exists as a key in our cache object.</li>
          <li><strong>Instant UI:</strong> If the data is cached, we update the state immediately, making the app feel incredibly fast to the user.</li>
          <li><strong>Memory Management:</strong> In a real-world MERN app, this prevents unnecessary "hits" to your backend database.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState, useEffect, useRef } from "react";

function UserProfile({ id }) {
  const [user, setUser] = useState(null);
  const cache = useRef({}); // { '1': {name: 'Manaswini'}, '2': {...} }

  useEffect(() => {
    const fetchUser = async () => {
      // 1. Check Cache First
      if (cache.current[id]) {
        setUser(cache.current[id]);
        return;
      }

      // 2. Fetch if not in Cache
      const res = await fetch(\`https://api.example.com/user/\${id}\`);
      const data = await res.json();
      
      // 3. Save to Cache
      cache.current[id] = data;
      setUser(data);
    };

    fetchUser();
  }, [id]);

  return <div>{user?.name}</div>;
}

export default UserProfile;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Live Preview (Toggle Users)
        </h2>
        <div className="max-w-md mx-auto p-6 border-2 border-dashed border-indigo-100 rounded-2xl bg-indigo-50/30">
          <div className="flex justify-center gap-4 mb-8">
            {[1, 2, 3].map(num => (
              <button 
                key={num}
                onClick={() => setUserId(num)}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${userId === num ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 shadow-sm"}`}
              >
                User {num}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm min-h-[120px] flex flex-col items-center justify-center">
            {loading ? (
              <div className="flex flex-col items-center gap-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
                <span className="text-[10px] font-bold text-slate-400">FETCHING FROM NETWORK...</span>
              </div>
            ) : (
              <div className="text-center animate-in fade-in duration-300">
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Data Loaded</span>
                <p className="text-lg font-bold text-slate-800">{data?.name}</p>
                <p className="text-xs text-slate-400 italic">Notice: Switching back to a previous user is instant!</p>
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
          Think of a <strong>Student and a Notebook</strong>. 
          The first time the teacher says a fact (The API call), the student has to listen carefully 
          (Wait for the fetch) and then writes it in their <strong>Notebook (The Cache)</strong>. 
          The next time the teacher asks the same question, the student doesn't need to ask the 
          teacher to repeat it; they just look at their own notes instantly!
        </p>
      </div>

    </div>
  );
};

export default ApiCachingGuide;