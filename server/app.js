import dotenv from "dotenv";
dotenv.config(); // 🔑 Load environment variables at the very top

import express from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import connectDB from "./src/config/db.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import skillRoutes from "./src/routes/skillRoutes.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import chatRoutes from "./src/routes/chatRoutes.js";
import { notFound, errorHandler } from "./src/utils/errorHandler.js";
import certificateRoutes from "./src/routes/certificateRoutes.js";

const app = express();

// ✅ Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "2mb" }));
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());

// ✅ Connect to DB safely
(async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    // In development or when SKIP_RAG is set, don't exit the process so the
    // developer can still test endpoints that don't require DB (like dev fallback chat).
    if (process.env.NODE_ENV === "production" && process.env.SKIP_RAG !== "true") {
      process.exit(1);
    } else {
      console.warn("Continuing without DB connection (development or SKIP_RAG=true)");
    }
  }
})();

// ✅ API Routes
app.use("/api/portfolio", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/projects", projectRoutes);

// ✅ Health check
app.get("/health", (req, res) =>
  res.json({ status: "ok", uptime: process.uptime() })
);

// ✅ Error handlers
app.use(notFound);
app.use(errorHandler);

export default app;
