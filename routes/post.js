const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

const { communityPost } = controllers;

router.post("/", communityPost);

module.exports = router;