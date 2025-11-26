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
        console.error(err);
      }
    })();
  }, []);

  return (
    <section
      id="projects"
      className="w-full min-h-screen px-6 py-16 text-white bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Section Title */}
      <h2 className="mb-16 text-4xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 drop-shadow-lg">
         My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.length === 0 ? (
          <div className="text-center text-gray-400 col-span-full">
            No projects yet
          </div>
        ) : (
          projects.map((p) => (
            <div
              key={p._id}
              className="bg-gray-800/70 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition transform duration-300 p-6 flex flex-col justify-between"
            >
              {/* Title */}
              <h3 className="mb-3 text-2xl font-semibold">{p.title}</h3>

              {/* Description */}
              <p className="flex-1 text-sm text-gray-300">{p.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {(p.techStack || []).map((techStack, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full shadow-md bg-gradient-to-r from-indigo-500 to-purple-500"
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
                  className="object-cover w-full h-48 mt-4 shadow-md rounded-long"></img>
              )}

              {/* Links */}
              <div className="flex items-center justify-between mt-6">
                <a
                  href={p.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 font-semibold text-black transition rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:opacity-90"
                >
                  Live <FaExternalLinkAlt />
                </a>
                <a
                  href={p.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 font-semibold bg-gray-700 rounded-lg hover:bg-gray-600"
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
