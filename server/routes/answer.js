const express = require("express");
const { voteAnswer } = require("../controllers/answer");

const router = express.Router();

// @route POST - api/v1/answer/vote/
router.route("/vote").post(voteAnswer);



module.exports = router;
