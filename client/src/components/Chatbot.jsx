// src/components/Chatbot.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import chatApi from "../services/chatApi";
import { MessageSquare, X } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your assistant. Feel free to ask about Kamran’s projects, skills, or experience.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await chatApi.ask(input);
      setMessages((prev) => [
        ...prev,
        { text: response.reply || "No response available.", sender: "bot" },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong. Please try again.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Floating Open Button */}
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-12 h-12 rounded-full 
                     bg-gray-900 dark:bg-gray-200 text-white dark:text-black shadow-lg"
          >
            <MessageSquare size={22} />
          </motion.button>
        )}

        {/* Chat Window */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            className="w-80 md:w-96 h-[500px] bg-white dark:bg-gray-900 
                     border border-gray-200 dark:border-gray-700 
                     rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b 
                            border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Assistant
              </span>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg text-sm max-w-[75%] 
                      ${
                        msg.sender === "user"
                          ? "bg-gray-900 text-white dark:bg-gray-200 dark:text-black"
                          : "bg-white dark:bg-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                      }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {loading && (
                <div className="flex space-x-2 items-center text-gray-500 dark:text-gray-400">
                  <span className="w-2 h-2 bg-current rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-current rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-current rounded-full animate-bounce delay-300"></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                           focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2 bg-gray-900 dark:bg-gray-200 text-white dark:text-black 
                             rounded-lg font-medium hover:opacity-90 transition"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
