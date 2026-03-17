import React, { useState } from "react";

const ReactListRenderingGuide = () => {
const[text,setText] = useState("");
  const [items,setItems] = useState([
    "Apple",
    "Banana",
    "Mango",
  ]);
  const addItem = () => {
  setItems([...items, text]);
  setText("")
};

  return (

    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>

        <p>
          Create a React component that renders a list of items dynamically
          using the <strong>map()</strong> method.
        </p>

      </div>


      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Store list data inside state or array</li>
          <li>Use <b>map()</b> to loop through items</li>
          <li>Return JSX for each item</li>
          <li>Provide a unique <b>key</b> for each element</li>
        </ul>

      </div>


      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">

        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>

<pre>
{`import React, { useState } from "react";

function ListRendering(){
const[text,setText] = useState("");
 const [items,setItems] = useState([
  "Apple",
  "Banana",
  "Mango"
 ])
 const addItem = () => {
  setItems([...items, text]);
  setText("")
}; 

 return(

  <>
   <input value ={text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter task"
            className="border p-2 rounded w-half mr-5 mb-5 "/>

      <button onClick={addItem} className="bg-indigo-600 text-white px-4 py-2 rounded">
        Add Item
        </button>


   <ul>

    {items.map((item,index)=>(
      <li key={index}>
        {item}
      </li>
    ))}

   </ul>

  </>

 )

}

export default ListRendering`}
</pre>

      </div>


      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow text-center mb-10">

    <input value ={text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter task"
            className="border p-2 rounded w-half mr-5 mb-5 "/>

      <button onClick={addItem} className="bg-indigo-600 text-white px-4 py-2 rounded">
        Add Item
        </button>

        <h2 className="text-2xl font-bold mb-6">
          Live Preview
        </h2>

        <ul className="space-y-2">

          {items.map((item,index)=>(
            <li
              key={index}
              className="bg-slate-100 p-2 rounded"
            >
              {item}
            </li>
          ))}

        </ul>

      </div>


      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white">

        <h2 className="text-xl font-bold mb-4">
          🌍 Real-World Analogy
        </h2>

        <p>
          Think of a shopping list. You write items once in a list,
          and <b>map()</b> displays each item one by one on the screen.
        </p>

      </div>

    </div>

  );

};

export default ReactListRenderingGuide;