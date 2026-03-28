import React, { useState } from "react";

const ReactFileUploadGuide = () => {
  // Logic for the Live Preview Section
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Create a temporary URL to preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (selectedFile) {
      alert(`Uploading: ${selectedFile.name}`);
      // Actual upload logic (API call) would go here
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          Build a <strong>File Upload</strong> component that allows users to select an 
          image from their device, displays a preview of it, and handles the submission.
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Input Type File:</strong> Use <code>&lt;input type="file" /&gt;</code> to open the system file picker.</li>
          <li><strong>Event Handling:</strong> Capture the file using <code>e.target.files[0]</code> in the <code>onChange</code> handler.</li>
          <li><strong>FileReader API:</strong> Use <code>FileReader()</code> to convert the file into a base64 string for an instant image preview.</li>
          <li><strong>State Management:</strong> Store both the raw file (for the server) and the preview URL (for the UI) in state.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm md:text-base leading-relaxed">
{`import React, { useState } from "react";

function FileUploader() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onFileSelect = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      // Generate preview URL
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selected);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log("Uploading file to server:", file.name);
      alert("File selected: " + file.name);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={onFileSelect} />
      
      {/* Visual Preview */}
      {preview && (
        <img src={preview} alt="Preview" style={{ width: "200px" }} />
      )}

      <button type="submit">Upload Now</button>
    </form>
  );
}

export default FileUploader;`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-md mx-auto p-8 border-2 border-dashed border-indigo-200 rounded-2xl bg-indigo-50/30 text-center">
          <form onSubmit={handleUpload} className="space-y-6">
            
            {/* Hidden actual input for custom styling */}
            <label className="block cursor-pointer">
              <span className="sr-only">Choose profile photo</span>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
            </label>

            {/* Preview Box */}
            <div className="flex justify-center">
              {previewUrl ? (
                <div className="relative group">
                  <img 
                    src={previewUrl} 
                    alt="Uploaded preview" 
                    className="w-40 h-40 object-cover rounded-xl border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                    Change Image
                  </div>
                </div>
              ) : (
                <div className="w-40 h-40 bg-white rounded-xl border-2 border-indigo-100 flex flex-col items-center justify-center text-indigo-300">
                  <span className="text-4xl mb-2">📷</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">No File Selected</span>
                </div>
              )}
            </div>

            {selectedFile && (
              <div className="text-xs text-slate-500 font-mono italic">
                Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
              </div>
            )}

            <button 
              type="submit" 
              disabled={!selectedFile}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              Upload Selected File
            </button>
          </form>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of a <strong>Passport Photo Booth</strong>. You walk in and show the machine 
          your physical photo (File Input). The machine shows your face on a small screen 
          so you can check if you look okay (Preview). Once you are happy with the preview, 
          you hit the "Print" button (Upload) to send the photo to the system!
        </p>
      </div>

    </div>
  );
};

export default ReactFileUploadGuide;