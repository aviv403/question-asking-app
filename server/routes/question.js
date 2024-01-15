const express = require("express");
const {
  getSingleQuestion,
  createQuestion,
} = require("../controllers/question");

const router = express.Router();

// @route GET - api/v1/question/:id
router.route("/:id").get(getSingleQuestion)

// @route POST- api/v1/question/
router.route("/").post(createQuestion)

module.exports = router;
