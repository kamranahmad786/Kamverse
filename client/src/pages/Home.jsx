import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";
import Chatbot from "../components/Chatbot";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certificates from "../components/Certificates"; // ✅ Added Certificates import
import Footer from "../components/Footer";
// import ScrollIndicator from "../components/ScrollIndicator";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden bg-white dark:bg-gray-900">
      {/* <ScrollIndicator/> */}

      {/* About Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <About />
      </section>

      {/* Projects Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
        <Projects />
      </section>

      {/* Skills Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <Skills />
      </section>

      {/* Experience Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
        <Experience />
      </section>

      {/* Education Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <Education />
      </section>

      {/* ✅ Certificates Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
        <Certificates />
      </section>

      {/* Contact Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <ContactForm />
      </section>

      {/* Chatbot (Floating) */}
      <Chatbot />

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
