import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-blue-500">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter italic">
          SYNAPSE<span className="text-blue-500">.AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition">Curriculum</a>
          <a href="#" className="hover:text-white transition">Notebook</a>
          <a href="#" className="hover:text-white transition">Enterprise</a>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-500 hover:text-white transition-all">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 px-4 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase">
          Revolutionizing Tech Education
        </div>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8">
          Code in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">Every Dimension.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The first AI-powered academy that teaches 50+ programming languages with 
          extreme simplicity. Learn for free, scale to expert level.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-10 py-4 bg-blue-600 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all">
            Open Web Notebook
          </button>
          <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
            View Syllabus
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Universal Editor", desc: "Run Python, Rust, C++, and 50+ other languages directly in your browser.", icon: "💻" },
          { title: "AI Easy-Mode", desc: "Complex concepts explained with simple analogies powered by Gemini AI.", icon: "🧠" },
          { title: "Global Payments", desc: "Unlock Extreme Tier from any country with localized currency support.", icon: "🌍" }
        ].map((feat, i) => (
          <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-colors group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{feat.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </section>

    </div>
  );
};

export default LandingPage;
        
