// src/components/Experience.jsx
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Google Gemini",
      role: "Google Student Ambassador",
      duration: "Sep 2025 – Present",
      description:
        "Supporting Google’s developer ecosystem, conducting workshops, and enabling students to adopt modern AI technologies.",
    },
    {
      company: "PrOrator",
      role: "Frontend Development Intern",
      duration: "May 2025 – Jul 2025",
      description:
        "Built production-ready interfaces, optimized performance, and implemented reusable UI components in a MERN environment.",
    },
    {
      company: "Google Developer Club, BBSR",
      role: "Member",
      duration: "2024 – Present",
      description:
        "Contributed to community events, mentored juniors, and organized technical bootcamps.",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen px-6 py-20 bg-white dark:bg-gray-900"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 
      text-gray-900 dark:text-white flex justify-center gap-2">
        <Briefcase size={38} />
        Work Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* Desktop Timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 
                        w-[2px] bg-gray-300 dark:bg-gray-700"></div>

        {/* Mobile Timeline */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 
                        w-[2px] bg-gray-300 dark:bg-gray-700"></div>

        {/* Experience Items */}
        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* TIMELINE DOT */}
              <div
                className={`
                  absolute
                  md:left-1/2
                  left-6
                  w-4 h-4 rounded-full 
                  bg-gray-700 dark:bg-gray-300 
                  border-4 border-white dark:border-gray-900 
                  transform md:-translate-x-1/2 
                  z-20
                `}
              ></div>

              {/* CARD */}
              <div
                className={`
                  w-full md:w-[48%] 
                  bg-gray-50 dark:bg-gray-800 
                  border border-gray-200 dark:border-gray-700 
                  rounded-xl shadow-sm hover:shadow-md 
                  transition-all px-6 py-6
                  
                  ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}
                  
                  /* MOBILE PADDING SO TIMELINE DOESN’T TOUCH TEXT */
                  pl-12 
                `}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>

                <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                  {exp.company}
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {exp.duration}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
