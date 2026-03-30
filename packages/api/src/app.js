import errorHandler from "./middleware/errorHandler.js";
import express from "express";
import cors from "cors";
import quoteRouter from "./routes/quotes.js";
import reviewsRouter from "./routes/reviews.js";
import eventRouter from "./routes/events.js";

const allowedOrigins = [
  "https://downeyautospa.com",
  "https://www.downeyautospa.com",
  "https://downey-auto-spa.onrender.com",
  "http://localhost:5173",
];

const app = express();
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
app.use(express.json());

app.use("/api", quoteRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api", eventRouter);
app.use(errorHandler);

export default app;
