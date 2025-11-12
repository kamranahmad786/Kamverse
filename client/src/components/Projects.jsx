import React, { useEffect, useState } from "react";
import api from "../services/api";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/projects");
        setProjects(res.data.projects || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text 
                     bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 
                     mb-16 tracking-wide drop-shadow-lg">
         My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <div className="text-gray-400 text-center col-span-full">
            No projects yet
          </div>
        ) : (
          projects.map((p) => (
            <div
              key={p._id}
              className="bg-gray-800/70 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition transform duration-300 p-6 flex flex-col justify-between"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm flex-1">{p.description}</p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {(p.techStack || []).map((techStack, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-medium shadow-md"
                  >
                    {techStack}
                  </span>
                ))}
              </div>

              {/* Image */}

              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="mt-4 w-full h-48 object-cover rounded-long shadow-md"></img>
              )}

              {/* Links */}
              <div className="mt-6 flex justify-between items-center">
                <a
                  href={p.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Live <FaExternalLinkAlt />
                </a>
                <a
                  href={p.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-semibold"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
