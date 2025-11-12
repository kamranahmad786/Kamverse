// backend/utils/logger.js
import winston from "winston";

/**
 * Simple Winston logger with console (dev) + file (prod) transports.
 * Also exposes `.stream.write` for morgan integration: app.use(morgan('combined', { stream: logger.stream }));
 */

const { combine, timestamp, printf, colorize, errors } = winston.format;

const myFormat = printf(({ level, message, timestamp, stack }) => {
  // include stack trace if available
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: combine(
    errors({ stack: true }), // <-- capture stack traces
    timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
    // Console for dev
    new winston.transports.Console({
      format: combine(colorize({ all: true }), timestamp(), myFormat),
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "logs/exceptions.log" })
  ],
  exitOnError: false,
});

// stream for morgan
logger.stream = {
  write: (message) => {
    // morgan adds a newline — trim it
    logger.info(message.trim());
  },
};

export default logger;
