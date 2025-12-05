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
      className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 
                 bg-gray-100 dark:bg-gray-900"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white flex justify-center items-center gap-3">
          <Mail size={32} /> Contact Me
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl">
          Whether you want to discuss a project, ask a question, or just say hello — feel free to reach out.
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <form onSubmit={submit} className="space-y-6">

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg 
                         transition-all shadow-sm hover:shadow-md"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <span className="text-green-600 font-semibold">Message sent!</span>
            )}
            {status === "error" && (
              <span className="text-red-600 font-semibold">Failed to send.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
