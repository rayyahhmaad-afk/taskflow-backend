const express = require("express");

const router = express.Router();

const controller = require("./project.controller");
const authMiddleware = require("../../middleware/auth.middleware");

router.post(
  "/",
  authMiddleware,
  controller.create
);

router.get(
  "/",
  authMiddleware,
  controller.getAll
);

module.exports = router;
