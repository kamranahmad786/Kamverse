import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      {/* Google Maps–style container */}
      <div className="flex items-center justify-between gap-3 
                      bg-white dark:bg-gray-900 
                      border border-gray-200 dark:border-gray-700 
                      rounded-full px-4 py-2 shadow-md">

        {/* Left: Brand */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/assets/profileImg.jpg"
            alt="Kamran Ahmad"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="hidden sm:inline text-sm font-semibold text-gray-900 dark:text-white">
            Kamran Ahmad
          </span>
        </Link>

        {/* Center: Menu (desktop like search suggestions) */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm text-gray-600 dark:text-gray-300 
                         hover:text-gray-900 dark:hover:text-white 
                         transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full 
                       hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full 
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isOpen ? (
              <X size={20} className="text-gray-800 dark:text-white" />
            ) : (
              <Menu size={20} className="text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mt-3 bg-white dark:bg-gray-900 
                        border border-gray-200 dark:border-gray-700 
                        rounded-2xl shadow-md p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-700 dark:text-gray-300 
                           hover:text-gray-900 dark:hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
