import React, { useState } from "react";

const Counter = () => {

  const [count,setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {{ if(count>0)
    setCount(count - 1)
  }}

  const reset = () => {
    setCount(0)
  }

  return (

    <div className="max-w-5xl mx-auto pt-13 pb-20 px-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-16">
        React Interview Question
      </h1>

      {/* QUESTION */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>

        <p>
          Build a counter component using <strong>useState</strong>.
          The counter should support:
        </p>

        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Increment</li>
          <li>Decrement</li>
          <li>Reset</li>
        </ul>
      </div>

      {/* EXPLANATION */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li><b>useState</b> stores the counter value.</li>
          <li>Increment increases the state by 1.</li>
          <li>Decrement decreases the state by 1.</li>
          <li>Reset sets the value back to 0.</li>
          <li>React re-renders the component whenever state changes.</li>
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

 const increment = () => {
   setCount(count + 1)
 }

const decrement = () => {{ if(count>0)
    setCount(count - 1)
  }}

 const reset = () => {
   setCount(0)
 }

 return(
  <div>

   <h2>Count : {count}</h2>

   <button onClick={increment}>Increment</button>
   <button onClick={decrement}>Decrement</button>
   <button onClick={reset}>Reset</button>

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

        <h3 className="text-xl mb-4">
          Count : {count}
        </h3>

        <div className="flex justify-center gap-4 flex-wrap">

          <button
            onClick={increment}
            className="bg-green-600 text-white px-5 py-2 rounded"
          >
            Increment
          </button>

          <button
            onClick={decrement}
            className="bg-red-500 text-white px-5 py-2 rounded"
          >
            Decrement
          </button>

          <button
            onClick={reset}
            className="bg-gray-600 text-white px-5 py-2 rounded"
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
};

export default Counter;