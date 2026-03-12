import React from "react";

/* --- Example Component --- */
const ViteConfigExample = () => {

const code = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})`

return (
<div className="p-6 bg-white rounded-2xl shadow-lg border text-left">
<h3 className="text-xl font-bold mb-4">vite.config.js Example</h3>
<pre className="bg-slate-100 p-4 rounded-lg text-sm">{code}</pre>
</div>
)
}

const ViteConfigGuide = () => {

return (
<div className="max-w-6xl mx-auto p-6 pt-32 pb-20 bg-slate-50 min-h-screen">

{/* TITLE */}

<div className="text-center mb-16">

<h1 className="text-5xl font-black text-slate-900 mb-4">
What is <span className="text-indigo-600">vite.config.js?</span>
</h1>

<div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-6"></div>

<div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500 text-left">

<h2 className="text-2xl font-bold underline italic mb-2">
Definition
</h2>

<p className="text-lg text-slate-700 leading-relaxed">
<strong>vite.config.js</strong> is the configuration file used by the
Vite build tool to customize the development server,
plugins, and production build settings.
</p>

</div>

</div>

{/* WHY + HOW */}

<div className="grid md:grid-cols-2 gap-8 mb-12">

<div className="bg-emerald-50 p-8 rounded-3xl border-l-8 border-emerald-500">

<h3 className="text-2xl font-bold mb-4">
🚀 Why is it important?
</h3>

<ul className="text-sm space-y-2">
<li>✔ Configure Vite plugins</li>
<li>✔ Customize development server</li>
<li>✔ Optimize build settings</li>
<li>✔ Setup path aliases</li>
</ul>

</div>

<div className="bg-indigo-50 p-8 rounded-3xl border-l-8 border-indigo-500">

<h3 className="text-2xl font-bold mb-4">
🧠 How does it work?
</h3>

<ul className="text-sm space-y-2">
<li>1. Vite starts development server</li>
<li>2. It reads vite.config.js</li>
<li>3. Plugins and settings are applied</li>
<li>4. Build process runs with those rules</li>
</ul>

</div>

</div>

{/* DANGER */}

<div className="bg-slate-900 p-10 rounded-[3rem] text-white mb-12">

<h2 className="text-3xl font-black mb-8 text-rose-400 italic underline">
🛑 If vite.config.js Missing?
</h2>

<p className="text-slate-300 border-l-4 border-rose-500 pl-6">
You cannot customize plugins, aliases, or advanced build
features of the Vite project.
</p>

</div>

{/* EXAMPLE */}

<div className="bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-indigo-100 mb-12">

<h2 className="text-3xl font-black text-center underline mb-8">
Example
</h2>

<ViteConfigExample/>

</div>

{/* ANALOGY */}

<div className="bg-indigo-900 p-10 rounded-3xl text-white">

<h2 className="text-2xl font-black text-indigo-300 mb-4 italic">
🌍 Real-World Analogy
</h2>

<p>
vite.config.js is like the **control panel of the build tool**
where developers configure how the project should run.
</p>

</div>

</div>
)
}

export default ViteConfigGuide