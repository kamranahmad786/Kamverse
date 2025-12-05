// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center w-full min-h-screen px-6 
                 bg-white dark:bg-gray-900 
                 pt-28 md:pt-0" 
      // 👆 pt-28 ensures proper spacing on mobile, no clipping
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* Profile Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden 
                        border border-gray-300 dark:border-gray-700 shadow-md flex-shrink-0">
          <img
            src="/assets/profileImg.jpg"
            alt="Kamran Ahmad"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Kamran Ahmad</span>
          </h1>

          {/* Sub-heading */}
          <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
            Software Developer • MERN Stack • Frontend Engineering • Backend Engineering
          </p>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            Hands-on experience building scalable, maintainable and 
            performance-oriented applications. I specialize in full-stack development using 
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              {" "}React, Node.js, Express, MongoDB
            </span>.  
            I also work with cloud deployments, API integrations, and production-grade UI/UX.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 
                         transition font-semibold text-sm md:text-base shadow-sm"
            >
              View My Work
            </a>

            <a
              href="https://drive.google.com/file/d/1zMYGfO-M34o2FVhXPW-gSI527WRtKBSA/view"
              className="px-6 py-3 rounded-lg border border-gray-400 dark:border-gray-600 
                         text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 
                         transition font-semibold text-sm md:text-base"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
