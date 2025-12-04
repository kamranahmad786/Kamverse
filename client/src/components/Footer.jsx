// src/components/Footer.jsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/profileImg.jpg"
            alt="Kamran Ahmad"
            className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-gray-700 shadow-sm"
          />
          <div className="leading-tight">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Kamran Ahmad
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Software Developer
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          
          <a
            href="https://github.com/kamranahmad786"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/mdkamranahmad/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:mohammadkamranahmad786@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center py-4 text-sm bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Kamran Ahmad — All rights reserved.
      </div>
    </footer>
  );
}
