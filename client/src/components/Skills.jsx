// src/components/Skills.jsx
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { motion } from "framer-motion";

// Icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiMysql,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiDocker,
  SiAmazons3,
} from "react-icons/si";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  const skillIcons = {
    React: <FaReact size={40} className="text-blue-400" />,
    "Next.js": <SiNextdotjs size={40} className="text-black dark:text-white" />,
    "Redux Toolkit": <SiRedux size={40} className="text-purple-500" />,
    TypeScript: <SiTypescript size={40} className="text-blue-500" />,
    "Node.js": <FaNodeJs size={40} className="text-green-500" />,
    MongoDB: <SiMongodb size={40} className="text-green-600" />,
    Express: <SiExpress size={40} className="text-gray-400" />,
    "Tailwind CSS": <SiTailwindcss size={40} className="text-teal-400" />,
    SQL: <SiMysql size={40} className="text-orange-500" />,
    JavaScript: <SiJavascript size={40} className="text-yellow-400" />,
    HTML5: <FaHtml5 size={40} className="text-red-500" />,
    CSS3: <FaCss3Alt size={40} className="text-blue-500" />,
    Python: <FaPython size={40} className="text-blue-400" />,
    Database: <FaDatabase size={40} className="text-gray-300" />,
    Docker: <SiDocker size={40} className="text-blue-400" />,
    Cloud: <SiAmazons3 size={40} className="text-yellow-500" />,
    Git: <FaGitAlt size={40} className="text-orange-500" />,
    DSA: <span className="text-3xl font-bold">📘</span>,
    "System Design": <span className="text-3xl font-bold">🏗️</span>,
    "JWT Auth": <span className="text-2xl font-bold">🔐</span>,
    "REST APIs": <span className="text-2xl font-bold">🔗</span>,
    "UI/UX": <span className="text-3xl">🎨</span>,
    "C++": <SiCplusplus size={40} className="text-blue-400" />,
  };

  // Updated Default Skills
  const defaultSkills = [
    // FRONTEND
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Redux Toolkit", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },

    // BACKEND
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "SQL", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "JWT Auth", category: "Backend" },
    { name: "Docker", category: "Backend" },
    { name: "Cloud", category: "Backend" },

    // OTHERS
    { name: "Python", category: "Others" },
    { name: "C++", category: "Others" },
    { name: "Git", category: "Others" },
    { name: "DSA", category: "Others" },
    { name: "System Design", category: "Others" },
    { name: "UI/UX", category: "Others" },
  ];

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/skills");
        if (res.data.skills?.length) setSkills(res.data.skills);
        else setSkills(defaultSkills);
      } catch {
        setSkills(defaultSkills);
      }
    })();
  }, []);

  const grouped = {
    Frontend: skills.filter((s) => s.category === "Frontend"),
    Backend: skills.filter((s) => s.category === "Backend"),
    Others: skills.filter((s) => s.category === "Others"),
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen px-6 py-20 bg-white dark:bg-gray-900"
    >
      <h2 className="mb-16 text-4xl font-bold text-center text-gray-900 md:text-5xl dark:text-white">
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {Object.entries(grouped).map(([category, list]) => (
          <div key={category}>
            <h3 className="mb-8 text-2xl font-semibold text-gray-800 dark:text-gray-200">
              {category}
            </h3>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {list.map((skill, i) => (
                <SkillCard
                  key={i}
                  name={skill.name}
                  icon={skillIcons[skill.name]}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ name, icon }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex flex-col items-center justify-center gap-3 p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm dark:border-gray-700 rounded-xl dark:bg-gray-800 hover:shadow-md"
    >
      <div className="text-5xl">{icon}</div>
      <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
        {name}
      </p>
    </motion.div>
  );
}
