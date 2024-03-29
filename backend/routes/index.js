const express = require("express");

// import all the routes here
const userRoutes = require("./user");
const journalRoutes = require("./journal");

// Create a router object (Stores all endpoints)
const router = express.Router();

/**
 * GET status
 */
router.get("/status", (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

router.use("/user", userRoutes);
router.use("/journal", journalRoutes);

module.exports = router;
