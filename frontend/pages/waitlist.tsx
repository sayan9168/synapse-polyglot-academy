import React, { useState } from 'react';

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic: Save email to your database (PostgreSQL/NovaQL)
    setJoined(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 text-white font-sans">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-xl text-center">
        <h2 className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
          Incoming Transmission
        </h2>
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          The Future of <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Extreme Learning
          </span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Join 5,000+ developers waiting for the world's first AI-powered multi-language academy. 
          Get early access to the **Extreme Tier** and exclusive discounts.
        </p>

        {!joined ? (
          <form onSubmit={handleJoin} className="flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your professional email" 
              required
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95">
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl">
            <p className="text-green-400 font-bold text-lg">You're on the list! 🚀</p>
            <p className="text-gray-400 text-sm mt-1">We'll notify you the moment we go live.</p>
          </div>
        )}

        <div className="mt-12 flex justify-center gap-8 text-gray-500 text-sm font-mono">
          <div>// 50+ LANGUAGES</div>
          <div>// AI TUTOR V1.0</div>
          <div>// GLOBAL ACCESS</div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
