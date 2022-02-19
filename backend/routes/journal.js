const express = require("express");

const { journal: controller } = require("../controllers/");

// Can add a validator later

const router = express.Router();

// unprotected route
router.route("/get").get(controller.get);
router.route("/create").post(controller.create);
router.route("/status").get(controller.status);
// protected route
//router.route('/profile').get(authenticated, controller.getProfile);

module.exports = router;
