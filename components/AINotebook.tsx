import React, { useState } from 'react';
import Editor from "@monaco-editor/react";

const AINotebook = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [aiResponse, setAiResponse] = useState("আমি এখানে আছি আপনাকে সাহায্য করার জন্য। যেকোনো কোড লিখে 'Explain' বাটনে ক্লিক করুন।");

  const explainCode = async () => {
    setAiResponse("AI চিন্তা করছে... 🧠");
    // এখানে আমরা Gemini API কল করবো যাতে AI কোডটি সহজভাবে বুঝিয়ে দেয়।
    // আপাতত একটি স্যাম্পল রেসপন্স দিচ্ছি:
    setTimeout(() => {
      setAiResponse("এই কোডটি একটি সিম্পল লজিক। এটি ডাটা প্রিন্ট করতে ব্যবহার করা হয়। একদম সহজ কথায় বলতে গেলে, এটি একটি মাইকের মতো যা কম্পিউটারকে কথা বলতে সাহায্য করে।");
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-[#0d1117] text-white">
      {/* কোড এডিটর সেকশন */}
      <div className="w-2/3 border-r border-gray-700 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-cyan-400 font-bold">Synapse AI Editor</h3>
          <button 
            onClick={explainCode}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            Explain Simple 🪄
          </button>
        </div>
        <Editor 
          height="80vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || "")}
        />
      </div>

      {/* AI টিচার সাইডবার */}
      <div className="w-1/3 p-6 bg-[#161b22]">
        <h4 className="text-xl font-bold mb-4 text-purple-400">AI Teacher 👨‍🏫</h4>
        <div className="bg-[#0d1117] p-4 rounded-lg border border-gray-700 min-h-[200px] text-gray-300 italic">
          "{aiResponse}"
        </div>
        <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
          <p className="text-xs text-yellow-500 font-bold uppercase">Pro Tip:</p>
          <p className="text-sm">পেইড ভার্সন নিলে AI আপনার পুরো প্রোজেক্ট একবারে ডিবাগ করে দেবে!</p>
        </div>
      </div>
    </div>
  );
};

export default AINotebook;
