// src/components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden z-[9999]
                    bg-gradient-to-br from-[#0a0a1a] via-[#1b0033] to-[#2a003f]">

      {/* Subtle Moving Aurora Glow */}
      <div className="absolute inset-0 animate-gradient-x bg-[length:300%_300%]
                      bg-gradient-to-r from-fuchsia-700/30 via-purple-700/20 to-blue-700/30 
                      blur-3xl opacity-70"></div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 
                       rounded-full opacity-60 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Loader Content */}
      <div className="relative flex flex-col items-center">

        {/* Neon Profile Glow */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-[5px] border-fuchsia-400 
                        shadow-[0_0_40px_#f0f,0_0_80px_#a0f] relative">
          
          <img
            src="/assets/profileImg.jpg"
            alt="Loading..."
            className="w-full h-full object-cover rounded-full"
          />

          <div className="absolute inset-0 rounded-full 
                          bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500 
                          opacity-25 blur-2xl animate-pulse"></div>
        </div>

        {/* Animated Loading Text */}
        <p className="mt-6 text-2xl font-bold text-transparent bg-clip-text 
                      bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 
                      tracking-wider flex items-center">
          Loading...
          <span className="ml-2 flex space-x-1">
            <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "200ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "400ms" }}>.</span>
          </span>
        </p>

      </div>
    </div>
  );
}
