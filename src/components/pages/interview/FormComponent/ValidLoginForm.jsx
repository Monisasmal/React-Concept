import React, { useState } from "react";

const ReactLoginFormGuide = () => {
  // Logic for the Live Preview Section
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
    if (formData.password.length < 6) newErrors.password = "Password must be 6+ chars";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      setTimeout(() => {
        alert("Login Successful!");
        setIsSubmitting(false);
      }, 1000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>
        <p>
          Build a <strong>Login Form</strong> that validates user input (Email and Password) 
          and displays error messages if the criteria are not met.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Create a <strong>validation function</strong> that checks the state values against rules (e.g., email format).</li>
          <li>Store errors in a separate <code>errors</code> state object.</li>
          <li>On submit, run the validation. If errors exist, stop the process and update the error state.</li>
          <li>Conditionally render error text below each input field for <strong>user feedback</strong>.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre>
{`import React, { useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = {};
    if (!form.email.includes("@")) errs.email = "Email is invalid";
    if (form.password.length < 6) errs.password = "Too short";

    setErrors(errs);
    if (Object.keys(errs).length === 0) console.log("Success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" onChange={(e) => setForm({...form, email: e.target.value})} />
      {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
      
      <input name="password" type="password" onChange={(e) => setForm({...form, password: e.target.value})} />
      {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
      
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>
        <div className="max-w-sm mx-auto p-8 border rounded-2xl bg-gray-50 shadow-inner">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
              <input
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full p-3 border rounded-lg outline-none transition ${errors.email ? "border-red-500 bg-red-50" : "focus:ring-2 focus:ring-indigo-400"}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full p-3 border rounded-lg outline-none transition ${errors.password ? "border-red-500 bg-red-50" : "focus:ring-2 focus:ring-indigo-400"}`}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Verifying..." : "Login"}
            </button>
          </form>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white">
        <h2 className="text-xl font-bold mb-4">
          🌍 Real-World Analogy
        </h2>
        <p>
          Think of an <strong>Airport Security Check</strong>. The Officer (Validation) checks 
          your ID (Email) and your Ticket (Password). If the ID doesn't have a photo or the ticket 
          is expired, they won't let you through (Submit) and they tell you exactly what is wrong!
        </p>
      </div>

    </div>
  );
};

export default ReactLoginFormGuide;