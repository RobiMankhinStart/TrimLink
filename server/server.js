require("dotenv").config();
const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const dbConfig = require("./dbConfig");
const route = require("./routes");
const app = express();
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
].filter(Boolean);

const isAllowedOrigin = (origin) => {
  if (!origin) return true;

  return (
    allowedOrigins.includes(origin) ||
    origin.includes(".vercel.app") ||
    origin.includes("localhost") ||
    origin.includes("127.0.0.1")
  );
};

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      if (isAllowedOrigin(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
dbConfig();
app.use((req, res, next) => {
  console.log(
    `📨 [${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`,
  );
  next();
});
app.use(route);
app.listen(8000, (req, res) => {
  console.log("server is running on port 8000");
});
