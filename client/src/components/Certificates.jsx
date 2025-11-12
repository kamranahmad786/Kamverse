import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fetchCertificates } from "../services/certificateApi";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates()
      .then(setCertificates)
      .catch((err) => console.error("Error loading certificates:", err));
  }, []);

  return (
    <section
      id="certificates"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white "
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 
                     bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 
                     text-transparent bg-clip-text"
        >
          My Certificates
        </motion.h2>

        {certificates.length === 0 ? (
          <p className="text-gray-400 mt-10">Loading certificates...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert._id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 
                           rounded-2xl shadow-xl overflow-hidden border border-gray-700 
                           hover:shadow-[0_0_30px_#9333ea] transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 bg-black/50 p-2 rounded-full 
                                 hover:bg-fuchsia-500 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold text-fuchsia-400">{cert.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mt-1 italic">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
