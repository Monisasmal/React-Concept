import React, { useState } from "react";

const ReactModalGuide = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="max-w-5xl mx-auto pt-32 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>

        <p>
          Create a Modal component that opens on button click
          and closes when clicking outside or pressing close button.
        </p>

      </div>


      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Use state to control modal visibility</li>
          <li>Show modal when state is true</li>
          <li>Hide modal when clicking close button</li>
          <li>Use overlay to handle outside click</li>
        </ul>

      </div>


      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">

        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>

<pre>
{`import React, { useState } from "react";

function Modal(){

 const [isOpen, setIsOpen] = useState(false);

 return(

  <div>

   <button onClick={() => setIsOpen(true)}>
    Open Modal
   </button>

   {isOpen && (
    <div className="overlay" onClick={() => setIsOpen(false)}>

     <div className="modal" onClick={(e) => e.stopPropagation()}>

      <h2>Modal Title</h2>
      <p>This is modal content</p>

      <button onClick={() => setIsOpen(false)}>
        Close
      </button>

     </div>

    </div>
   )}

  </div>

 )

}

export default Modal`}
</pre>

      </div>


      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 text-center">

        <h2 className="text-2xl font-bold mb-6">
          Live Preview
        </h2>

        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 bg-indigo-600 text-white rounded"
        >
          Open Modal
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >

            <div
              className="bg-white p-6 rounded-xl w-80 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-2">
                Modal Title
              </h3>

              <p className="mb-4">
                This is modal content
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>

          </div>
        )}

      </div>


      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white">

        <h2 className="text-xl font-bold mb-4">
          🌍 Real-World Analogy
        </h2>

        <p>
          Think of a popup in websites (like login/signup).
          It appears on top of the screen and blocks background
          until you close it.
        </p>

      </div>

    </div>

  );

};

export default ReactModalGuide;