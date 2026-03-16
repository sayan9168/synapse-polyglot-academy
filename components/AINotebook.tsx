import React, { useState } from 'react';
import Editor from "@monaco-editor/react";

const AINotebook = () => {
  const [code, setCode] = useState("// Type your code here...");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("Output will appear here...");
  const [loading, setLoading] = useState(false);

  const runProject = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: language,
          version: "*",
          files: [{ content: code }],
        }),
      });
      const data = await res.json();
      setOutput(data.run.output || data.run.stderr);
    } catch (err) {
      setOutput("Execution failed. Please check connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-500">Synapse Code Lab</h1>
          
          {/* Language Selector */}
          <select 
            className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none border border-gray-700"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="rust">Rust</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Editor */}
          <div className="border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <Editor 
              height="60vh"
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(v) => setCode(v || "")}
            />
            <button 
              onClick={runProject}
              className={`w-full py-4 font-bold transition ${loading ? 'bg-gray-700' : 'bg-blue-600 hover:bg-blue-500'}`}
              disabled={loading}
            >
              {loading ? "Running..." : "Run Code ⚡"}
            </button>
          </div>

          {/* Console / Output */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 flex flex-col">
            <h2 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-widest">Console Output</h2>
            <pre className="flex-1 font-mono text-green-400 overflow-auto whitespace-pre-wrap">
              {output}
            </pre>
            <div className="mt-4 p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg">
              <p className="text-xs text-blue-400">Upgrade to <b>Extreme Tier</b> for AI Debugging and Cloud Storage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AINotebook;
