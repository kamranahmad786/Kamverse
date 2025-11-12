import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const educationList = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institute: "BPUT",
      year: "2023 - 2026",
      mark: "7.27 CGPA (Till 6th semester)",
      colors: "from-cyan-400 via-blue-500 to-indigo-600",
      glow: "shadow-[0_0_35px_rgba(59,130,246,0.9)]",
    },
    {
      degree: "Diploma in Engineering",
      institute: "JUT",
      year: "2020 - 2023",
      mark: "78.96% (Aggregate)",
      colors: "from-green-400 via-emerald-500 to-teal-600",
      glow: "shadow-[0_0_35px_rgba(16,185,129,0.9)]",
    },
    {
      degree: "Schooling (10th)",
      institute: "ICSE",
      year: "2018 - 2019",
      mark: "64.8% (Aggregate)",
      colors: "from-amber-400 via-orange-500 to-red-600",
      glow: "shadow-[0_0_35px_rgba(249,115,22,0.9)]",
    },
  ];

  return (
    <section
      id="education"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 
                     mb-16 tracking-wide flex items-center gap-2">
        <GraduationCap size={36} />
        My Education Journey
      </h2>

      {/* Desktop Timeline Line */}
      <div className="absolute top-40 bottom-20 left-1/2 w-[3px] bg-gradient-to-b 
                      from-cyan-400 via-blue-500 to-indigo-600 transform -translate-x-1/2 
                      md:block hidden z-10 blur-[1px]"></div>

      {/* Mobile Timeline Line */}
      <div className="absolute top-40 bottom-20 left-8 w-[3px] bg-gradient-to-b 
                      from-cyan-400 via-blue-500 to-indigo-600 
                      md:hidden block z-10 blur-[1px]"></div>

      {/* Cards */}
      <div className="w-full max-w-6xl flex flex-col gap-16 relative z-20">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } justify-start`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute ${
                index % 2 === 0 ? "md:left-1/2 left-[7px]" : "md:left-1/2 left-[7px]"
              } w-6 h-6 rounded-full bg-gradient-to-r ${edu.colors} border-4 border-white 
              transform md:-translate-x-1/2 z-30`}
            ></div>

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 120 }}
              className={`relative w-full md:w-[45%] ml-12 md:ml-0 p-[2px] rounded-3xl bg-gradient-to-r ${edu.colors} ${edu.glow}`}
            >
              <div className="bg-[#0d0d11]/90 backdrop-blur-xl p-6 rounded-3xl">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-300 mt-1">{edu.institute}</p>
                <p className="text-sm text-gray-400 italic">{edu.year}</p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">{edu.mark}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
