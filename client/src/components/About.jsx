// src/components/About.jsx
import React from "react";
import profilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* 👤 Profile Image */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img
            src={profilePic}
            alt="Kamran Ahmad"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 📝 Text Content */}
        <div className="text-center md:text-left text-white flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hi, I’m <span className="text-yellow-300">Kamran Ahmad</span> 👋
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            I’m a passionate <span className="font-semibold text-yellow-200">Full-Stack Developer</span> 
            {" "}focused on building modern, scalable web apps using 
            <span className="font-semibold"> React, Node.js, Express, and MongoDB</span>. 
            I also love experimenting with
            <span className="font-semibold text-yellow-200"> AI-powered RAG chatbots</span> 
            {" "}and creating innovative solutions to solve real-world problems.
          </p>

          {/* 🎯 Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
            >
              Explore My Work 
            </a>

            <a
              href="https://drive.google.com/file/d/1zMYGfO-M34o2FVhXPW-gSI527WRtKBSA/view?usp=drive_link"
              download
              className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
            >
              Download Resume 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
