import React, { useState } from "react";

const Counter = () => {

  const [count,setCount] = useState(0)

  return (

    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-16">
        React Interview Question
      </h1>

      {/* QUESTION */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>

        <p className="text-xl font-bold mb-3">
          Build a counter component using <strong>useState</strong> hook.
          The counter should increase when the button is clicked.
        </p>
      </div>

      {/* EXPLANATION */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>React <b>useState</b> is used to store component state.</li>
          <li>The counter value is stored in a state variable.</li>
          <li>Clicking the button updates the state.</li>
          <li>React re-renders the component with updated value.</li>
        </ul>
      </div>

      {/* CODE */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">

        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>

<pre>
{`import React, { useState } from "react";

function Counter(){

 const [count,setCount] = useState(0)

 return(
  <div>

   <h2>Count : {count}</h2>

   <button onClick={()=>setCount(count+1)}>
    Increment
   </button>

  </div>
 )

}

export default Counter`}
</pre>

      </div>

      {/* LIVE PREVIEW */}
      <div className="bg-white p-8 rounded-2xl shadow text-center">

        <h2 className="text-2xl font-bold mb-6">
          Live Preview
        </h2>

        <button
          onClick={()=>setCount(count+1)}
          className="bg-indigo-600 text-white px-6 py-2 rounded"
        >
          Count : {count}
        </button>

      </div>

    </div>
  );
};

export default Counter;