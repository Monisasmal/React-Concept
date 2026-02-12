import React from 'react';

const EncryptionGuide = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Data Security in React</h1>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Encryption Section */}
        <section className="bg-white p-8 rounded-2xl border-2 border-indigo-500 shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">🔐 Encryption</h2>
          <div className="space-y-4">
            <p className="text-sm text-slate-700">
              <strong>What:</strong> The process of turning readable data (Plaintext) into a scrambled, unreadable code (Ciphertext).
            </p>
            <p className="text-sm text-slate-700">
              <strong>Why:</strong> To protect sensitive user data. If a hacker intercepts the data, they cannot understand or use it.
            </p>
            <p className="text-sm text-slate-700">
              <strong>When:</strong> Use it before sending passwords to a server or before saving sensitive info to <b>Local Storage</b>.
            </p>
            <div className="p-3 bg-indigo-50 rounded font-mono text-xs text-indigo-800">
              Example: "MyPassword123" ➡️ "8kL#mZ9!pQ"
            </div>
          </div>
        </section>

        {/* Decryption Section */}
        <section className="bg-white p-8 rounded-2xl border-2 border-green-500 shadow-sm">
          <h2 className="text-2xl font-bold text-green-900 mb-4">🔓 Decryption</h2>
          <div className="space-y-4">
            <p className="text-sm text-slate-700">
              <strong>What:</strong> Converting scrambled data back into its original readable format using a <b>Secret Key</b>.
            </p>
            <p className="text-sm text-slate-700">
              <strong>Why:</strong> So that only authorized users (who have the key) can view the original information.
            </p>
            <p className="text-sm text-slate-700">
              <strong>When:</strong> Use it when your React app retrieves data from a database or storage that was previously encrypted.
            </p>
            <div className="p-3 bg-green-50 rounded font-mono text-xs text-green-800">
              Example: "8kL#mZ9!pQ" ➡️ "MyPassword123"
            </div>
          </div>
        </section>
      </div>

      {/* React Integration Context */}
      <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
        <h2 className="text-xl font-bold mb-4 text-blue-400 underline">How it relates to React</h2>
        <p className="text-sm text-slate-300 mb-4">
          While React is a UI library, we use these concepts to keep our <b>State</b> and <b>Storage</b> secure. 
          Usually, we use libraries like <code>crypto-js</code> to perform these tasks inside our components.
        </p>
        <ul className="list-disc ml-6 space-y-3 text-sm text-slate-300 font-light">
          <li><strong>Local Storage:</strong> Prevents other scripts from reading user tokens.</li>
          <li><strong>Sensitive Props:</strong> Encrypting data passed between components in high-security apps.</li>
          <li><strong>E2E Chat:</strong> Building privacy-focused messaging features.</li>
        </ul>
      </div>

      {/* Real-Life Example Box */}
      <div className="mt-8 p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
        <h3 className="font-bold text-amber-900 italic">Real-Life Example: WhatsApp</h3>
        <p className="text-sm text-slate-700 mt-2 leading-relaxed">
          When you send a message: 
          <br />1. React/React Native app <b>Encrypts</b> your text instantly.
          <br />2. It travels through servers as unreadable "garbage" text.
          <br />3. Your friend's device uses a private <b>Key</b> to <b>Decrypt</b> it back into your original message.
        </p>
      </div>
    </div>
  );
};

export default EncryptionGuide;