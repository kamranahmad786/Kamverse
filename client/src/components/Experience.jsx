import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Google Gemini",
      role: "Google Student Ambassador",
      duration: "Sep 2025 – Present",
      description:
        "Collaborating with the Google team to promote AI innovation and student engagement through hands-on programs.",
      colors: "from-pink-500 via-purple-500 to-indigo-600",
      glow: "shadow-[0_0_35px_rgba(168,85,247,0.8)]",
    },
    {
      company: "PrOrator",
      role: "Front-End Development Intern",
      duration: "May 2025 - Jul 2025",
      description:
        "Developed high-performance web apps with MERN stack and integrated RAG-based AI chat experiences.",
      colors: "from-cyan-400 via-blue-500 to-indigo-600",
      glow: "shadow-[0_0_35px_rgba(99,102,241,0.8)]",
    },
    {
      company: "Google Developer Club, BBSR",
      role: "Member",
      duration: "2024 - Present",
      description:
        "Led developers in open-source projects, mentored peers, and organized coding workshops.",
      colors: "from-fuchsia-400 via-pink-500 to-red-500",
      glow: "shadow-[0_0_35px_rgba(236,72,153,0.8)]",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 
                     mb-16 tracking-wide flex items-center gap-2">
        <Briefcase size={36} />
        My Work Experience
      </h2>

      {/* Vertical Timeline Line */}
      <div className="absolute top-40 bottom-20 left-1/2 w-[3px] bg-gradient-to-b from-fuchsia-500 via-purple-500 to-indigo-500 transform -translate-x-1/2 
                      md:block hidden z-10 blur-[1px]"></div>

      {/* Mobile Timeline Line (visible on small screens) */}
      <div className="absolute top-40 bottom-20 left-8 w-[3px] bg-gradient-to-b from-fuchsia-500 via-purple-500 to-indigo-500 
                      md:hidden block z-10 blur-[1px]"></div>

      {/* Experience Cards */}
      <div className="w-full max-w-6xl flex flex-col gap-16 relative z-20">
        {experiences.map((exp, index) => (
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
              } w-6 h-6 rounded-full bg-gradient-to-r ${exp.colors} border-4 border-white 
              transform md:-translate-x-1/2 z-30`}
            ></div>

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 120 }}
              className={`relative w-full md:w-[45%] ml-12 md:ml-0 p-[2px] rounded-3xl bg-gradient-to-r ${exp.colors} ${exp.glow}`}
            >
              <div className="bg-[#0d0d11]/90 backdrop-blur-xl p-6 rounded-3xl">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {exp.role}
                </h3>
                <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
                <p className="text-sm text-gray-400 italic">{exp.duration}</p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
