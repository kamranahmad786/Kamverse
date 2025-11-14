import { motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Reduced damping for smoother animation
  const x = useSpring(0, { damping: 20, stiffness: 80, mass: 1 });
  const y = useSpring(0, { damping: 20, stiffness: 80, mass: 1 });

  // Detect mobile and touch devices
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 'ontouchstart' in window;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle pointer/touch movement
  useEffect(() => {
    if (isMobile) return; // Disable on mobile for better performance

    let animationFrameId = null;

    const handlePointerMove = (e) => {
      // Use requestAnimationFrame for smooth performance
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      
      animationFrameId = requestAnimationFrame(() => {
        const element = ref.current;
        if (!element) return;

        // Calculate position with offset
        const offsetX = e.clientX - element.offsetWidth / 2;
        const offsetY = e.clientY - element.offsetHeight / 2;

        x.set(offsetX);
        y.set(offsetY);
      });
    };

    const handlePointerEnter = () => setIsVisible(true);
    const handlePointerLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerenter", handlePointerEnter);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerenter", handlePointerEnter);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, x, y]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      animate={{ 
        scale: isVisible ? 1 : 0.8,
        opacity: isVisible ? 1 : 0.3
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30,
        mass: 0.5
      }}
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,0,136,0.4) 0%, rgba(255,0,136,0.15) 80%)",
        boxShadow: "0 0 30px rgba(255, 0, 136, 0.6), inset 0 0 15px rgba(255,0,136,0.3)",
        border: "2px solid rgba(255, 0, 136, 0.6)",
        x,
        y,
        willChange: "transform",
      }}
    />
  );
}
