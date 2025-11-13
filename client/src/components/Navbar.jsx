import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
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

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`p-2 rounded-full transition-colors duration-200 ${
        theme === "dark"
          ? "bg-gray-700 hover:bg-gray-600"
          : "bg-white/20 hover:bg-white/30"
      }`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun size={22} className="text-yellow-300" />
      ) : (
        <Moon size={22} className="text-white" />
      )}
    </motion.button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="fixed top-0 left-0 w-full z-50 shadow-lg"
    >
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
                      dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 
                      backdrop-blur-md bg-opacity-90">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">

          {/* 🔥 Brand with Link + Neon Glow */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex items-center space-x-3 cursor-pointer group"
            >
              {/* Neon Profile Image */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-fuchsia-400 
                              shadow-[0_0_20px_#f0f,0_0_40px_#a0f] overflow-hidden">
                <motion.img
                  src="/assets/profileImg.jpg"
                  alt="Kamran Ahmad"
                  className="w-full h-full object-cover rounded-full"
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r 
                                from-fuchsia-500 via-purple-600 to-blue-500 
                                opacity-40 blur-xl animate-pulse"></div>
              </div>

              {/* Brand Name */}
              <h1 className="text-xl md:text-2xl font-extrabold tracking-wide flex items-center">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
                  Kamran
                </span>
                <span className="ml-1 text-white dark:text-yellow-300 drop-shadow-md">
                  Ahmad
                </span>
              </h1>
            </motion.div>
          </Link>

          {/* 💻 Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {MENU_ITEMS.map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white dark:text-gray-200 text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <ThemeToggleButton />
          </div>

          {/* 📱 Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden flex flex-col items-center bg-gradient-to-b 
                       from-purple-600 to-pink-500 dark:from-gray-900 dark:to-gray-700 
                       py-4 space-y-4"
          >
            {MENU_ITEMS.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white dark:text-gray-200 text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
