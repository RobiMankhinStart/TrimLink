const express = require("express");
const authRoute = require("./AuthRoutes");
const ShortUrlRoute = require("./UrlRoute");
const { RedictUrl } = require("../controllers/ShortNerController");
const route = express.Router();
route.get("/", (req, res) => {
  res.send("This is the Home/Index route");
});
route.use("/auth", authRoute);

route.use("/url", ShortUrlRoute);
route.get("/:id", RedictUrl);

// route.get("/:id",(req,res)=>{})
route.use((req, res) => {
  res.send(
    "404 not found. Oops! The link you followed might be broken or the page has been removed.",
  );
});
module.exports = route;
