require("dotenv").config();
const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const dbConfig = require("./dbConfig");
const route = require("./routes");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
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
