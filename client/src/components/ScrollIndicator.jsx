// src/components/ScrollIndicator.jsx
"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { useEffect } from "react";

export default function ScrollIndicator({ 
  height = "4px",
  zIndex = 50,
  springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
}) {
  const { scrollYProgress } = useScroll();
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    // Force a reflow to ensure scroll tracking works
    window.scrollTo(window.scrollX, window.scrollY);
  }, []);
  
  // Smooth out the scroll progress with a spring animation
  const scaleX = useSpring(scrollYProgress, springConfig);

  return (
    <>
      {/* Background track */}
      <div 
        className="fixed top-0 left-0 right-0"
        style={{ 
          height, 
          zIndex: zIndex - 1,
          backgroundColor: isDarkMode ? '#1f2937' : '#e5e7eb'
        }}
      />
      
      {/* Animated progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 origin-left bg-gradient-to-r from-purple-500 via-pink-400 to-rose-400 dark:from-purple-600 dark:via-pink-500 dark:to-rose-500"
        style={{ 
          height,
          zIndex,
          scaleX,
          boxShadow: isDarkMode 
            ? '0 0 10px rgba(255,255,255,0.1)'
            : '0 0 10px rgba(0,0,0,0.1)'
        }}
      />
    </>
  );
}
