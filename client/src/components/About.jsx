// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center w-full min-h-screen px-6 bg-white dark:bg-gray-900 pt-28 md:pt-0" 
      // 👆 pt-28 ensures proper spacing on mobile, no clipping
    >
      <div className="flex flex-col items-center w-full max-w-6xl gap-12 md:flex-row">

        {/* Profile Image */}
        <div className="flex-shrink-0 w-40 h-40 overflow-hidden border border-gray-300 rounded-full shadow-md md:w-56 md:h-56 dark:border-gray-700">
          <img
            src="/assets/profileImg.jpg"
            alt="Kamran Ahmad"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Kamran Ahmad</span>
          </h1>

          {/* Sub-heading */}
          <p className="mt-3 text-lg font-medium text-gray-600 md:text-xl dark:text-gray-300">
            Software Developer • MERN Stack • Frontend Engineering • Backend Engineering
          </p>

          {/* Description */}
          <p className="max-w-xl mx-auto mt-6 text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-400 md:mx-0">
            Hands-on experience building scalable, maintainable and 
            performance-oriented applications. I specialize in full-stack development using 
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              {" "}React, Node.js, Express, MongoDB
            </span>.  
            I also work with cloud deployments, API integrations, and production-grade UI/UX.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 text-sm font-semibold text-white transition bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 md:text-base"
            >
              View My Work
            </a>

            <a
              href="https://drive.google.com/file/d/1QlqBr-uU0hUgxO0KrrzFShSLluWWI86c/view?usp=sharing"
              className="px-6 py-3 text-sm font-semibold text-gray-800 transition border border-gray-400 rounded-lg dark:border-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 md:text-base"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
