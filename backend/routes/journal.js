const express = require("express");

const { journal: controller } = require("../controllers/");

const router = express.Router();

// unprotected route
router.route("/get").get(controller.get);
router.route("/create").post(controller.create);
router.route("/status").get(controller.status);

module.exports = router;
