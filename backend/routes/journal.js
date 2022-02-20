const express = require("express");

const { journal: controller } = require("../controllers/");

const router = express.Router();

// unprotected route
router.route("/getAll").post(controller.getAll);
router.route("/getOne").get(controller.getOne);
router.route("/create").post(controller.create);
router.route("/status").get(controller.status);

module.exports = router;
