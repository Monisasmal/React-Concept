import React, { useState } from "react";

const ReactFormHandlingGuide = () => {
  // Logic for the Live Preview Section
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>
        <p>
          Build a Form component that handles multiple inputs using a single state object 
          and displays the data upon submission.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Initialize state as an object to hold multiple fields</li>
          <li>Use the <strong>name</strong> attribute to identify which field is changing</li>
          <li>Use spread operator <code>...prev</code> to keep other field values</li>
          <li>Prevent page reload with <code>e.preventDefault()</code></li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre>
{`import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({ username: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="username" 
        onChange={handleChange} 
        placeholder="Name" 
      />
      <input 
        name="email" 
        onChange={handleChange} 
        placeholder="Email" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-6 border rounded-xl bg-gray-50">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
            >
              Submit Form
            </button>
          </form>

          {submittedData && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200">
              <p><strong>Username:</strong> {submittedData.username}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
            </div>
          )}
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white">
        <h2 className="text-xl font-bold mb-4">
          🌍 Real-World Analogy
        </h2>
        <p>
          Think of a physical registration paper. As you write, the ink stays on the paper (State). 
          The office doesn't process your info until you walk to the counter and hand it over (Submit).
        </p>
      </div>

    </div>
  );
};

export default ReactFormHandlingGuide;