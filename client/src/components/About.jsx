// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center w-full min-h-screen px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-12 md:flex-row">
        
        {/* 👤 Profile Image */}
        <div className="flex-shrink-0 w-48 h-48 overflow-hidden border-4 border-white rounded-full shadow-2xl md:w-64 md:h-64">
          <img
            src="/assets/profileImg.jpg"
            alt="Kamran Ahmad"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 📝 Text Content */}
        <div className="flex-1 text-center text-white md:text-left">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Hi, I’m <span className="text-yellow-300">Kamran Ahmad</span> 👋
          </h1>

          <p className="mb-6 text-lg leading-relaxed md:text-xl">
            I’m a passionate <span className="font-semibold text-yellow-200">Full-Stack Developer </span> 
            focused on building modern, scalable web apps using 
            <span className="font-semibold"> React, Node.js, Express, and MongoDB</span>.
            I also love experimenting with 
            <span className="font-semibold text-yellow-200"> AI-powered RAG chatbots </span>
            and creating innovative solutions to solve real-world problems.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="px-6 py-3 font-semibold text-purple-900 transition-transform transform bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-300 hover:scale-105"
            >
              Explore My Work 
            </a>

            <a
              href="https://drive.google.com/file/d/1zMYGfO-M34o2FVhXPW-gSI527WRtKBSA/view"
              className="px-6 py-3 font-semibold text-purple-900 transition-transform transform bg-white rounded-lg shadow-lg hover:bg-gray-200 hover:scale-105"
            >
              Download Resume 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
