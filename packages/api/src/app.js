import helmet from "helmet";
import rateLimit from "express-rate-limit";
import errorHandler from "./middleware/errorHandler.js";
import express from "express";
import cors from "cors";
import quoteRouter from "./routes/quotes.js";
import reviewsRouter from "./routes/reviews.js";
import eventRouter from "./routes/events.js";
import chatRouter from "./routes/chat.js";

const allowedOrigins = [
  "https://downeyautospa.com",
  "https://www.downeyautospa.com",
  "https://downey-auto-spa.onrender.com",
  "http://localhost:5173",
];

const app = express();

app.use(helmet({
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
}));

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." },
});

app.use(express.json({ limit: "50kb" }));

app.get("/health", (req, res) => res.sendStatus(200));

app.use("/api", globalLimiter);
app.use("/api", quoteRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api", eventRouter);
app.use("/api", chatRouter);
app.use(errorHandler);

export default app;
