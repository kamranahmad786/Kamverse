import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import cors from "cors";


// ✅ Load .env from current folder (server/.env)
dotenv.config();
console.log("🔍 MONGO_URI =", process.env.MONGO_URI);



const PORT = process.env.PORT || 4000;

// Create server
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// production

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://kamverse.vercel.app", // your frontend on Vercel
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("🛑 Server shutting down...");
  server.close(() => {
    console.log("✅ Server closed gracefully");
    process.exit(0);
  });
});

process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});
