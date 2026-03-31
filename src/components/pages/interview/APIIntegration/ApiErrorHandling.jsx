import React, { useState } from "react";

const ApiErrorHandlingGuide = () => {
  // Logic for the Live Preview Section
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (shouldFail = false) => {
    setLoading(true);
    setError(null); // Reset error state before trying
    setData(null);

    try {
      // We use a fake URL to trigger a 404 error if 'shouldFail' is true
      const url = shouldFail 
        ? "https://jsonplaceholder.typicode.com/invalid-endpoint-123" 
        : "https://jsonplaceholder.typicode.com/posts/1";

      const response = await fetch(url);

      // 1. Check for HTTP errors (404, 500, etc.)
      if (!response.ok) {
        throw new Error(`Server Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      // 2. Catch Network errors (No internet, CORS issues) or the error thrown above
      setError(err.message || "Something went wrong!");
    } finally {
      // 3. Always stop the loading spinner
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you implement <strong>Professional Error Handling</strong> for API calls in React 
          using <code>try...catch</code> and <code>finally</code> blocks?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>The try block:</strong> Wrap your <code>fetch</code> code here. This is the "ideal path" where you expect everything to work.</li>
          <li><strong>response.ok:</strong> Fetch only throws an error on network failure. You must manually check <code>response.ok</code> to catch 404 or 500 status codes.</li>
          <li><strong>The catch block:</strong> If anything fails, the code jumps here. You use this to save the error message into a <code>useState</code>.</li>
          <li><strong>The finally block:</strong> This code runs <strong>no matter what</strong>. It is the perfect place to set <code>setLoading(false)</code>.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { useState } from "react";

function UserData() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    
    try {
      const res = await fetch("https://api.example.com/user/1");
      
      // Step 1: Handle HTTP status errors (e.g. 404)
      if (!res.ok) {
        throw new Error("User not found on the server!");
      }
      
      const data = await res.json();
      setUser(data);
    } catch (err) {
      // Step 2: Handle network errors or thrown errors
      setError(err.message);
    } finally {
      // Step 3: Always hide the loader
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={getUser}>Load User</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {user && <p>Name: {user.name}</p>}
    </div>
  );
}

export default UserData;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 text-center">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Live Preview (Error Testing)
        </h2>
        <div className="max-w-md mx-auto p-8 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => fetchData(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition-all"
            >
              Fetch Success
            </button>
            <button 
              onClick={() => fetchData(true)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600 transition-all"
            >
              Trigger 404 Error
            </button>

            <div className="mt-6 p-4 bg-white rounded-xl shadow-sm min-h-[100px] flex items-center justify-center">
              {loading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              ) : error ? (
                <div className="text-red-500 font-bold">
                  <p>❌ Error Occurred:</p>
                  <p className="text-sm font-normal text-slate-600">{error}</p>
                </div>
              ) : data ? (
                <div className="text-green-600 font-bold">
                  <p>✅ Success!</p>
                  <p className="text-sm font-normal text-slate-600">Title: {data.title}</p>
                </div>
              ) : (
                <p className="text-slate-400 italic">Click a button to start</p>
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
          Think of <strong>Ordering Pizza</strong>. 
          The <code>try</code> is placing the order. 
          The <code>catch</code> is when the shop calls you back saying they ran out of cheese (Error). 
          The <code>finally</code> is the act of **hanging up the phone**. Whether you get 
          the pizza or not, you eventually have to hang up the phone so you can move 
          on with your day!
        </p>
      </div>

    </div>
  );
};

export default ApiErrorHandlingGuide;