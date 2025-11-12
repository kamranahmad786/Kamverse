import { useEffect, useState } from "react";
import { ThemeContext } from './ThemeContextInstance';

export function ThemeProvider({ children }) {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Update DOM and localStorage when theme changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    
    // Debug logging
    console.log('Current theme:', theme);
    console.log('Current classList:', [...root.classList]);
    
    // Remove existing theme classes
    root.classList.remove("light", "dark");
    
    // Add new theme class
    root.classList.add(theme);
    
    // Debug logging
    console.log('Updated classList:', [...root.classList]);
    
    // Update localStorage
    localStorage.setItem("theme", theme);
    
    // Update color-scheme
    document.documentElement.style.colorScheme = theme;
    
    // Optional: Dispatch event for other parts of the app
    window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(current => {
      const newTheme = current === "light" ? "dark" : "light";
      console.log('Toggling theme from:', current, 'to:', newTheme);
      return newTheme;
    });
  };

  // Provide theme value and toggle function
  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark"
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};


