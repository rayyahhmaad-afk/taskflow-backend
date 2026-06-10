const express = require("express");
const controller = require("./auth.controller");
const authMiddleware = require("../../middleware/auth.middleware");

const router = express.Router();

router.post("/register", controller.register);
router.post("/login", controller.login);

router.get(
  "/profile",
  authMiddleware,
  controller.profile
);

module.exports = router;