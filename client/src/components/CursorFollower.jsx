import { motion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ref = useRef(null);

  const x = useSpring(0, { damping: 15, stiffness: 120 });
  const y = useSpring(0, { damping: 15, stiffness: 120 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      const element = ref.current;
      if (!element) return;
      x.set(e.clientX - element.offsetWidth / 2);
      y.set(e.clientY - element.offsetHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      animate={{ scale: 1.5 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,0,136,0.4) 0%, rgba(255,0,136,0.15) 80%)",
        boxShadow: "0 0 30px rgba(255, 0, 136, 0.6)",
        border: "2px solid rgba(255, 0, 136, 0.6)",
        x,
        y,
      }}
    />
  );
}
