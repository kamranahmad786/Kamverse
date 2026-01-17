import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 90 }}
      className="fixed top-0 left-0 w-full z-50 
                 bg-white/80 dark:bg-gray-900/80 
                 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* ---------- BRAND ---------- */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/profileImg.jpg"
            alt="Kamran Ahmad"
            className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-700"
          />
          <div className="leading-tight">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              Kamran Ahmad
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Software Developer
            </div>
          </div>
        </Link>

        {/* ---------- DESKTOP MENU ---------- */}
        <div className="hidden md:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 
                         hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-600
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition text-lg"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* ---------- MOBILE ACTIONS ---------- */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition text-lg"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={26} className="text-gray-900 dark:text-white" />
            ) : (
              <Menu size={26} className="text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE DROPDOWN ---------- */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 
                     border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-200 text-base font-medium
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
