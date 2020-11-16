const path = require("path");
const router = require("express").Router();

  // index route loads index.html
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // exercise route loads exercise.html
  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // stats route loads stats.html
  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  router.get("*", (req, res) => {
    res.redirect("/");
  });

module.exports = router;