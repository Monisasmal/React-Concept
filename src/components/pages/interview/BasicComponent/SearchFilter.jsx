import React, { useState } from "react";

const ReactSearchFilterGuide = () => {
  // Logic for the Live Preview Section
  const items = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "Node.js",
    "JavaScript",
    "TypeScript"
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>
        <p className="text-gray-700 text-lg">
          Create a <strong>Search Filter</strong> component that filters a list of 
          items in real-time based on the user's input.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Store the Search Term:</strong> Use <code>useState("")</code> to track what the user types.</li>
          <li><strong>Filter Logic:</strong> Use the <code>.filter()</code> method on your data array during rendering.</li>
          <li><strong>Case Insensitivity:</strong> Convert both the item and the search term to <code>.toLowerCase()</code> to ensure matches work regardless of typing case.</li>
          <li><strong>Dynamic Rendering:</strong> Map through the <em>filtered</em> array instead of the original array to show results.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm md:text-base leading-relaxed">
{`import React, { useState } from "react";

function SearchFilter() {
  const items = ["Apple", "Banana", "Orange", "Grapes"];
  const [query, setQuery] = useState("");

  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-6 bg-indigo-50/50 rounded-xl border border-indigo-100">
          <input
            type="text"
            placeholder="🔍 Search tech stack..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 mb-6 rounded-lg border-2 border-white shadow-sm focus:border-indigo-400 outline-none transition-all"
          />

          <div className="bg-white rounded-lg shadow-inner overflow-hidden">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div 
                  key={index} 
                  className="px-4 py-3 border-b last:border-none hover:bg-indigo-50 text-slate-700"
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-400 italic">
                No matches found for "{searchTerm}"
              </div>
            )}
          </div>
          
          <div className="mt-4 text-xs text-right text-gray-400 uppercase tracking-widest font-bold">
            Results: {filteredItems.length}
          </div>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Library Index</strong>. When you tell the librarian you are looking for 
          "History," they ignore every book on Science, Math, and Art, showing you <em>only</em> the 
          History shelves. The more specific your search, the fewer shelves they show you!
        </p>
      </div>

    </div>
  );
};

export default ReactSearchFilterGuide;