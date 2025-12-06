// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/ContactForm";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";
import Experience from "./components/Experience";
import Education from "./components/Education";
import CursorFollower from "./components/CursorFollower";
import Loader from "./components/Loader";
// import ScrollIndicator from "./components/ScrollIndicator"; 
import { ThemeProvider } from "./context/ThemeContext";
import Certificates from "./components/Certificates";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">

      {loading && <Loader />}

      {/* Scroll progress bar */}
      {/* <ScrollIndicator 
        height="4px"
        zIndex={1000}
      /> */}

      <Navbar />
      
      {/* Main content */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificates" element={<Certificates/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <CursorFollower />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;

