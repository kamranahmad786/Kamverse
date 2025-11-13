// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-screen bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 
                       text-white dark:text-gray-200 shadow-lg overflow-x-hidden">
      <div className="w-full px-6 py-8 flex flex-col md:flex-row 
                      items-center justify-between space-y-4 md:space-y-0">
        
        {/* Branding */}
<motion.div
  whileHover={{ scale: 1.05 }}
  className="relative flex items-center space-x-3 cursor-pointer group"
>
  {/* Neon Profile Image (same as Loader) */}
  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-fuchsia-400 
                  shadow-[0_0_20px_#f0f,0_0_40px_#a0f] overflow-hidden animate-glow-pulse">
    <motion.img
      src="/assets/profileImg.jpg"
      alt="Kamran Ahmad"
      className="w-full h-full object-cover rounded-full"
      initial={{ rotate: -10, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
    />
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500 opacity-40 blur-xl"></div>
  </div>

  {/* Brand Name */}
  <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
      Kamran
    </span>{" "}
    <span className="text-white dark:text-yellow-300 drop-shadow-md">
      Ahmad
    </span>
  </h1>
</motion.div>


        {/* Links */}
        <div className="flex space-x-6">
          <motion.a
            href="https://github.com/kamranahmad786"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="hover:text-yellow-300 transition-colors"
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mdkamranahmad/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="hover:text-yellow-300 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            href="mailto:mohammadkamranahmad786@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="hover:text-yellow-300 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="w-full text-center py-4 text-sm bg-black/20 dark:bg-black/40">
        © {new Date().getFullYear()} Kamran Ahmad. All rights reserved.
      </div>
    </footer>
  );
}
