import React, { useEffect, useState } from "react";
import api from "../services/api";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/api/projects");
        setProjects(res.data.projects || []);
      } catch (err) {
        console.error("Error loading projects:", err);
      }
    })();
  }, []);

  return (
    <section
      id="projects"
      className="w-full min-h-screen px-6 py-20 bg-white dark:bg-gray-900"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      {/* SaaS Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            Loading projects...
          </p>
        ) : (
          projects.map((p) => (
            <div
              key={p._id}
              className="group border border-gray-200 dark:border-gray-700 rounded-xl 
                         p-6 bg-white dark:bg-gray-800 shadow-sm 
                         hover:shadow-lg hover:border-gray-300 
                         transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              {p.image && (
                <div className="w-full h-48 overflow-hidden rounded-lg mb-5">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
                {p.description}
              </p>

              {/* Tech Stack */}
              {p.techStack?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 
                                 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex justify-between items-center mt-6">
                {/* Live Link */}
                <a
                  href={p.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 hover:underline"
                >
                  Live Demo <FaExternalLinkAlt size={14} />
                </a>

                {/* GitHub Link */}
                <a
                  href={p.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 font-medium flex items-center gap-1 hover:underline"
                >
                  GitHub <FaGithub size={16} />
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
