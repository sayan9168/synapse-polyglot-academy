import React, { useState } from 'react';
import Editor from "@monaco-editor/react";

const AINotebook = () => {
  const [code, setCode] = useState("// Write any language code here...");
  const [aiResponse, setAiResponse] = useState("I'm your AI Teacher. Write some code and click 'Explain' to see the magic!");
  const [loading, setLoading] = useState(false);

  const explainCode = async () => {
    setLoading(true);
    // Logic: This will call your backend Gemini/GPT API
    setTimeout(() => {
      setAiResponse("This code creates a simple function. Think of it like a recipe: the input is your ingredients, and the output is the finished dish. It's that simple!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-[#0d1117] text-white font-sans">
      {/* Code Editor Section */}
      <div className="w-2/3 border-r border-gray-800 p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-gray-400 font-mono text-sm">synapse_editor.py</span>
          </div>
          <button 
            onClick={explainCode}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-md text-sm font-bold transition-all shadow-lg shadow-blue-900/20"
          >
            {loading ? "Analyzing..." : "Explain Simply ✨"}
          </button>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <Editor 
            height="75vh"
            theme="vs-dark"
            defaultLanguage="python"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{ fontSize: 16, minimap: { enabled: false } }}
          />
        </div>
      </div>

      {/* AI Teacher Sidebar */}
      <div className="w-1/3 p-8 bg-[#090c10] flex flex-col">
        <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI Tutor 👨‍🏫
        </h4>
        
        <div className="flex-1 bg-[#161b22] p-6 rounded-2xl border border-gray-800 shadow-inner overflow-y-auto">
          <p className="text-gray-300 leading-relaxed">
            {aiResponse}
          </p>
        </div>

        {/* Extreme Version Teaser */}
        <div className="mt-6 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-blue-500/30">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Extreme Tier</p>
          <p className="text-sm text-gray-400">Unlock deep system architecture & 1-on-1 mentorship.</p>
          <button className="mt-3 w-full py-2 bg-blue-600/10 border border-blue-500/50 text-blue-400 rounded-lg text-xs hover:bg-blue-600 hover:text-white transition">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AINotebook;
