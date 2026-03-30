import React, { createContext, useContext, useState } from "react";

const ContextAPIGuide = () => {
  // --- 1. CREATE CONTEXT ---
  // Think of this as the "Radio Station" that will broadcast data.
  const ThemeContext = createContext();

  // --- 2. CREATE PROVIDER COMPONENT ---
  // This component wraps your app and "provides" the data.
  const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  // --- 3. CREATE CONSUMER COMPONENT (FOR LIVE PREVIEW) ---
  const ThemeSwitcher = () => {
    // This is how we "tune in" to the radio station from any child component.
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <div className={`p-8 rounded-2xl transition-all duration-500 shadow-inner ${theme === "light" ? "bg-white text-slate-800" : "bg-slate-800 text-white"}`}>
        <p className="mb-4 font-bold uppercase tracking-widest text-xs opacity-60">Current Theme: {theme}</p>
        <button 
          onClick={toggleTheme}
          className={`px-6 py-3 rounded-full font-bold shadow-lg transition-transform active:scale-95 ${theme === "light" ? "bg-indigo-600 text-white" : "bg-yellow-400 text-slate-900"}`}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you implement <strong>Context API</strong> to manage global state and avoid 
          <strong>"Prop Drilling"</strong> (passing props through many levels)?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>createContext:</strong> Creates a storage object that components can subscribe to.</li>
          <li><strong>Provider:</strong> A component that wraps your app and "broadcasts" the data to all its children, no matter how deep they are.</li>
          <li><strong>useContext Hook:</strong> Used by child components to "consume" or read the data from the closest Provider above them.</li>
          <li><strong>Value Prop:</strong> Anything passed into the <code>value</code> prop of the Provider becomes globally accessible.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { createContext, useContext, useState } from "react";

// 1. Create the Context
const AppContext = createContext();

// 2. Create the Provider
export function AppProvider({ children }) {
  const [user, setUser] = useState({ name: "Manaswini", role: "Developer" });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

// 3. Use the Context in ANY child component
function Profile() {
  const { user } = useContext(AppContext);
  return <h1>Welcome, {user.name}</h1>;
}

// 4. Wrap your App
function App() {
  return (
    <AppProvider>
      <Profile />
    </AppProvider>
  );
}

export default App;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto">
          {/* We wrap the preview in the Provider we created above */}
          <ThemeProvider>
            <ThemeSwitcher />
          </ThemeProvider>
          
          <p className="mt-6 text-xs text-slate-400 italic text-center">
            Notice: The button and the background are separate components 
            communicating through a single Global Context!
          </p>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of <strong>Prop Drilling</strong> like a bucket brigade where 10 people 
          must pass a bucket of water to reach the end. If one person drops it, the chain 
          breaks. <strong>Context API</strong> is like a <strong>Water Tank in the Ceiling</strong>. 
          Any person in any room can simply turn on their own tap to get water directly 
          without bothering anyone else!
        </p>
      </div>

    </div>
  );
};

export default ContextAPIGuide;