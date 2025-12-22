// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 90 }}
        className="fixed top-0 left-0 w-full z-50 
                   bg-white/80 dark:bg-gray-900/80 
                   backdrop-blur-md border-b 
                   border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/profileImg.jpg"
              alt="Kamran Ahmad"
              className="w-10 h-10 rounded-full object-cover 
                         border border-gray-300 dark:border-gray-700"
            />
            <div className="leading-tight">
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                Kamran Ahmad
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Software Developer
              </p>
            </div>
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center 
                         rounded-full border border-gray-300 
                         dark:border-gray-600 
                         hover:bg-gray-100 dark:hover:bg-gray-800 
                         transition"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Hamburger (Desktop + Mobile) */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="w-10 h-10 flex items-center justify-center 
                         rounded-md border border-gray-300 
                         dark:border-gray-600 
                         hover:bg-gray-100 dark:hover:bg-gray-800 
                         transition"
            >
              {open ? (
                <X className="text-gray-900 dark:text-white" />
              ) : (
                <Menu className="text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= OVERLAY MENU ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Side Menu */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-72 
                         bg-white dark:bg-gray-900 
                         border-l border-gray-200 dark:border-gray-700 
                         z-50 p-6"
            >
              <nav className="flex flex-col gap-5 mt-10">
                {MENU_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium 
                               text-gray-800 dark:text-gray-200 
                               hover:text-blue-600 dark:hover:text-blue-400 
                               transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
