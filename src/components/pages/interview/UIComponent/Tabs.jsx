import React, { useState } from "react";

const ReactTabsGuide = () => {
  // Logic for the Live Preview Section
  const tabs = [
    { 
      id: "html", 
      label: "HTML", 
      content: "HTML is the standard markup language for documents designed to be displayed in a web browser." 
    },
    { 
      id: "css", 
      label: "CSS", 
      content: "CSS is a style sheet language used for describing the presentation of a document written in HTML." 
    },
    { 
      id: "js", 
      label: "JavaScript", 
      content: "JavaScript is a programming language that allows you to implement complex features on web pages." 
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>
        <p>
          Build a <strong>Tabs component</strong> where clicking a tab button 
          switches the visible content without reloading the page.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Create an array of objects containing <code>id</code>, <code>label</code>, and <code>content</code>.</li>
          <li>Use <code>useState</code> to store the <code>id</code> of the currently active tab.</li>
          <li>Render tab buttons using <code>.map()</code> and attach an <code>onClick</code> handler to update the state.</li>
          <li>Use <strong>Conditional Rendering</strong> or <code>.find()</code> to display the content that matches the active ID.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre>
{`import React, { useState } from "react";

function Tabs() {
  const data = [
    { id: 1, label: "Tab 1", content: "Content 1" },
    { id: 2, label: "Tab 2", content: "Content 2" }
  ];

  const [activeId, setActiveId] = useState(data[0].id);

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex gap-4">
        {data.map((tab) => (
          <button 
            key={tab.id} 
            onClick={() => setActiveId(tab.id)}
            style={{ fontWeight: activeId === tab.id ? "bold" : "normal" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {data.map((tab) => 
          activeId === tab.id && <div key={tab.id}>{tab.content}</div>
        )}
      </div>
    </div>
  );
}

export default Tabs;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto border rounded-xl overflow-hidden bg-white shadow-sm">
          {/* Tab Buttons */}
          <div className="flex border-b bg-gray-50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 text-sm font-semibold transition-all ${
                  activeTab === tab.id 
                  ? "bg-white text-indigo-600 border-b-2 border-indigo-600" 
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8 min-h-[150px] animate-in fade-in duration-500">
            {tabs.map((tab) => 
              activeTab === tab.id && (
                <div key={tab.id} className="text-slate-600 leading-relaxed">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{tab.label}</h3>
                  {tab.content}
                </div>
              )
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReactTabsGuide;