import React, { useState } from "react";

const ReactRegistrationFormGuide = () => {
  // Logic for the Live Preview Section
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.password.length < 8) newErrors.password = "Minimum 8 characters";
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setIsSuccess(true);
      console.log("Registered Data:", formData);
      setTimeout(() => setIsSuccess(false), 3000);
    } else {
      setErrors(validationErrors);
      setIsSuccess(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>
        <p className="text-slate-600">
          Build a robust <strong>Registration Form</strong> with validation for Username, 
          Email, and matching Password fields.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>Centralized State:</strong> All inputs update a single <code>formData</code> object.</li>
          <li><strong>Dynamic Handler:</strong> The <code>handleChange</code> function uses <code>[e.target.name]</code> to update any field.</li>
          <li><strong>Validation Logic:</strong> A dedicated <code>validate()</code> function runs on submit to check all rules at once.</li>
          <li><strong>Error Feedback:</strong> Errors are stored in state and mapped to the UI below each specific input.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre>
{`import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 8) newErrors.password = "Min 8 characters";
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} placeholder="Username" />
      {errors.username && <p>{errors.username}</p>}

      <input name="email" onChange={handleChange} placeholder="Email" />
      {errors.email && <p>{errors.email}</p>}

      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      {errors.password && <p>{errors.password}</p>}

      <input name="confirmPassword" type="password" onChange={handleChange} placeholder="Confirm" />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-8 border rounded-2xl bg-gray-50 shadow-inner">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Username</label>
              <input name="username" value={formData.username} onChange={handleChange} className={`w-full p-2 border rounded mt-1 outline-none ${errors.username ? 'border-red-500' : 'focus:ring-1 focus:ring-indigo-400'}`} />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
              <input name="email" value={formData.email} onChange={handleChange} className={`w-full p-2 border rounded mt-1 outline-none ${errors.email ? 'border-red-500' : 'focus:ring-1 focus:ring-indigo-400'}`} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Password</label>
                <input name="password" type="password" value={formData.password} onChange={handleChange} className={`w-full p-2 border rounded mt-1 outline-none ${errors.password ? 'border-red-500' : 'focus:ring-1 focus:ring-indigo-400'}`} />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Confirm</label>
                <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} className={`w-full p-2 border rounded mt-1 outline-none ${errors.confirmPassword ? 'border-red-500' : 'focus:ring-1 focus:ring-indigo-400'}`} />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-md">
              Create Account
            </button>
          </form>
          {isSuccess && (
            <div className="mt-4 p-3 bg-green-500 text-white text-center rounded-lg animate-pulse">
              ✅ Account Created Successfully!
            </div>
          )}
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of <strong>Opening a High-Security Locker</strong>. You don't just set a code once; 
          the system asks you to enter it twice to make sure you didn't make a mistake. 
          If the second code doesn't match the first, the lock won't set!
        </p>
      </div>

    </div>
  );
};

export default ReactRegistrationFormGuide;