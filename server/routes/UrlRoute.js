const express = require("express");
const {
  CreateUrl,
  getShortUrlDetails,
  deleteUrl,
} = require("../controllers/ShortNerController");
const { optionalAuth, authMiddleware } = require("../middleware/authMiddleware");
const route = express.Router();
route.post("/create", optionalAuth, CreateUrl);
route.get("/geturls", authMiddleware, getShortUrlDetails);
route.delete("/delete/:id", authMiddleware, deleteUrl);

module.exports = route;
