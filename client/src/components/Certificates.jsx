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
      className="w-full min-h-screen py-20 px-6 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Certificates & Achievements
        </motion.h2>

        {/* Loading State */}
        {certificates.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-10">
            Loading certificates...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {certificates.map((cert, index) => (
              <motion.div
                key={cert._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-gray-200 dark:border-gray-700 rounded-xl 
                           shadow-sm hover:shadow-md transition-all bg-gray-50 
                           dark:bg-gray-800 overflow-hidden"
              >
                {/* Certificate Image */}
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 bg-white/80 dark:bg-gray-900/60 
                                 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 
                                 transition"
                    >
                      <ExternalLink size={18} className="text-gray-900 dark:text-white" />
                    </a>
                  )}
                </div>

                {/* Certificate Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </p>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 italic">
                    {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        )}
      </div>
    </section>
  );
}
