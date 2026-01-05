// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

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
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6">
      {/* Main Wrapper */}
      <div
        className="
          mx-auto mt-3 max-w-7xl
          flex items-center justify-between
          rounded-2xl
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          px-4 py-3
          shadow-sm
        "
      >
        {/* LEFT */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/profileImg.jpg"
            alt="Kamran Ahmad"
            className="w-9 h-9 rounded-full object-cover border border-gray-300 dark:border-gray-700"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
              Kamran Ahmad
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Software Developer
            </span>
          </div>
        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              w-9 h-9 flex items-center justify-center rounded-full
              border border-gray-300 dark:border-gray-600
              bg-gray-100 dark:bg-gray-800
              text-gray-700 dark:text-gray-200
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition
            "
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="
              w-9 h-9 flex items-center justify-center rounded-full
              border border-gray-300 dark:border-gray-600
              bg-gray-100 dark:bg-gray-800
              text-gray-700 dark:text-gray-200
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition
            "
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          className="
            mx-auto mt-2 max-w-7xl
            rounded-2xl
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            shadow-md
            px-4 py-4
            flex flex-col gap-3
          "
        >
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className="
                text-gray-800 dark:text-gray-200
                font-medium
                px-2 py-2 rounded-lg
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
        }
