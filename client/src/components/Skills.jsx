// src/components/Skills.jsx
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { motion } from "framer-motion";

// React Icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  // Map skill names to icons + glow colors
  const skillIcons = {
    React: { icon: <FaReact size={50} color="#61dafb" />, glow: "shadow-cyan-400" },
    "Node.js": { icon: <FaNodeJs size={50} color="#3C873A" />, glow: "shadow-green-400" },
    MongoDB: { icon: <SiMongodb size={50} color="#47A248" />, glow: "shadow-emerald-400" },
    Express: { icon: <SiExpress size={50} color="#000" />, glow: "shadow-gray-400" },
    "Tailwind CSS": { icon: <SiTailwindcss size={50} color="#38B2AC" />, glow: "shadow-teal-400" },
    SQL: { icon: <SiMysql size={50} color="#F29111" />, glow: "shadow-orange-400" },
    JavaScript: { icon: <SiJavascript size={50} color="#F7DF1E" />, glow: "shadow-yellow-400" },
    HTML5: { icon: <FaHtml5 size={50} color="#E34F26" />, glow: "shadow-orange-500" },
    CSS3: { icon: <FaCss3Alt size={50} color="#1572B6" />, glow: "shadow-blue-500" },
    Python: { icon: <FaPython size={50} color="#306998" />, glow: "shadow-indigo-400" },
    Database: { icon: <FaDatabase size={50} color="#F29111" />, glow: "shadow-amber-400" },
    "C++": { icon: <SiCplusplus size={50} color="#00599C" />, glow: "shadow-blue-400" },
    "UI/UX": { icon: <span className="text-4xl">🎨</span>, glow: "shadow-pink-400" },
  };

  // Default fallback skills
  const defaultSkills = [
    { _id: 1, name: "React", category: "Frontend" },
    { _id: 2, name: "JavaScript", category: "Frontend" },
    { _id: 3, name: "HTML5", category: "Frontend" },
    { _id: 4, name: "CSS3", category: "Frontend" },
    { _id: 5, name: "Tailwind CSS", category: "Frontend" },
    { _id: 6, name: "Node.js", category: "Backend" },
    { _id: 7, name: "Express", category: "Backend" },
    { _id: 8, name: "MongoDB", category: "Backend" },
    { _id: 9, name: "SQL", category: "Backend" },
    { _id: 10, name: "Database", category: "Backend" },
    { _id: 11, name: "Python", category: "Others" },
    { _id: 12, name: "C++", category: "Others" },
    { _id: 13, name: "UI/UX", category: "Others" },
    
  ];

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/skills");
        if (res.data.skills && res.data.skills.length > 0) {
          setSkills(res.data.skills);
        } else {
          setSkills(defaultSkills);
        }
      } catch (err) {
        console.error(err);
        setSkills(defaultSkills);
      }
    })();
  }, []);

  // Group skills by category
  const groupedSkills = {
    Frontend: skills.filter((s) => s.category === "Frontend"),
    Backend: skills.filter((s) => s.category === "Backend"),
    Others: skills.filter((s) => s.category === "Others"),
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white"
    >
      {/* ⚡ Title */}
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text 
                     bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 
                     mb-16 tracking-wide drop-shadow-lg">
         My Superpowers (Skills)
      </h2>

      {/* Categories */}
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="mb-16 w-full max-w-6xl ml-auto mr-auto">
          <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text 
                         bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600">
            {category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {skills.map((s, i) => (
              <SkillCard
                key={s._id || i}
                i={i}
                name={s.name}
                icon={skillIcons[s.name]?.icon}
                glow={skillIcons[s.name]?.glow || "shadow-purple-400"}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function SkillCard({ name, i, icon }) {
  const gradient = `linear-gradient(135deg, ${hue(i * 40)}, ${hue(i * 40 + 60)})`;

  return (
    <motion.div
      className="relative w-full max-w-xs sm:max-w-sm md:w-64 h-72"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Outer gradient border */}
      <div
        className="w-full h-full rounded-2xl p-[3px]" // border thickness
        style={{ background: gradient }}
      >
        {/* Inner card */}
        <div className="flex flex-col justify-center items-center w-full h-full 
                        rounded-2xl bg-gray-900 text-white shadow-xl 
                        transition-all duration-500 hover:scale-105">
          <span className="text-6xl mb-3">{icon || "💡"}</span>
          <p className="text-xl font-semibold">{name}</p>
        </div>
      </div>
    </motion.div>
  );
}





/* Dynamic gradient colors */
const hue = (h) => `hsl(${h}, 100%, 50%)`;

/* Gradient splash shape */
const splash = {
  position: "absolute",
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};
