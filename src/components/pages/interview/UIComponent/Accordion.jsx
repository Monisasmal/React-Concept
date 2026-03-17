import React, { useState } from "react";

const ReactAccordionGuide = () => {

  const data = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building UI."
    },
    {
      id: 2,
      question: "What is useState?",
      answer: "useState is a hook to manage state in functional components."
    },
    {
      id: 3,
      question: "What is JSX?",
      answer: "JSX is a syntax extension that looks like HTML in JavaScript."
    }
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (

    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>

        <p>
          Build an Accordion component where clicking a question
          expands or collapses its answer.
        </p>

      </div>


      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Store active item ID in state</li>
          <li>On click, toggle the selected item</li>
          <li>If clicked again, collapse it</li>
          <li>Conditionally render the answer</li>
        </ul>

      </div>


      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">

        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>

<pre>
{`import React, { useState } from "react";

function Accordion(){

 const data = [
  { id: 1, question: "Q1", answer: "Answer 1" },
  { id: 2, question: "Q2", answer: "Answer 2" }
 ];

 const [activeId, setActiveId] = useState(null);

 const toggleAccordion = (id) => {
  setActiveId(activeId === id ? null : id);
 };

 return(

  <div>

   {data.map(item => (
    <div key={item.id}>

     <h3 onClick={() => toggleAccordion(item.id)}>
      {item.question}
     </h3>

     {activeId === item.id && (
      <p>{item.answer}</p>
     )}

    </div>
   ))}

  </div>

 )

}

export default Accordion`}
</pre>

      </div>


      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>

        <div className="space-y-4">

          {data.map(item => (
            <div key={item.id} className="border rounded-lg">

              <div
                onClick={() => toggleAccordion(item.id)}
                className="p-4 bg-indigo-100 cursor-pointer font-semibold"
              >
                {item.question}
              </div>

              {activeId === item.id && (
                <div className="p-4 bg-white">
                  {item.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>


      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white">

        <h2 className="text-xl font-bold mb-4">
          🌍 Real-World Analogy
        </h2>

        <p>
          Think of an FAQ section. When you click a question,
          it reveals the answer. Clicking again hides it.
        </p>

      </div>

    </div>

  );

};

export default ReactAccordionGuide;