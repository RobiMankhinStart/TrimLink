const express = require("express");
const {
  Register,
  login,
  getProfile,
  logout,
} = require("../controllers/AuthController");
const { authMiddleware } = require("../middleware/authMiddleware");
const route = express.Router();
route.post("/register", Register);
route.post("/login", login);
route.post("/logout", logout);
route.get("/getprofile", authMiddleware, getProfile);

module.exports = route;
