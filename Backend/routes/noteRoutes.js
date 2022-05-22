const express = require("express");
const { getNotes } = require("../controllers/noteController");
const router = express.Router();
router.route("/").get(getNotes);
router.route("/").get();
// router.route("/create").post();
// router.route("/:id").get().put().delete();
module.exports = router;
