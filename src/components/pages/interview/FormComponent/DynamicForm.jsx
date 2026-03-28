import React, { useState } from "react";

const ReactDynamicFormGuide = () => {
  // Logic for the Live Preview Section
  const formSchema = [
    { name: "firstName", label: "First Name", type: "text", placeholder: "Enter first name" },
    { name: "lastName", label: "Last Name", type: "text", placeholder: "Enter last name" },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter email" },
    { name: "role", label: "Select Role", type: "select", options: ["Admin", "User", "Editor"] },
  ];

  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>
        <p className="text-slate-600">
          Build a <strong>Dynamic Form Generator</strong> that renders fields from a schema 
          and displays the <strong>Submitted Data</strong> directly on the screen.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>Schema Mapping:</strong> Iterate through a JSON array to generate UI elements.</li>
          <li><strong>Dynamic State:</strong> Manage all values in one object using the <code>name</code> attribute.</li>
          <li><strong>Submission Capture:</strong> Save the form state into a <code>submittedData</code> variable on click.</li>
          <li><strong>Visual Output:</strong> Use a <code>pre</code> tag to show the formatted JSON result.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre>
{`import React, { useState } from "react";

function DynamicForm() {
  const schema = [
    { name: "username", label: "User Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "role", label: "Select Role", type: "select", options: ["Admin", "User", "Editor"] }
  ];

  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // This captures and displays the data
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        {schema.map((field) => (
          <div key={field.name} style={{ marginBottom: "15px" }}>
            <label style={{ display: "block" }}>{field.label}</label>
            {field.type === "select" ? (
              <select name={field.name} onChange={handleChange}>
                <option value="">Select...</option>
                {field.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input 
                name={field.name} 
                type={field.type} 
                onChange={handleChange} 
                placeholder={field.label}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit and Show Data</button>
      </form>

      {/* Logic to show data on screen after submission */}
      {submittedData && (
        <div style={{ marginTop: "20px", background: "#1e293b", color: "#4ade80", padding: "15px" }}>
          <h4>Submitted JSON:</h4>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DynamicForm;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-8 border rounded-2xl bg-gray-50 shadow-inner">
          <form onSubmit={handleSubmit} className="space-y-4">
            {formSchema.map((field) => (
              <div key={field.name}>
                <label className="text-xs font-bold text-slate-500 uppercase">{field.label}</label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1 bg-white outline-none focus:ring-1 focus:ring-indigo-400"
                  >
                    <option value="">Choose a role</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1 outline-none focus:ring-1 focus:ring-indigo-400"
                  />
                )}
              </div>
            ))}
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-md">
              Submit & Show Data
            </button>
          </form>

          {submittedData && (
            <div className="mt-6 p-4 bg-slate-900 text-green-400 rounded-lg shadow-xl animate-in fade-in zoom-in duration-300">
              <p className="text-xs text-white mb-2 uppercase tracking-widest font-bold">// Output Data:</p>
              <pre className="text-sm font-mono whitespace-pre-wrap">
                {JSON.stringify(submittedData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white">
        <h2 className="text-xl font-bold mb-4">
          🌍 Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Smart Survey Machine</strong>. It reads a list of questions (Schema). 
          Once the user finishes and hits "Finish" (Submit), the machine immediately prints 
          out a <strong>Receipt</strong> (Submitted Data) listing every answer recorded.
        </p>
      </div>

    </div>
  );
};

export default ReactDynamicFormGuide;