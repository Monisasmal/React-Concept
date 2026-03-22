import React, { useState } from "react";

const MatrixGeneratorGuide = () => {
  // Logic for the Live Preview Section
  const [matrixSize, setMatrixSize] = useState(0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    // Setting a reasonable limit of 10 for the preview to avoid browser crashes
    setMatrixSize(isNaN(value) ? 0 : Math.min(Math.max(0, value), 10));
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Question
        </h2>
        <p>
          Build a component that generates an <strong>M x N Matrix</strong> (Grid) 
          based on a single number input. If a user enters 3, it should render 
          3 rows and 3 columns.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Capture the dimension (N) from a numeric input and store it in state.</li>
          <li>Use <code>Array(N).fill()</code> to create a map-able structure for rows.</li>
          <li>Nest a second <code>.map()</code> inside the first to generate columns.</li>
          <li>Use <strong>CSS Grid</strong> with <code>gridTemplateColumns: repeat(N, 1fr)</code> for dynamic layout.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre>
{`import React, { useState } from "react";

function MatrixGrid() {
  const [size, setSize] = useState(0);

  return (
    <div>
      <input 
        type="number" 
        value={size} 
        onChange={(e) => setSize(Number(e.target.value))} 
        placeholder="Enter size"
      />

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: \`repeat(\${size}, 50px)\`,
        gap: "5px",
        marginTop: "20px" 
      }}>
        {Array(size).fill(null).map((_, rowIndex) => (
          Array(size).fill(null).map((_, colIndex) => (
            <div 
              key={\`\${rowIndex}-\${colIndex}\`}
              style={{ width: 50, height: 50, background: "teal", color: "white" }}
            >
              {rowIndex},{colIndex}
            </div>
          ))
        ))}
      </div>
    </div>
  );
}

export default MatrixGrid;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-6 border rounded-xl bg-gray-50 flex flex-col items-center">
          <input
            type="number"
            placeholder="Enter Matrix Size (max 10)"
            value={matrixSize || ""}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 mb-8"
          />

          <div 
            className="grid gap-2"
            style={{ 
              gridTemplateColumns: `repeat(${matrixSize}, minmax(0, 1fr))` 
            }}
          >
            {matrixSize > 0 && Array(matrixSize * matrixSize).fill(null).map((_, i) => (
              <div 
                key={i} 
                className="w-12 h-12 flex items-center justify-center bg-indigo-500 text-white rounded font-mono text-xs shadow-sm"
              >
                {Math.floor(i / matrixSize)},{i % matrixSize}
              </div>
            ))}
          </div>
          
          {matrixSize === 0 && (
            <p className="text-gray-400 italic text-sm">Enter a number to see the grid generator in action!</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default MatrixGeneratorGuide;