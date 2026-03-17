import React, { useState } from "react";

const ReactConditionalRenderingGuide = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (

    <div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. TITLE + DEFINITION --- */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-black text-slate-900 mb-4">
          Implement <span className="text-indigo-600">Conditional Rendering</span> in React
        </h1>

        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">

          <h2 className="text-2xl font-bold underline italic mb-2">
            Definition
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Conditional Rendering in React allows components to display
            different UI elements based on conditions or state values.
          </p>

        </div>

      </div>



      {/* --- 4. CODING ANSWER --- */}
      <div className="bg-slate-900 p-10 rounded-[3rem] text-green-400 mb-12 shadow-2xl overflow-x-auto">

<pre>
{`import React, { useState } from "react";

function ConditionalRendering(){

 const [isLoggedIn,setIsLoggedIn] = useState(false)

 const toggleLogin = () => {
   setIsLoggedIn(!isLoggedIn)
 }

 return(

  <div>

   {isLoggedIn ? (
      <h2>Welcome User 🎉</h2>
   ) : (
      <h2>Please Login</h2>
   )}

   <button onClick={toggleLogin}>
     {isLoggedIn ? "Logout" : "Login"}
   </button>

  </div>

 )

}

export default ConditionalRendering`}
</pre>

      </div>


      {/* --- 5. LIVE PREVIEW --- */}
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

        <h2 className="text-3xl font-black text-center underline mb-8">
          Live Preview
        </h2>

        <div className="text-center">

          {isLoggedIn ? (
            <h2 className="text-xl mb-4">Welcome User 🎉</h2>
          ) : (
            <h2 className="text-xl mb-4">Please Login</h2>
          )}

          <button
            onClick={toggleLogin}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>

        </div>

      </div>


      {/* --- 6. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-10 rounded-3xl text-white">

        <h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
          🌍 Real-World Analogy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300">

          <p>
            <strong>Condition:</strong> Are you logged in?
          </p>

          <p>
            <strong>Result:</strong> Show Dashboard if logged in, otherwise show Login page.
          </p>

        </div>

      </div>

    </div>

  );

};

export default ReactConditionalRenderingGuide;