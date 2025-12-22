
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="w-full max-w-4xl flex items-center justify-between 
                   bg-white dark:bg-gray-900 
                   border border-gray-200 dark:border-gray-700
                   rounded-full px-5 py-2 shadow-md backdrop-blur"
      >
        {/* ---------- LEFT : BRAND ---------- */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/profileImg.jpg"
            alt="Kamran Ahmad"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-semibold text-gray-900 dark:text-white text-sm">
              Kamran Ahmad
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Software Developer
            </span>
          </div>
        </Link>

        {/* ---------- RIGHT : ACTIONS ---------- */}
        <div className="flex items-center gap-3 relative">
          {/* Theme Toggle (Mic replacement) */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full
                       border border-gray-300 dark:border-gray-600
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-700" />
            )}
          </button>

          {/* Profile Avatar */}
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600"
          >
            <img
              src="/assets/profileImg.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>

          {/* ---------- DROPDOWN MENU ---------- */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 top-12 w-48 
                           bg-white dark:bg-gray-900 
                           border border-gray-200 dark:border-gray-700
                           rounded-xl shadow-lg overflow-hidden"
              >
                {MENU_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm
                               text-gray-800 dark:text-gray-200
                               hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
