// src/components/ContactForm.jsx
import React, { useState } from "react";
import api from "../services/api";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.post("/contact", form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-center items-center 
             bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden"
    >
      {/* Header */}
      <h2 className="text-4xl font-extrabold text-center mb-16 flex items-center justify-center gap-3 
                     text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 
                     drop-shadow-lg">
        <Mail size={36} /> Get in Touch
      </h2>

      {/* Contact Card */}
      <div className="flex justify-center w-full">
        <div className="relative w-[90%] md:w-[50%] rounded-2xl p-[10px] bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600">
    <div className="w-full h-full rounded-2xl bg-white p-8 shadow-xl 
                    transform transition-all duration-500 hover:scale-105 
                    hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.8)]">
          <form onSubmit={submit} className="space-y-6">
            
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="peer w-full p-3 rounded-xl border border-gray-300 
                           bg-white text-black placeholder-transparent
                           focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                placeholder="Your Name"
              />
              <label
                className="absolute left-3 top-3 text-gray-500 transition-all 
                           peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                           peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm 
                           peer-focus:text-pink-600 bg-white px-1 rounded"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="peer w-full p-3 rounded-xl border border-gray-300 
                           bg-white text-black placeholder-transparent
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Your Email"
              />
              <label
                className="absolute left-3 top-3 text-gray-500 transition-all 
                           peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                           peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm 
                           peer-focus:text-indigo-600 bg-white px-1 rounded"
              >
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows="4"
                className="peer w-full p-3 rounded-xl border border-gray-300 
                           bg-white text-black placeholder-transparent
                           focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Your Message"
              />
              <label
                className="absolute left-3 top-3 text-gray-500 transition-all 
                           peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                           peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm 
                           peer-focus:text-purple-600 bg-white px-1 rounded"
              >
                Your Message
              </label>
            </div>

            {/* Button + Status */}
            <div className="flex items-center gap-3">
              <button
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 
                           text-white rounded-xl font-semibold shadow-md hover:shadow-lg 
                           hover:scale-105 transition-transform"
                type="submit"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "sent" && (
                <span className="text-green-600 font-medium">
                  ✅ Sent — Thanks!
                </span>
              )}
              {status === "error" && (
                <span className="text-red-600 font-medium">
                  ❌ Error sending message
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
