import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

const MENU_ITEMS = [
  "Home",
  "Projects",
  "Skills",
  "Experience",
  "Education",
  "Certificates",
  "Contact",
];

export default function Navbar({ onMenuStateChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    onMenuStateChange?.(isOpen);
  }, [isOpen, onMenuStateChange]);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 90 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-gray-300 dark:border-gray-700 
                 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg"
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-3">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/profileImg.jpg"
            alt="Kamran Ahmad"
            className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-700 shadow-sm"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Kamran Ahmad
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Software Developer
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 
                         font-medium transition-colors"
            >
              {item}
            </Link>
          ))}

          {/* 🔆 / 🌑 Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition text-xl"
          >
            {theme === "dark" ? "🔆" : "🌑"}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">

          {/* 🔆 / 🌑 Mobile Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition text-xl"
          >
            {theme === "dark" ? "🔆" : "🌑"}
          </motion.button>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={26} className="text-gray-900 dark:text-white" />
            ) : (
              <Menu size={26} className="text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-200 text-lg font-medium 
                           hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
