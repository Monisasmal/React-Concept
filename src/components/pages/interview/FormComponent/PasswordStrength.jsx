import React, { useState } from "react";

const PasswordStrengthGuide = () => {
  // Logic for the Live Preview Section
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({
    score: 0,
    label: "Very Weak",
    color: "bg-gray-300",
  });

  const checkStrength = (pass) => {
    let score = 0;
    if (pass.length > 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    const labels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
    const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];

    setStrength({
      score: score,
      label: labels[score] || "Very Weak",
      color: colors[score] || "bg-red-500",
    });
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    checkStrength(val);
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          Build a <strong>Password Strength Checker</strong> that evaluates a password in real-time 
          based on length, numbers, uppercase letters, and special characters.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Regex Testing:</strong> Use Regular Expressions to check for specific patterns (Numbers, Caps, Symbols).</li>
          <li><strong>Scoring System:</strong> Increment a counter for every security requirement the password meets.</li>
          <li><strong>Visual Feedback:</strong> Use the score to dynamically change the width and color of a progress bar.</li>
          <li><strong>Real-time Update:</strong> Trigger the calculation inside the <code>onChange</code> handler so the UI reacts instantly.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm md:text-base leading-relaxed">
{`import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);

  const evaluatePassword = (value) => {
    let currentScore = 0;
    if (value.length > 8) currentScore++;
    if (/[A-Z]/.test(value)) currentScore++;
    if (/[0-9]/.test(value)) currentScore++;
    if (/[^A-Za-z0-9]/.test(value)) currentScore++;
    setScore(currentScore);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    evaluatePassword(e.target.value);
  };

  const getColor = () => {
    const colors = ["red", "orange", "yellow", "blue", "green"];
    return colors[score] || "red";
  };

  return (
    <div style={{ padding: "20px" }}>
      <input 
        type="password" 
        value={password} 
        onChange={handleChange} 
        placeholder="Enter password"
      />
      
      {/* Strength Bar */}
      <div style={{ 
        height: "10px", 
        width: \`\${(score + 1) * 20}%\`, 
        background: getColor(),
        marginTop: "10px",
        transition: "0.3s"
      }} />
      
      <p>Strength: {score === 4 ? "Very Strong" : "Keep typing..."}</p>
    </div>
  );
}

export default PasswordChecker;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-8 border rounded-2xl bg-gray-50 shadow-inner">
          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Secure Password</label>
            <input
              type="password"
              placeholder="Type your password..."
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm"
            />
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase">
                <span className="text-slate-400">Security Status</span>
                <span style={{ color: strength.color.replace('bg-', '') }}>{strength.label}</span>
              </div>
              {/* Dynamic Strength Bar */}
              <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${strength.color} transition-all duration-500 ease-out`}
                  style={{ width: password ? `${(strength.score + 1) * 20}%` : '0%' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <Requirement met={password.length > 8} text="8+ Characters" />
              <Requirement met={/[A-Z]/.test(password)} text="Uppercase" />
              <Requirement met={/[0-9]/.test(password)} text="Numbers" />
              <Requirement met={/[^A-Za-z0-9]/.test(password)} text="Symbols" />
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
          Think of a <strong>Physical Door Lock</strong>. A short password is a thin wooden door. 
          Adding numbers is like adding a deadbolt. Adding capital letters and symbols is like 
          switching to a steel reinforced door with a fingerprint scanner. The more "requirements" 
          you add, the harder it is for a thief (hacker) to break in!
        </p>
      </div>

    </div>
  );
};

// Helper component for the Live Preview
const Requirement = ({ met, text }) => (
  <div className={`text-[10px] flex items-center gap-1 font-bold ${met ? "text-green-600" : "text-slate-300"}`}>
    <span>{met ? "✔" : "○"}</span> {text}
  </div>
);

export default PasswordStrengthGuide;