import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-tighter text-blue-500">SYNAPSE AI</h1>
        <div className="space-x-6">
          <a href="#courses" className="hover:text-blue-400">Courses</a>
          <a href="#notebook" className="hover:text-blue-400">Notebook</a>
          <button className="bg-blue-600 px-4 py-2 rounded-lg font-bold">Go Extreme (Paid)</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center mt-20 text-center px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Any Language</span> <br/> 
          with AI Simplicity.
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg mb-8">
          Programming ekhon hobe jol-er moto shohoj. Free-te shikhun sob language, 
          ebong AI notebook-e test korun sathe sathe.
        </p>
        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
          Start Learning Free
        </button>
      </main>
    </div>
  );
}
