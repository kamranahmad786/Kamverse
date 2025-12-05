// src/components/Education.jsx
import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const educationList = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institute: "Biju Patnaik University of Technology (BPUT)",
      year: "2023 – 2026",
      mark: "CGPA: 7.27 (Till 6th semester)",
    },
    {
      degree: "Diploma in Engineering",
      institute: "Jharkhand University of Technology (JUT)",
      year: "2020 – 2023",
      mark: "Aggregate: 78.96%",
    },
    {
      degree: "Class 10 (ICSE)",
      institute: "ICSE Board",
      year: "2018 – 2019",
      mark: "64.8%",
    },
  ];

  return (
    <section
      id="education"
      className="w-full min-h-screen px-6 py-20 bg-white dark:bg-gray-900"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white flex justify-center items-center gap-3">
        <GraduationCap size={38} />
        Education
      </h2>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Desktop Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700"></div>

        {/* Mobile Line */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700"></div>

        {/* Education Entries */}
        <div className="flex flex-col gap-16">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } md:items-start items-center`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? "md:left-1/2 left-4" : "md:left-1/2 left-4"
                } w-4 h-4 rounded-full bg-gray-700 dark:bg-gray-300 border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-20`}
              ></div>

              {/* Card */}
              <div
                className="w-full md:w-[48%] bg-gray-50 dark:bg-gray-800 border border-gray-200 
                dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all px-6 py-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                  {edu.institute}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {edu.year}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                  {edu.mark}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
