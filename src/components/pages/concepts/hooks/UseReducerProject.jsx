import React, { useReducer } from 'react';

// 1. REDUCER FUNCTION
// The reducer decides HOW state changes.
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };

    case 'DECREMENT':
      return { ...state, count: state.count - 1 };

    case 'RESET':
      return { ...state, count: 0 };

    case 'TOGGLE_THEME':
      return { ...state, isDarkMode: !state.isDarkMode };

    default:
      return state;
  }
};

// 2. INITIAL STATE
const initialState = {
  count: 0,
  isDarkMode: false,
};

// 3. PROJECT: THE "STATE CONTROL CENTER"
const UseReducerProject = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className={`p-8 rounded-3xl transition-all shadow-2xl ${
        state.isDarkMode
          ? 'bg-slate-900 text-white'
          : 'bg-white text-slate-800'
      }`}
    >
      <label className="text-[10px] font-black uppercase tracking-widest opacity-50">
        Project: Reducer Lab
      </label>

      <div className="mt-6 text-center">
        <h3 className="text-4xl font-black mb-2">{state.count}</h3>

        <p className="text-sm opacity-70 mb-6">
          Current Value
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => dispatch({ type: 'DECREMENT' })}
            className="px-6 py-2 bg-rose-500 text-white rounded-full font-bold active:scale-95"
          >
            -
          </button>

          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="px-6 py-2 bg-slate-500 text-white rounded-full font-bold active:scale-95"
          >
            Reset
          </button>

          <button
            onClick={() => dispatch({ type: 'INCREMENT' })}
            className="px-6 py-2 bg-emerald-500 text-white rounded-full font-bold active:scale-95"
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
          className={`w-full py-4 rounded-2xl font-black border-2 transition-all ${
            state.isDarkMode
              ? 'border-yellow-400 text-yellow-400'
              : 'border-slate-900 text-slate-900'
          }`}
        >
          {state.isDarkMode
            ? '☀️ SWITCH TO LIGHT'
            : '🌙 SWITCH TO DARK'}
        </button>
      </div>
    </div>
  );
};

const UseReducerDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. WHAT IS IT? --- */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          use<span className="text-indigo-600">Reducer</span>
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 underline italic">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>useReducer</strong> is a React Hook used for managing
            complex state logic. Instead of directly updating state,
            you <strong>dispatch actions</strong> to a reducer function,
            and the reducer decides how the state should change.
          </p>
        </div>
      </div>

      {/* --- 2. WHY, WHEN, WHERE --- */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">

        <div className="bg-indigo-50 p-8 rounded-3xl shadow-lg border-l-8 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            🚀 Why use it?
          </h3>

          <p className="text-indigo-800 text-sm">
            It helps organize complex state updates in one centralized place,
            making your code easier to scale and maintain.
          </p>
        </div>

        <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border-l-8 border-emerald-500">
          <h3 className="text-xl font-bold text-emerald-900 mb-4">
            📅 When to use?
          </h3>

          <p className="text-emerald-800 text-sm">
            Use it when multiple state values depend on each other
            or when state logic becomes too complicated for
            <code> useState </code>.
          </p>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl shadow-lg border-l-8 border-amber-500">
          <h3 className="text-xl font-bold text-amber-900 mb-4">
            📍 Where to use?
          </h3>

          <p className="text-amber-800 text-sm">
            Inside functional components for dashboards, forms,
            authentication systems, carts, and advanced applications.
          </p>
        </div>
      </div>

      {/* --- 3. THE "IF NOT THEN" (DANGER SECTION) --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12 shadow-2xl relative overflow-hidden">

        <h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
          🛑 If Not Then? (The Real Danger)
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-rose-500 pl-6 mb-4">
          Without <code>useReducer</code>, complex state logic can become
          scattered everywhere using multiple <code>useState</code> calls.
          This creates messy updates, duplicated logic, and hard-to-debug code.
        </p>
      </div>

      {/* --- 4. INTERACTIVE PROJECT LAB --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-slate-800 mb-8 text-center underline">
          Related Project
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-indigo-600">
              The State Control Center
            </h4>

            <p className="text-slate-500 text-sm">
              This project manages multiple states using one reducer function.
              Every update happens through dispatched actions.
            </p>

            <ul className="text-xs text-slate-400 space-y-2">
              <li>✅ State 1: <code>count</code></li>
              <li>✅ State 2: <code>isDarkMode</code></li>
              <li>✅ Actions: Increment, Reset, Toggle</li>
              <li>✅ Centralized State Logic</li>
            </ul>
          </div>

          <UseReducerProject />
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
          🌍 Real-World: Restaurant Kitchen
        </h2>

        <div className="text-slate-300 leading-relaxed grid md:grid-cols-2 gap-8">

          <p>
            <strong>The Action:</strong> A waiter places an order
            like "Add Burger" or "Remove Pizza."
          </p>

          <p>
            <strong>The Reducer:</strong> The kitchen receives the order
            and decides exactly how the food should be prepared and updated.
            Customers don't cook — they only send requests.
          </p>
        </div>
      </div>

      {/* RELATED LINKS */}
      <div className="mt-12 flex justify-center gap-4">
        <a
          href="https://react.dev/reference/react/useReducer"
          className="text-indigo-600 font-bold hover:underline"
        >
          Official Docs ↗
        </a>

        <span className="text-slate-300">|</span>

        <a
          href="#"
          className="text-indigo-600 font-bold hover:underline"
        >
          GitHub Link ↗
        </a>
      </div>
    </div>
  );
};

export default UseReducerDetails;